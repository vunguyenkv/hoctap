const VAN_DATA = {
  "lop4": {
    "topics": [
      {
        "id": "tu-loai-lop4",
        "name": "📚 Từ loại (cơ bản)",
        "questions": [
          {
            "type": "mcq",
            "prompt": "Từ nào dưới đây là danh từ?",
            "options": [
              "bàn học",
              "chạy nhảy",
              "xinh đẹp",
              "và"
            ],
            "answerIndex": 0,
            "explanation": "\"Bàn học\" là danh từ vì nó gọi tên một đồ vật."
          },
          {
            "type": "mcq",
            "prompt": "Từ nào là động từ trong câu: \"Em đang đọc truyện.\"?",
            "options": [
              "đọc",
              "em",
              "truyện",
              "đang"
            ],
            "answerIndex": 0,
            "explanation": "\"Đọc\" là động từ, chỉ hoạt động của em."
          },
          {
            "type": "mcq",
            "prompt": "Từ nào là tính từ trong câu: \"Quả táo này rất ngọt.\"?",
            "options": [
              "ngọt",
              "quả táo",
              "này",
              "rất"
            ],
            "answerIndex": 0,
            "explanation": "\"Ngọt\" là tính từ, miêu tả đặc điểm (vị) của quả táo."
          },
          {
            "type": "mcq",
            "prompt": "Từ nào là danh từ chỉ đồ vật?",
            "options": [
              "cái bàn",
              "đẹp",
              "chạy",
              "và"
            ],
            "answerIndex": 0,
            "explanation": "\"Cái bàn\" là danh từ, gọi tên một đồ vật."
          },
          {
            "type": "fillblank",
            "prompt": "Điền từ thích hợp: Từ chỉ hoạt động, trạng thái của người, vật được gọi là ___.",
            "answer": "động từ",
            "accept": [
              "dong tu",
              "động từ"
            ],
            "explanation": "Đáp án: \"động từ\". Ví dụ: chạy, nhảy, ăn, ngủ, học..."
          },
          {
            "type": "mcq",
            "prompt": "Từ nào là tính từ chỉ màu sắc?",
            "options": [
              "xanh",
              "chạy",
              "ăn",
              "và"
            ],
            "answerIndex": 0,
            "explanation": "\"Xanh\" là tính từ chỉ màu sắc."
          },
          {
            "type": "mcq",
            "prompt": "Từ nào là danh từ chỉ con vật?",
            "options": [
              "con mèo",
              "chạy",
              "đẹp",
              "và"
            ],
            "answerIndex": 0,
            "explanation": "\"Con mèo\" là danh từ, gọi tên một con vật."
          },
          {
            "type": "mcq",
            "prompt": "Từ nào là động từ trong câu: \"Bạn Nam đang viết bài.\"?",
            "options": [
              "viết",
              "Nam",
              "bài",
              "đang"
            ],
            "answerIndex": 0,
            "explanation": "\"Viết\" là động từ, chỉ hoạt động của bạn Nam."
          },
          {
            "type": "mcq",
            "prompt": "Từ nào là tính từ chỉ kích thước?",
            "options": [
              "to",
              "chạy",
              "ăn",
              "và"
            ],
            "answerIndex": 0,
            "explanation": "\"To\" là tính từ, miêu tả kích thước của sự vật."
          },
          {
            "type": "fillblank",
            "prompt": "Điền từ thích hợp: Từ chỉ người, vật, hiện tượng, sự việc được gọi là ___.",
            "answer": "danh từ",
            "accept": [
              "danh tu",
              "danh từ"
            ],
            "explanation": "Đáp án: \"danh từ\". Ví dụ: học sinh, cái bàn, mưa, lễ hội..."
          }
        ]
      },
      {
        "id": "cau-lop4",
        "name": "📝 Các kiểu câu",
        "questions": [
          {
            "type": "mcq",
            "prompt": "Câu \"Bạn có thích vẽ tranh không?\" thuộc kiểu câu nào?",
            "options": [
              "Câu hỏi",
              "Câu kể",
              "Câu cảm",
              "Câu khiến"
            ],
            "answerIndex": 0,
            "explanation": "Câu này dùng để hỏi, kết thúc bằng dấu chấm hỏi (?) nên là câu hỏi."
          },
          {
            "type": "mcq",
            "prompt": "Câu \"Em rất yêu trường em.\" thuộc kiểu câu nào?",
            "options": [
              "Câu kể",
              "Câu hỏi",
              "Câu cảm",
              "Câu khiến"
            ],
            "answerIndex": 0,
            "explanation": "Câu này dùng để kể, nêu một sự việc, nên là câu kể."
          },
          {
            "type": "mcq",
            "prompt": "Câu \"Em hãy đóng cửa lại.\" thuộc kiểu câu nào?",
            "options": [
              "Câu khiến",
              "Câu kể",
              "Câu hỏi",
              "Câu cảm"
            ],
            "answerIndex": 0,
            "explanation": "Câu này nêu yêu cầu, đề nghị (có từ \"hãy\") nên là câu khiến."
          },
          {
            "type": "mcq",
            "prompt": "Câu nào dưới đây là câu cảm?",
            "options": [
              "Bông hoa đẹp quá!",
              "Bông hoa màu đỏ.",
              "Bông hoa có đẹp không?",
              "Hãy ngắm bông hoa kia."
            ],
            "answerIndex": 0,
            "explanation": "Câu cảm bộc lộ cảm xúc, thường kết thúc bằng dấu chấm cảm (!)."
          },
          {
            "type": "truefalse",
            "prompt": "Câu hỏi thường kết thúc bằng dấu chấm hỏi (?).",
            "answer": true,
            "explanation": "Đúng. Đây là đặc điểm nhận biết câu hỏi."
          },
          {
            "type": "truefalse",
            "prompt": "Câu kể dùng để nêu yêu cầu, đề nghị với người khác.",
            "answer": false,
            "explanation": "Sai. Câu kể dùng để kể, tả hoặc nêu nhận định. Câu khiến mới dùng để nêu yêu cầu, đề nghị."
          },
          {
            "type": "mcq",
            "prompt": "Câu \"Lan đang làm gì đấy?\" thuộc kiểu câu nào?",
            "options": [
              "Câu hỏi",
              "Câu kể",
              "Câu cảm",
              "Câu khiến"
            ],
            "answerIndex": 0,
            "explanation": "Câu này dùng để hỏi, kết thúc bằng dấu chấm hỏi (?) nên là câu hỏi."
          },
          {
            "type": "mcq",
            "prompt": "Câu \"Các em hãy giữ im lặng.\" thuộc kiểu câu nào?",
            "options": [
              "Câu khiến",
              "Câu kể",
              "Câu hỏi",
              "Câu cảm"
            ],
            "answerIndex": 0,
            "explanation": "Câu này nêu yêu cầu (có từ \"hãy\") nên là câu khiến."
          },
          {
            "type": "mcq",
            "prompt": "Dấu câu nào thường dùng để kết thúc câu kể?",
            "options": [
              "Dấu chấm (.)",
              "Dấu chấm hỏi (?)",
              "Dấu chấm cảm (!)",
              "Dấu hai chấm (:)"
            ],
            "answerIndex": 0,
            "explanation": "Câu kể thường kết thúc bằng dấu chấm (.)."
          },
          {
            "type": "truefalse",
            "prompt": "Câu khiến thường có các từ như \"hãy\", \"đừng\", \"chớ\".",
            "answer": true,
            "explanation": "Đúng. Đây là những từ thường xuất hiện trong câu khiến để nêu yêu cầu, đề nghị."
          }
        ]
      },
      {
        "id": "tu-vung-lop4",
        "name": "🔤 Từ đồng nghĩa - trái nghĩa",
        "questions": [
          {
            "type": "mcq",
            "prompt": "Từ nào đồng nghĩa với \"vui vẻ\"?",
            "options": [
              "hớn hở",
              "buồn bã",
              "lo lắng",
              "tức giận"
            ],
            "answerIndex": 0,
            "explanation": "\"Hớn hở\" có nghĩa gần giống \"vui vẻ\"."
          },
          {
            "type": "mcq",
            "prompt": "Từ nào trái nghĩa với \"to\"?",
            "options": [
              "nhỏ",
              "dài",
              "rộng",
              "cao"
            ],
            "answerIndex": 0,
            "explanation": "\"Nhỏ\" có nghĩa ngược lại hoàn toàn với \"to\"."
          },
          {
            "type": "mcq",
            "prompt": "Từ nào đồng nghĩa với \"xinh đẹp\"?",
            "options": [
              "xinh xắn",
              "xấu xí",
              "to lớn",
              "buồn bã"
            ],
            "answerIndex": 0,
            "explanation": "\"Xinh xắn\" có nghĩa gần giống \"xinh đẹp\"."
          },
          {
            "type": "mcq",
            "prompt": "Từ nào trái nghĩa với \"nhanh\"?",
            "options": [
              "chậm",
              "to",
              "đẹp",
              "vui"
            ],
            "answerIndex": 0,
            "explanation": "\"Chậm\" có nghĩa ngược lại hoàn toàn với \"nhanh\"."
          },
          {
            "type": "fillblank",
            "prompt": "Điền từ thích hợp: Từ trái nghĩa với \"siêng năng\" là ___.",
            "answer": "lười biếng",
            "accept": [
              "luoi bieng",
              "lười biếng",
              "lười",
              "luoi"
            ],
            "explanation": "Đáp án: \"lười biếng\"."
          },
          {
            "type": "mcq",
            "prompt": "Từ nào trái nghĩa với \"vui\"?",
            "options": [
              "buồn",
              "to",
              "nhanh",
              "đẹp"
            ],
            "answerIndex": 0,
            "explanation": "\"Buồn\" có nghĩa ngược lại hoàn toàn với \"vui\"."
          },
          {
            "type": "mcq",
            "prompt": "Từ nào đồng nghĩa với \"to lớn\"?",
            "options": [
              "khổng lồ",
              "nhỏ bé",
              "xinh xắn",
              "mỏng manh"
            ],
            "answerIndex": 0,
            "explanation": "\"Khổng lồ\" có nghĩa gần giống \"to lớn\"."
          },
          {
            "type": "mcq",
            "prompt": "Từ nào trái nghĩa với \"sạch sẽ\"?",
            "options": [
              "bẩn",
              "đẹp",
              "gọn gàng",
              "thơm"
            ],
            "answerIndex": 0,
            "explanation": "\"Bẩn\" có nghĩa ngược lại hoàn toàn với \"sạch sẽ\"."
          },
          {
            "type": "mcq",
            "prompt": "Từ nào đồng nghĩa với \"chăm chỉ\"?",
            "options": [
              "siêng năng",
              "lười biếng",
              "vui vẻ",
              "nhanh nhẹn"
            ],
            "answerIndex": 0,
            "explanation": "\"Siêng năng\" có nghĩa gần giống \"chăm chỉ\"."
          },
          {
            "type": "fillblank",
            "prompt": "Điền từ thích hợp: Từ trái nghĩa với \"ngắn\" là ___.",
            "answer": "dài",
            "accept": [
              "dai",
              "dài"
            ],
            "explanation": "Đáp án: \"dài\"."
          }
        ]
      },
      {
        "id": "tap-lam-van-lop4",
        "name": "✍️ Tập làm văn (cơ bản)",
        "questions": [
          {
            "type": "essay",
            "prompt": "Viết 2-4 câu tả một đồ vật em yêu thích (ví dụ: cặp sách, bút, gấu bông...)."
          },
          {
            "type": "essay",
            "prompt": "Viết 2-4 câu tả con vật nuôi mà em thích."
          },
          {
            "type": "essay",
            "prompt": "Viết 2-4 câu kể về một ngày đi học vui vẻ của em."
          },
          {
            "type": "essay",
            "prompt": "Viết 2-4 câu kể về một người bạn thân của em."
          },
          {
            "type": "essay",
            "prompt": "Viết 2-4 câu tả khu vườn hoặc sân trường của em."
          }
        ]
      }
    ]
  },
  "lop5": {
    "topics": [
      {
        "id": "tu-loai",
        "name": "📚 Từ loại",
        "questions": [
          {
            "type": "mcq",
            "prompt": "Từ nào dưới đây là danh từ?",
            "options": [
              "chạy",
              "đẹp",
              "học sinh",
              "nhanh"
            ],
            "answerIndex": 2,
            "explanation": "\"Học sinh\" là danh từ vì nó gọi tên một loại người. \"Chạy\" là động từ, \"đẹp\"/\"nhanh\" là tính từ."
          },
          {
            "type": "mcq",
            "prompt": "Từ nào là động từ trong câu: \"Em bé đang ngủ rất ngon.\"?",
            "options": [
              "ngủ",
              "bé",
              "ngon",
              "đang"
            ],
            "answerIndex": 0,
            "explanation": "\"Ngủ\" là động từ vì chỉ hoạt động của em bé."
          },
          {
            "type": "mcq",
            "prompt": "Từ nào là tính từ trong câu: \"Bầu trời hôm nay rất trong xanh.\"?",
            "options": [
              "bầu trời",
              "hôm nay",
              "rất",
              "trong xanh"
            ],
            "answerIndex": 3,
            "explanation": "\"Trong xanh\" là tính từ, miêu tả đặc điểm của bầu trời."
          },
          {
            "type": "mcq",
            "prompt": "Từ nào trong các từ sau là đại từ xưng hô?",
            "options": [
              "tôi",
              "chạy",
              "đẹp",
              "nhà"
            ],
            "answerIndex": 0,
            "explanation": "\"Tôi\" là đại từ dùng để xưng hô, thay cho tên người nói."
          },
          {
            "type": "mcq",
            "prompt": "Từ nào là quan hệ từ trong câu: \"Em thích đọc sách và xem phim hoạt hình.\"?",
            "options": [
              "đọc",
              "và",
              "sách",
              "phim"
            ],
            "answerIndex": 1,
            "explanation": "\"Và\" là quan hệ từ, dùng để nối hai hoạt động \"đọc sách\" và \"xem phim hoạt hình\"."
          },
          {
            "type": "fillblank",
            "prompt": "Điền từ thích hợp: Từ dùng để nối các từ ngữ hoặc các câu, thể hiện quan hệ giữa chúng được gọi là ___.",
            "answer": "quan hệ từ",
            "accept": [
              "quan he tu",
              "quan hệ từ"
            ],
            "explanation": "Đáp án: \"quan hệ từ\". Ví dụ: và, nhưng, vì, nên, của, ở, với..."
          },
          {
            "type": "mcq",
            "prompt": "Từ nào là danh từ chỉ hiện tượng tự nhiên?",
            "options": [
              "mưa",
              "chạy",
              "xanh",
              "và"
            ],
            "answerIndex": 0,
            "explanation": "\"Mưa\" là danh từ chỉ hiện tượng thiên nhiên."
          },
          {
            "type": "mcq",
            "prompt": "Trong câu \"Bông hoa hồng rất thơm\", từ nào là tính từ?",
            "options": [
              "bông",
              "hoa hồng",
              "rất",
              "thơm"
            ],
            "answerIndex": 3,
            "explanation": "\"Thơm\" là tính từ, miêu tả đặc điểm (mùi) của bông hoa hồng."
          },
          {
            "type": "mcq",
            "prompt": "Từ nào là quan hệ từ trong câu: \"Vì trời mưa nên em ở nhà.\"?",
            "options": [
              "vì",
              "trời",
              "mưa",
              "nhà"
            ],
            "answerIndex": 0,
            "explanation": "\"Vì\" là quan hệ từ, cùng với \"nên\" thể hiện quan hệ nguyên nhân - kết quả."
          },
          {
            "type": "mcq",
            "prompt": "Từ nào là danh từ chỉ khái niệm (trừu tượng)?",
            "options": [
              "tình bạn",
              "cái bàn",
              "chạy",
              "đẹp"
            ],
            "answerIndex": 0,
            "explanation": "\"Tình bạn\" là danh từ chỉ khái niệm, không nhìn thấy hay cầm nắm được như đồ vật."
          },
          {
            "type": "truefalse",
            "prompt": "Đại từ có thể dùng để thay thế cho danh từ đã nói ở trước, tránh lặp lại.",
            "answer": true,
            "explanation": "Đúng. Đây là một trong những công dụng chính của đại từ."
          },
          {
            "type": "mcq",
            "prompt": "Trong câu \"Nó học rất chăm.\", từ \"nó\" thuộc từ loại gì?",
            "options": [
              "Đại từ",
              "Danh từ",
              "Động từ",
              "Tính từ"
            ],
            "answerIndex": 0,
            "explanation": "\"Nó\" là đại từ, dùng để thay thế cho một danh từ (tên người/vật) đã được nói tới."
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
            "options": [
              "Trời mưa to nên đường rất trơn.",
              "Em rất thích đọc sách.",
              "Bạn Lan học giỏi Toán.",
              "Hôm nay trời đẹp."
            ],
            "answerIndex": 0,
            "explanation": "\"Trời mưa to nên đường rất trơn\" có hai vế câu (\"trời mưa to\" và \"đường rất trơn\") được nối bằng quan hệ từ \"nên\", nên là câu ghép."
          },
          {
            "type": "mcq",
            "prompt": "Bộ phận nào là chủ ngữ trong câu: \"Những chú chim nhỏ đang hót vang trên cành cây.\"?",
            "options": [
              "Những chú chim nhỏ",
              "đang hót vang",
              "trên cành cây",
              "hót vang"
            ],
            "answerIndex": 0,
            "explanation": "\"Những chú chim nhỏ\" là chủ ngữ — bộ phận nêu lên đối tượng được nói đến trong câu."
          },
          {
            "type": "mcq",
            "prompt": "Câu \"Mẹ ơi, con yêu mẹ nhiều lắm!\" thuộc kiểu câu nào theo mục đích nói?",
            "options": [
              "Câu cảm",
              "Câu hỏi",
              "Câu kể",
              "Câu khiến"
            ],
            "answerIndex": 0,
            "explanation": "Câu này bộc lộ cảm xúc yêu thương, kết thúc bằng dấu chấm cảm (!) nên là câu cảm."
          },
          {
            "type": "mcq",
            "prompt": "Câu nào dưới đây là câu cầu khiến?",
            "options": [
              "Em hãy dọn dẹp phòng học cho gọn gàng.",
              "Phòng học rất gọn gàng.",
              "Phòng học có gọn gàng không?",
              "Phòng học gọn gàng quá!"
            ],
            "answerIndex": 0,
            "explanation": "Câu cầu khiến dùng để yêu cầu, đề nghị — thường có từ \"hãy\", \"đừng\", \"nên\"."
          },
          {
            "type": "mcq",
            "prompt": "Câu nào dưới đây là câu hỏi?",
            "options": [
              "Bạn có thích đọc sách không?",
              "Tôi rất thích đọc sách.",
              "Hãy đọc sách đi!",
              "Đọc sách vui quá!"
            ],
            "answerIndex": 0,
            "explanation": "Câu hỏi dùng để hỏi điều chưa biết, thường kết thúc bằng dấu chấm hỏi (?)."
          },
          {
            "type": "fillblank",
            "prompt": "Điền từ thích hợp: Bộ phận chính trả lời cho câu hỏi \"làm gì?\", \"là gì?\", \"như thế nào?\" trong câu được gọi là ___.",
            "answer": "vị ngữ",
            "accept": [
              "vi ngu",
              "vị ngữ"
            ],
            "explanation": "Đáp án: \"vị ngữ\" — bộ phận nêu lên hoạt động, trạng thái, đặc điểm của chủ ngữ."
          },
          {
            "type": "order",
            "sentence": "Bạn Lan lớp 5A rất chăm học.",
            "chunks": [
              "Bạn Lan",
              "lớp 5A",
              "rất chăm học"
            ],
            "explanation": "Câu đúng: \"Bạn Lan lớp 5A rất chăm học.\" — chủ ngữ \"Bạn Lan lớp 5A\" đứng trước, vị ngữ \"rất chăm học\" đứng sau."
          },
          {
            "type": "order",
            "sentence": "Vì trời mưa to nên buổi học ngoài trời bị hủy.",
            "chunks": [
              "Vì trời mưa to",
              "nên",
              "buổi học ngoài trời bị hủy"
            ],
            "explanation": "Câu ghép chỉ nguyên nhân - kết quả thường có cấu trúc \"Vì... nên...\"."
          },
          {
            "type": "mcq",
            "prompt": "Câu nào có hai vế câu được nối bằng quan hệ từ \"nhưng\"?",
            "options": [
              "Em thích đọc sách nhưng không có nhiều thời gian.",
              "Em thích đọc sách.",
              "Em đọc sách mỗi ngày.",
              "Quyển sách này rất hay."
            ],
            "answerIndex": 0,
            "explanation": "Câu này có hai vế (\"em thích đọc sách\" và \"không có nhiều thời gian\") nối bằng quan hệ từ \"nhưng\", thể hiện ý tương phản."
          },
          {
            "type": "mcq",
            "prompt": "Trong câu ghép, các vế câu thường được nối với nhau bằng gì?",
            "options": [
              "Quan hệ từ hoặc dấu câu (dấu phẩy, dấu hai chấm...)",
              "Chỉ bằng dấu chấm",
              "Không thể nối với nhau",
              "Chỉ bằng cách viết liền nhau"
            ],
            "answerIndex": 0,
            "explanation": "Các vế trong câu ghép được nối bằng quan hệ từ (và, nhưng, vì, nên...) hoặc bằng dấu câu."
          },
          {
            "type": "truefalse",
            "prompt": "Câu đơn chỉ có một cụm chủ ngữ - vị ngữ.",
            "answer": true,
            "explanation": "Đúng. Câu đơn chỉ có một vế câu (một cụm chủ ngữ - vị ngữ), khác với câu ghép có hai vế trở lên."
          },
          {
            "type": "fillblank",
            "prompt": "Điền từ thích hợp: Câu do hai hoặc nhiều vế câu ghép lại với nhau được gọi là câu ___.",
            "answer": "câu ghép",
            "accept": [
              "cau ghep",
              "câu ghép",
              "ghép"
            ],
            "explanation": "Đáp án: \"câu ghép\"."
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
            "options": [
              "So sánh",
              "Nhân hóa",
              "Điệp ngữ",
              "Liệt kê"
            ],
            "answerIndex": 0,
            "explanation": "Câu thơ dùng từ \"như\" để đối chiếu mặt trời với hòn lửa, đây là biện pháp so sánh."
          },
          {
            "type": "mcq",
            "prompt": "Câu \"Ông trời mặc áo giáp đen ra trận\" sử dụng biện pháp tu từ nào?",
            "options": [
              "So sánh",
              "Nhân hóa",
              "Điệp ngữ",
              "Hoán dụ"
            ],
            "answerIndex": 1,
            "explanation": "Câu văn gán cho \"ông trời\" hành động \"mặc áo giáp\", \"ra trận\" như con người — đây là biện pháp nhân hóa."
          },
          {
            "type": "mcq",
            "prompt": "Trong câu \"Tre xanh, xanh tự bao giờ\", việc lặp lại từ \"xanh\" là biện pháp gì?",
            "options": [
              "So sánh",
              "Nhân hóa",
              "Điệp ngữ",
              "Liệt kê"
            ],
            "answerIndex": 2,
            "explanation": "Lặp lại từ \"xanh\" để nhấn mạnh màu sắc đặc trưng của tre — đây là biện pháp điệp ngữ."
          },
          {
            "type": "fillblank",
            "prompt": "Điền từ thích hợp: Biện pháp gọi hoặc tả con vật, cây cối, sự vật bằng những từ ngữ vốn dùng để tả con người được gọi là biện pháp ___.",
            "answer": "nhân hóa",
            "accept": [
              "nhan hoa",
              "nhân hóa"
            ],
            "explanation": "Đáp án: \"nhân hóa\" — làm cho sự vật trở nên sống động, gần gũi như con người."
          },
          {
            "type": "mcq",
            "prompt": "Câu nào dưới đây sử dụng biện pháp so sánh?",
            "options": [
              "Cô giáo như mẹ hiền.",
              "Mặt trời thức dậy.",
              "Gió hát ru em.",
              "Lá rơi rơi mãi."
            ],
            "answerIndex": 0,
            "explanation": "Câu dùng từ \"như\" để so sánh cô giáo với mẹ hiền — đây là biện pháp so sánh."
          },
          {
            "type": "mcq",
            "prompt": "Câu nào dưới đây sử dụng biện pháp nhân hóa?",
            "options": [
              "Mặt trời đỏ rực như quả cầu lửa.",
              "Ông trời mặc áo giáp đen ra trận.",
              "Em rất yêu mặt trời buổi sáng.",
              "Mặt trời mọc ở phía đông."
            ],
            "answerIndex": 1,
            "explanation": "\"Ông trời mặc áo giáp đen ra trận\" gán hành động của con người cho ông trời — đây là nhân hóa."
          },
          {
            "type": "fillblank",
            "prompt": "Điền từ thích hợp: Biện pháp lặp lại một từ ngữ nhiều lần trong câu hoặc đoạn văn để nhấn mạnh ý được gọi là biện pháp ___.",
            "answer": "điệp ngữ",
            "accept": [
              "diep ngu",
              "điệp ngữ",
              "điệp từ",
              "diep tu"
            ],
            "explanation": "Đáp án: \"điệp ngữ\" (còn gọi là điệp từ)."
          },
          {
            "type": "mcq",
            "prompt": "Câu thơ \"Tre xanh, xanh tự bao giờ\" lặp lại từ nào để nhấn mạnh?",
            "options": [
              "tre",
              "xanh",
              "tự",
              "bao giờ"
            ],
            "answerIndex": 1,
            "explanation": "Từ \"xanh\" được lặp lại để nhấn mạnh màu sắc đặc trưng, lâu đời của tre."
          },
          {
            "type": "mcq",
            "prompt": "Câu \"Những ngôi sao thức ngoài kia chẳng bằng mẹ đã thức vì chúng con\" sử dụng biện pháp tu từ nào?",
            "options": [
              "So sánh",
              "Nhân hóa",
              "Điệp ngữ",
              "Liệt kê"
            ],
            "answerIndex": 0,
            "explanation": "Câu thơ so sánh sự thức đêm của những ngôi sao với sự thức đêm vì con của mẹ — đây là biện pháp so sánh."
          },
          {
            "type": "mcq",
            "prompt": "Biện pháp nhân hóa thường gán cho vật, hiện tượng những đặc điểm, hành động của ai?",
            "options": [
              "Con người",
              "Loài vật khác",
              "Không gán cho ai",
              "Chỉ gán cho cây cối"
            ],
            "answerIndex": 0,
            "explanation": "Nhân hóa là gán đặc điểm, hành động, cảm xúc của con người cho vật, hiện tượng, con vật."
          },
          {
            "type": "truefalse",
            "prompt": "Điệp ngữ là việc lặp lại một từ ngữ để nhấn mạnh ý hoặc tạo nhịp điệu cho câu văn, câu thơ.",
            "answer": true,
            "explanation": "Đúng. Đây chính là đặc điểm và tác dụng của biện pháp điệp ngữ."
          },
          {
            "type": "mcq",
            "prompt": "Câu \"Mặt trời nhô lên cười với muôn loài\" sử dụng biện pháp tu từ nào?",
            "options": [
              "Nhân hóa",
              "So sánh",
              "Liệt kê",
              "Đảo ngữ"
            ],
            "answerIndex": 0,
            "explanation": "Mặt trời được gán hành động \"cười\" giống con người — đây là biện pháp nhân hóa."
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
            "options": [
              "siêng năng",
              "lười biếng",
              "vui vẻ",
              "nhanh nhẹn"
            ],
            "answerIndex": 0,
            "explanation": "\"Siêng năng\" có nghĩa gần giống \"chăm chỉ\" — đều chỉ việc làm việc, học tập đều đặn, không lười."
          },
          {
            "type": "mcq",
            "prompt": "Từ nào trái nghĩa với \"rộng rãi\"?",
            "options": [
              "chật hẹp",
              "to lớn",
              "thoáng mát",
              "sạch sẽ"
            ],
            "answerIndex": 0,
            "explanation": "\"Chật hẹp\" có nghĩa ngược lại hoàn toàn với \"rộng rãi\"."
          },
          {
            "type": "mcq",
            "prompt": "Từ \"đầu\" trong \"đầu người\" và \"đầu\" trong \"đầu sông\" có quan hệ gì về nghĩa?",
            "options": [
              "Từ nhiều nghĩa",
              "Từ đồng âm",
              "Từ đồng nghĩa",
              "Từ trái nghĩa"
            ],
            "answerIndex": 0,
            "explanation": "Đây là từ nhiều nghĩa: nghĩa gốc \"đầu người\" và nghĩa chuyển \"đầu sông\" (chỉ điểm bắt đầu) vẫn có liên hệ với nhau."
          },
          {
            "type": "fillblank",
            "prompt": "Điền từ thích hợp: Từ trái nghĩa với \"chăm chỉ\" là ___.",
            "answer": "lười biếng",
            "accept": [
              "luoi bieng",
              "lười biếng",
              "lười",
              "luoi",
              "lười nhác",
              "luoi nhac"
            ],
            "explanation": "Đáp án: \"lười biếng\" (hoặc \"lười nhác\")."
          },
          {
            "type": "mcq",
            "prompt": "Cặp từ nào dưới đây là từ đồng âm (âm giống nhau nhưng nghĩa khác hẳn nhau)?",
            "options": [
              "Con đường và đường ăn",
              "Cao lớn và to lớn",
              "Vui vẻ và hạnh phúc",
              "Chăm chỉ và siêng năng"
            ],
            "answerIndex": 0,
            "explanation": "\"Đường\" (con đường đi) và \"đường\" (đường để ăn, nấu) phát âm giống nhau nhưng nghĩa hoàn toàn khác nhau — đây là từ đồng âm."
          },
          {
            "type": "mcq",
            "prompt": "Từ nào đồng nghĩa với \"dũng cảm\"?",
            "options": [
              "can đảm",
              "sợ hãi",
              "hiền lành",
              "chăm chỉ"
            ],
            "answerIndex": 0,
            "explanation": "\"Can đảm\" có nghĩa gần giống \"dũng cảm\" — đều chỉ sự không sợ khó khăn, nguy hiểm."
          },
          {
            "type": "mcq",
            "prompt": "Từ nào trái nghĩa với \"cao\"?",
            "options": [
              "thấp",
              "to",
              "dài",
              "rộng"
            ],
            "answerIndex": 0,
            "explanation": "\"Thấp\" có nghĩa ngược lại hoàn toàn với \"cao\"."
          },
          {
            "type": "fillblank",
            "prompt": "Điền từ thích hợp: Từ \"chân\" trong \"chân người\" và \"chân núi\" là từ ___.",
            "answer": "nhiều nghĩa",
            "accept": [
              "nhieu nghia",
              "nhiều nghĩa",
              "tu nhieu nghia",
              "từ nhiều nghĩa"
            ],
            "explanation": "Đáp án: \"nhiều nghĩa\" — nghĩa gốc \"chân người\" và nghĩa chuyển \"chân núi\" (phần dưới cùng) vẫn có liên hệ với nhau."
          },
          {
            "type": "mcq",
            "prompt": "Từ \"sáng\" trong \"ánh sáng\" và \"sáng\" trong \"buổi sáng\" có quan hệ gì về nghĩa?",
            "options": [
              "Từ đồng âm",
              "Từ nhiều nghĩa",
              "Từ đồng nghĩa",
              "Từ trái nghĩa"
            ],
            "answerIndex": 0,
            "explanation": "Hai từ \"sáng\" này phát âm giống nhau nhưng nghĩa hoàn toàn khác nhau (độ sáng và buổi trong ngày) — đây là từ đồng âm."
          },
          {
            "type": "mcq",
            "prompt": "Từ nào đồng nghĩa với \"yên tĩnh\"?",
            "options": [
              "im lặng",
              "ồn ào",
              "náo nhiệt",
              "sôi động"
            ],
            "answerIndex": 0,
            "explanation": "\"Im lặng\" có nghĩa gần giống \"yên tĩnh\"."
          },
          {
            "type": "mcq",
            "prompt": "Từ nào trái nghĩa với \"chân thật\"?",
            "options": [
              "giả dối",
              "trung thực",
              "ngay thẳng",
              "thẳng thắn"
            ],
            "answerIndex": 0,
            "explanation": "\"Giả dối\" có nghĩa ngược lại hoàn toàn với \"chân thật\"."
          },
          {
            "type": "fillblank",
            "prompt": "Điền từ thích hợp: Từ giống nhau về âm nhưng nghĩa khác nhau hoàn toàn được gọi là từ ___.",
            "answer": "đồng âm",
            "accept": [
              "dong am",
              "đồng âm"
            ],
            "explanation": "Đáp án: \"đồng âm\"."
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
          },
          {
            "type": "essay",
            "prompt": "Viết đoạn văn ngắn (3-5 câu) kể về một chuyến đi chơi đáng nhớ của em."
          }
        ]
      }
    ]
  }
};
