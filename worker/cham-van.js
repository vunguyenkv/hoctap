// Cloudflare Worker proxy: nhận bài văn của bé, dùng Cloudflare Workers AI (MIỄN PHÍ,
// nằm trong gói free 10.000 lượt/ngày của tài khoản Cloudflare, không cần thẻ, không cần
// API key Anthropic) để chấm điểm + nhận xét.
//
// Deploy: xem worker/README.md

const MODEL = '@cf/meta/llama-3.2-3b-instruct';
const MAX_ESSAY_LEN = 1200; // ký tự — chặn spam/lạm dụng quota free
const MAX_PROMPT_LEN = 300;

function corsHeaders(origin, allowedOrigins){
  const allow = allowedOrigins.includes(origin) ? origin : allowedOrigins[0];
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

function buildSystemPrompt(){
  return `Bạn là một cô giáo Tiếng Việt lớp 5 hiền hậu, kiên nhẫn và luôn động viên học sinh tiểu học ở Việt Nam.
Bạn sẽ nhận một ĐỀ BÀI và một BÀI VIẾT của học sinh (đoạn văn ngắn 3-5 câu). Hãy chấm điểm và nhận xét.

Nguyên tắc chấm:
- Thang điểm 0-10, chấm khoan dung phù hợp với học sinh lớp 5, không chấm khắt khe như học sinh lớn.
- Luôn tìm ít nhất 1 điểm tốt để khen trước, dù bài còn nhiều lỗi.
- Nhận xét ngắn gọn, dễ hiểu, dùng từ ngữ thân thiện với trẻ em, có thể dùng 1-2 emoji.
- Nếu có lỗi chính tả/ngữ pháp rõ ràng, chỉ ra NHẸ NHÀNG và gợi ý cách sửa, không chê.
- Nếu bài viết quá ngắn (dưới 2 câu) hoặc không liên quan đến đề bài, vẫn nhận xét nhẹ nhàng và gợi ý viết dài/đúng đề hơn.

Trả lời CHỈ bằng một object JSON hợp lệ, không thêm chữ nào khác, đúng định dạng:
{"diem": <số nguyên 0-10>, "loi_khen": "<1 câu khen cụ thể>", "goi_y": "<1 câu gợi ý cải thiện>"}`;
}

async function gradeEssay(ai, promptDe, essay){
  const userMsg = `ĐỀ BÀI: ${promptDe}\n\nBÀI VIẾT CỦA HỌC SINH:\n${essay}`;
  const result = await ai.run(MODEL, {
    messages: [
      { role: 'system', content: buildSystemPrompt() },
      { role: 'user', content: userMsg },
    ],
  });
  let text = (result && result.response) || '';
  if(typeof text !== 'string') text = JSON.stringify(text);
  const match = text.match(/\{[\s\S]*\}/);
  if(!match) throw new Error('Không đọc được kết quả chấm từ AI.');
  const parsed = JSON.parse(match[0]);
  return {
    diem: Math.max(0, Math.min(10, Math.round(Number(parsed.diem) || 0))),
    loi_khen: String(parsed.loi_khen || '').slice(0, 300),
    goi_y: String(parsed.goi_y || '').slice(0, 300),
  };
}

export default {
  async fetch(request, env) {
    const allowedOrigins = (env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean);
    const origin = request.headers.get('Origin') || '';

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders(origin, allowedOrigins) });
    }
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }
    if (allowedOrigins.length && !allowedOrigins.includes(origin)) {
      return new Response(JSON.stringify({ error: 'Origin không được phép.' }), {
        status: 403,
        headers: { 'content-type': 'application/json', ...corsHeaders(origin, allowedOrigins) },
      });
    }

    let body;
    try {
      body = await request.json();
    } catch (e) {
      return new Response(JSON.stringify({ error: 'Dữ liệu gửi lên không hợp lệ.' }), {
        status: 400,
        headers: { 'content-type': 'application/json', ...corsHeaders(origin, allowedOrigins) },
      });
    }

    const promptDe = String(body.prompt || '').slice(0, MAX_PROMPT_LEN);
    const essay = String(body.essay || '').trim();

    if (!promptDe || !essay) {
      return new Response(JSON.stringify({ error: 'Thiếu đề bài hoặc bài viết.' }), {
        status: 400,
        headers: { 'content-type': 'application/json', ...corsHeaders(origin, allowedOrigins) },
      });
    }
    if (essay.length > MAX_ESSAY_LEN) {
      return new Response(JSON.stringify({ error: `Bài viết quá dài (tối đa ${MAX_ESSAY_LEN} ký tự).` }), {
        status: 400,
        headers: { 'content-type': 'application/json', ...corsHeaders(origin, allowedOrigins) },
      });
    }

    try {
      const result = await gradeEssay(env.AI, promptDe, essay);
      return new Response(JSON.stringify(result), {
        headers: { 'content-type': 'application/json', ...corsHeaders(origin, allowedOrigins) },
      });
    } catch (e) {
      console.error('grade error:', e && e.message, e && e.stack);
      return new Response(JSON.stringify({ error: 'Không chấm được bài lúc này, thử lại sau nhé.' }), {
        status: 502,
        headers: { 'content-type': 'application/json', ...corsHeaders(origin, allowedOrigins) },
      });
    }
  },
};
