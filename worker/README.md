# Deploy Worker chấm văn (Cloudflare — hoàn toàn miễn phí)

Proxy này dùng **Cloudflare Workers AI** (model `@cf/meta/llama-3.1-8b-instruct`) để chấm bài văn —
nằm trong gói free 10.000 lượt/ngày của Cloudflare, **không cần thẻ, không cần API key của Anthropic.**

## Bước 1 — Cài Wrangler (CLI của Cloudflare) & đăng nhập
```
cd worker
npx wrangler login
```
(Mở trình duyệt, đăng nhập tài khoản Cloudflare đã có, bấm Allow.)

## Bước 2 — Deploy worker
```
npx wrangler deploy
```
Lệnh này tạo ra một Worker tên `cham-van-lop5`, in ra một URL dạng:
`https://cham-van-lop5.<tên-bạn>.workers.dev`

## Bước 3 — Giới hạn domain được phép gọi (chống xài chùa quota free)
Mở `wrangler.toml`, sửa `ALLOWED_ORIGINS` thành domain thật bạn dùng để mở web (ví dụ domain Cloudflare Pages sau này), cách nhau bằng dấu phẩy. Giữ `"null"` trong danh sách nếu vẫn muốn test bằng cách double-click mở file van.html trực tiếp. Sau khi sửa, deploy lại: `npx wrangler deploy`.

## Bước 4 — Gắn URL vào van.html
Mở `van.html`, tìm dòng:
```js
const GRADE_API_URL = '';
```
Điền URL Worker ở Bước 2 vào. Nếu để trống, web vẫn chạy bình thường nhưng phần "Tập làm văn" sẽ báo chưa cấu hình, các môn/dạng bài khác không ảnh hưởng.

## Chi phí
0 đồng. Workers AI free tier: 10.000 "Neurons" (đơn vị tính toán)/ngày — mỗi lần chấm 1 đoạn văn ngắn dùng rất ít, dư dùng cho một gia đình mỗi ngày luyện vài bài.

## Nếu sau này muốn chất lượng nhận xét tốt hơn
Có thể đổi sang gọi Claude API (Anthropic) — chất lượng tiếng Việt tốt hơn nhưng cần tài khoản có billing (~$1/tháng cho mức dùng này). Hỏi lại nếu muốn nâng cấp.
