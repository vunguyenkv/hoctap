const VAN_DATA = {
  "topics": [
    {
      "id": "tu-loai",
      "name": "📚 Từ loại",
      "questions": [
        {
          "type": "mcq",
          "prompt": "Từ nào dưới đây là danh từ?",
          "options": ["chạy", "đẹp", "học sinh", "nhanh"],
          "answerIndex": 2,
          "explanation": "\"Học sinh\" là danh từ vì nó gọi tên một loại người. \"Chạy\" là động từ, \"đẹp\"/\"nhanh\" là tính từ."
        },
        {
          "type": "mcq",
          "prompt": "Từ nào là động từ trong câu: \"Em bé đang ngủ rất ngon.\"?",
          "options": ["ngủ", "bé", "ngon", "đang"],
          "answerIndex": 0,
          "explanation": "\"Ngủ\" là động từ vì chỉ hoạt động của em bé."
        },
        {
          "type": "mcq",
          "prompt": "Từ nào là tính từ trong câu: \"Bầu trời hôm nay rất trong xanh.\"?",
          "options": ["bầu trời", "hôm nay", "rất", "trong xanh"],
          "answerIndex": 3,
          "explanation": "\"Trong xanh\" là tính từ, miêu tả đặc điểm của bầu trời."
        },
        {
          "type": "mcq",
          "prompt": "Từ nào trong các từ sau là đại từ xưng hô?",
          "options": ["tôi", "chạy", "đẹp", "nhà"],
          "answerIndex": 0,
          "explanation": "\"Tôi\" là đại từ dùng để xưng hô, thay cho tên người nói."
        },
        {
          "type": "mcq",
          "prompt": "Từ nào là quan hệ từ trong câu: \"Em thích đọc sách và xem phim hoạt hình.\"?",
          "options": ["đọc", "và", "sách", "phim"],
          "answerIndex": 1,
          "explanation": "\"Và\" là quan hệ từ, dùng để nối hai hoạt động \"đọc sách\" và \"xem phim hoạt hình\"."
        },
        {
          "type": "fillblank",
          "prompt": "Điền từ thích hợp: Từ dùng để nối các từ ngữ hoặc các câu, thể hiện quan hệ giữa chúng được gọi là ___.",
          "answer": "quan hệ từ",
          "accept": ["quan he tu", "quan hệ từ"],
          "explanation": "Đáp án: \"quan hệ từ\". Ví dụ: và, nhưng, vì, nên, của, ở, với..."
        },
        {
          "type": "mcq",
          "prompt": "Từ nào là danh từ chỉ hiện tượng tự nhiên?",
          "options": ["mưa", "chạy", "xanh", "và"],
          "answerIndex": 0,
          "explanation": "\"Mưa\" là danh từ chỉ hiện tượng thiên nhiên."
        },
        {
          "type": "mcq",
          "prompt": "Trong câu \"Bông hoa hồng rất thơm\", từ nào là tính từ?",
          "options": ["bông", "hoa hồng", "rất", "thơm"],
          "answerIndex": 3,
          "explanation": "\"Thơm\" là tính từ, miêu tả đặc điểm (mùi) của bông hoa hồng."
        }
      ]
    },
    {
      "id": "cau",
      "name": "📝 Câu",
      "questions": [
        {
          "type": "mcq",
          "prompt": "Câu nào dưới đây là câu ghép (có hai vế câu nối với nhau)?",
          "options": ["Trời mưa to nên đường rất trơn.", "Em rất thích đọc sách.", "Bạn Lan học giỏi Toán.", "Hôm nay trời đẹp."],
          "answerIndex": 0,
          "explanation": "\"Trời mưa to nên đường rất trơn\" có hai vế câu (\"trời mưa to\" và \"đường rất trơn\") được nối bằng quan hệ từ \"nên\", nên là câu ghép."
        },
        {
          "type": "mcq",
          "prompt": "Bộ phận nào là chủ ngữ trong câu: \"Những chú chim nhỏ đang hót vang trên cành cây.\"?",
          "options": ["Những chú chim nhỏ", "đang hót vang", "trên cành cây", "hót vang"],
          "answerIndex": 0,
          "explanation": "\"Những chú chim nhỏ\" là chủ ngữ — bộ phận nêu lên đối tượng được nói đến trong câu."
        },
        {
          "type": "mcq",
          "prompt": "Câu \"Mẹ ơi, con yêu mẹ nhiều lắm!\" thuộc kiểu câu nào theo mục đích nói?",
          "options": ["Câu cảm", "Câu hỏi", "Câu kể", "Câu khiến"],
          "answerIndex": 0,
          "explanation": "Câu này bộc lộ cảm xúc yêu thương, kết thúc bằng dấu chấm cảm (!) nên là câu cảm."
        },
        {
          "type": "mcq",
          "prompt": "Câu nào dưới đây là câu cầu khiến?",
          "options": ["Em hãy dọn dẹp phòng học cho gọn gàng.", "Phòng học rất gọn gàng.", "Phòng học có gọn gàng không?", "Phòng học gọn gàng quá!"],
          "answerIndex": 0,
          "explanation": "Câu cầu khiến dùng để yêu cầu, đề nghị — thường có từ \"hãy\", \"đừng\", \"nên\"."
        },
        {
          "type": "mcq",
          "prompt": "Câu nào dưới đây là câu hỏi?",
          "options": ["Bạn có thích đọc sách không?", "Tôi rất thích đọc sách.", "Hãy đọc sách đi!", "Đọc sách vui quá!"],
          "answerIndex": 0,
          "explanation": "Câu hỏi dùng để hỏi điều chưa biết, thường kết thúc bằng dấu chấm hỏi (?)."
        },
        {
          "type": "fillblank",
          "prompt": "Điền từ thích hợp: Bộ phận chính trả lời cho câu hỏi \"làm gì?\", \"là gì?\", \"như thế nào?\" trong câu được gọi là ___.",
          "answer": "vị ngữ",
          "accept": ["vi ngu", "vị ngữ"],
          "explanation": "Đáp án: \"vị ngữ\" — bộ phận nêu lên hoạt động, trạng thái, đặc điểm của chủ ngữ."
        },
        {
          "type": "order",
          "sentence": "Bạn Lan lớp 5A rất chăm học.",
          "chunks": ["Bạn Lan", "lớp 5A", "rất chăm học"],
          "explanation": "Câu đúng: \"Bạn Lan lớp 5A rất chăm học.\" — chủ ngữ \"Bạn Lan lớp 5A\" đứng trước, vị ngữ \"rất chăm học\" đứng sau."
        },
        {
          "type": "order",
          "sentence": "Vì trời mưa to nên buổi học ngoài trời bị hủy.",
          "chunks": ["Vì trời mưa to", "nên", "buổi học ngoài trời bị hủy"],
          "explanation": "Câu ghép chỉ nguyên nhân - kết quả thường có cấu trúc \"Vì... nên...\"."
        }
      ]
    },
    {
      "id": "bien-phap-tu-tu",
      "name": "🎨 Biện pháp tu từ",
      "questions": [
        {
          "type": "mcq",
          "prompt": "Câu thơ \"Mặt trời xuống biển như hòn lửa\" sử dụng biện pháp tu từ nào?",
          "options": ["So sánh", "Nhân hóa", "Điệp ngữ", "Liệt kê"],
          "answerIndex": 0,
          "explanation": "Câu thơ dùng từ \"như\" để đối chiếu mặt trời với hòn lửa, đây là biện pháp so sánh."
        },
        {
          "type": "mcq",
          "prompt": "Câu \"Ông trời mặc áo giáp đen ra trận\" sử dụng biện pháp tu từ nào?",
          "options": ["So sánh", "Nhân hóa", "Điệp ngữ", "Hoán dụ"],
          "answerIndex": 1,
          "explanation": "Câu văn gán cho \"ông trời\" hành động \"mặc áo giáp\", \"ra trận\" như con người — đây là biện pháp nhân hóa."
        },
        {
          "type": "mcq",
          "prompt": "Trong câu \"Tre xanh, xanh tự bao giờ\", việc lặp lại từ \"xanh\" là biện pháp gì?",
          "options": ["So sánh", "Nhân hóa", "Điệp ngữ", "Liệt kê"],
          "answerIndex": 2,
          "explanation": "Lặp lại từ \"xanh\" để nhấn mạnh màu sắc đặc trưng của tre — đây là biện pháp điệp ngữ."
        },
        {
          "type": "fillblank",
          "prompt": "Điền từ thích hợp: Biện pháp gọi hoặc tả con vật, cây cối, sự vật bằng những từ ngữ vốn dùng để tả con người được gọi là biện pháp ___.",
          "answer": "nhân hóa",
          "accept": ["nhan hoa", "nhân hóa"],
          "explanation": "Đáp án: \"nhân hóa\" — làm cho sự vật trở nên sống động, gần gũi như con người."
        },
        {
          "type": "mcq",
          "prompt": "Câu nào dưới đây sử dụng biện pháp so sánh?",
          "options": ["Cô giáo như mẹ hiền.", "Mặt trời thức dậy.", "Gió hát ru em.", "Lá rơi rơi mãi."],
          "answerIndex": 0,
          "explanation": "Câu dùng từ \"như\" để so sánh cô giáo với mẹ hiền — đây là biện pháp so sánh."
        },
        {
          "type": "mcq",
          "prompt": "Câu nào dưới đây sử dụng biện pháp nhân hóa?",
          "options": ["Mặt trời đỏ rực như quả cầu lửa.", "Ông trời mặc áo giáp đen ra trận.", "Em rất yêu mặt trời buổi sáng.", "Mặt trời mọc ở phía đông."],
          "answerIndex": 1,
          "explanation": "\"Ông trời mặc áo giáp đen ra trận\" gán hành động của con người cho ông trời — đây là nhân hóa."
        },
        {
          "type": "fillblank",
          "prompt": "Điền từ thích hợp: Biện pháp lặp lại một từ ngữ nhiều lần trong câu hoặc đoạn văn để nhấn mạnh ý được gọi là biện pháp ___.",
          "answer": "điệp ngữ",
          "accept": ["diep ngu", "điệp ngữ", "điệp từ", "diep tu"],
          "explanation": "Đáp án: \"điệp ngữ\" (còn gọi là điệp từ)."
        },
        {
          "type": "mcq",
          "prompt": "Câu thơ \"Tre xanh, xanh tự bao giờ\" lặp lại từ nào để nhấn mạnh?",
          "options": ["tre", "xanh", "tự", "bao giờ"],
          "answerIndex": 1,
          "explanation": "Từ \"xanh\" được lặp lại để nhấn mạnh màu sắc đặc trưng, lâu đời của tre."
        }
      ]
    },
    {
      "id": "tu-vung",
      "name": "🔤 Từ vựng",
      "questions": [
        {
          "type": "mcq",
          "prompt": "Từ nào đồng nghĩa với \"chăm chỉ\"?",
          "options": ["siêng năng", "lười biếng", "vui vẻ", "nhanh nhẹn"],
          "answerIndex": 0,
          "explanation": "\"Siêng năng\" có nghĩa gần giống \"chăm chỉ\" — đều chỉ việc làm việc, học tập đều đặn, không lười."
        },
        {
          "type": "mcq",
          "prompt": "Từ nào trái nghĩa với \"rộng rãi\"?",
          "options": ["chật hẹp", "to lớn", "thoáng mát", "sạch sẽ"],
          "answerIndex": 0,
          "explanation": "\"Chật hẹp\" có nghĩa ngược lại hoàn toàn với \"rộng rãi\"."
        },
        {
          "type": "mcq",
          "prompt": "Từ \"đầu\" trong \"đầu người\" và \"đầu\" trong \"đầu sông\" có quan hệ gì về nghĩa?",
          "options": ["Từ nhiều nghĩa", "Từ đồng âm", "Từ đồng nghĩa", "Từ trái nghĩa"],
          "answerIndex": 0,
          "explanation": "Đây là từ nhiều nghĩa: nghĩa gốc \"đầu người\" và nghĩa chuyển \"đầu sông\" (chỉ điểm bắt đầu) vẫn có liên hệ với nhau."
        },
        {
          "type": "fillblank",
          "prompt": "Điền từ thích hợp: Từ trái nghĩa với \"chăm chỉ\" là ___.",
          "answer": "lười biếng",
          "accept": ["luoi bieng", "lười biếng", "lười", "luoi", "lười nhác", "luoi nhac"],
          "explanation": "Đáp án: \"lười biếng\" (hoặc \"lười nhác\")."
        },
        {
          "type": "mcq",
          "prompt": "Cặp từ nào dưới đây là từ đồng âm (âm giống nhau nhưng nghĩa khác hẳn nhau)?",
          "options": ["Con đường và đường ăn", "Cao lớn và to lớn", "Vui vẻ và hạnh phúc", "Chăm chỉ và siêng năng"],
          "answerIndex": 0,
          "explanation": "\"Đường\" (con đường đi) và \"đường\" (đường để ăn, nấu) phát âm giống nhau nhưng nghĩa hoàn toàn khác nhau — đây là từ đồng âm."
        },
        {
          "type": "mcq",
          "prompt": "Từ nào đồng nghĩa với \"dũng cảm\"?",
          "options": ["can đảm", "sợ hãi", "hiền lành", "chăm chỉ"],
          "answerIndex": 0,
          "explanation": "\"Can đảm\" có nghĩa gần giống \"dũng cảm\" — đều chỉ sự không sợ khó khăn, nguy hiểm."
        },
        {
          "type": "mcq",
          "prompt": "Từ nào trái nghĩa với \"cao\"?",
          "options": ["thấp", "to", "dài", "rộng"],
          "answerIndex": 0,
          "explanation": "\"Thấp\" có nghĩa ngược lại hoàn toàn với \"cao\"."
        },
        {
          "type": "fillblank",
          "prompt": "Điền từ thích hợp: Từ \"chân\" trong \"chân người\" và \"chân núi\" là từ ___.",
          "answer": "nhiều nghĩa",
          "accept": ["nhieu nghia", "nhiều nghĩa", "tu nhieu nghia", "từ nhiều nghĩa"],
          "explanation": "Đáp án: \"nhiều nghĩa\" — nghĩa gốc \"chân người\" và nghĩa chuyển \"chân núi\" (phần dưới cùng) vẫn có liên hệ với nhau."
        }
      ]
    },
    {
      "id": "tap-lam-van",
      "name": "✍️ Tập làm văn",
      "questions": [
        {
          "type": "essay",
          "prompt": "Viết đoạn văn ngắn (3-5 câu) tả lại một người thân trong gia đình mà em yêu quý nhất."
        },
        {
          "type": "essay",
          "prompt": "Viết đoạn văn ngắn (3-5 câu) kể về một việc tốt em đã làm ở trường hoặc ở nhà."
        },
        {
          "type": "essay",
          "prompt": "Viết đoạn văn ngắn (3-5 câu) tả cảnh buổi sáng ở nơi em sống."
        },
        {
          "type": "essay",
          "prompt": "Viết đoạn văn ngắn (3-5 câu) tả con vật nuôi mà em yêu thích nhất."
        }
      ]
    }
  ]
};
