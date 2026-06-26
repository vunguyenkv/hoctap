const SU_DATA = {
  "topics": [
    {
      "id": "dat-nuoc-con-nguoi",
      "name": "🗺️ Đất nước & con người",
      "questions": [
        {
          "type": "mcq",
          "prompt": "Việt Nam nằm ở khu vực nào trên thế giới?",
          "options": ["Đông Nam Á", "Đông Á", "Nam Á", "Tây Á"],
          "answerIndex": 0,
          "explanation": "Việt Nam nằm ở khu vực Đông Nam Á, phía đông của bán đảo Đông Dương, ven Biển Đông."
        },
        {
          "type": "mcq",
          "prompt": "Việt Nam có chung biên giới trên đất liền với những quốc gia nào?",
          "options": ["Trung Quốc, Lào, Campuchia", "Thái Lan, Lào, Campuchia", "Trung Quốc, Thái Lan", "Lào, Campuchia, Thái Lan"],
          "answerIndex": 0,
          "explanation": "Việt Nam giáp Trung Quốc ở phía Bắc, giáp Lào và Campuchia ở phía Tây."
        },
        {
          "type": "mcq",
          "prompt": "Thủ đô của nước Việt Nam là thành phố nào?",
          "options": ["Hà Nội", "TP. Hồ Chí Minh", "Huế", "Đà Nẵng"],
          "answerIndex": 0,
          "explanation": "Hà Nội là thủ đô của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam."
        },
        {
          "type": "truefalse",
          "prompt": "Trên bản đồ, hình dạng đất nước Việt Nam có nét cong giống chữ S.",
          "answer": true,
          "explanation": "Đúng. Lãnh thổ Việt Nam trải dài theo hướng Bắc - Nam, có hình dạng cong cong giống chữ S."
        },
        {
          "type": "truefalse",
          "prompt": "Biển Đông nằm ở phía Tây của lãnh thổ Việt Nam.",
          "answer": false,
          "explanation": "Sai. Biển Đông nằm ở phía Đông và phía Nam của Việt Nam, không phải phía Tây."
        },
        {
          "type": "mcq",
          "prompt": "Đất nước ta có bao nhiêu dân tộc anh em cùng sinh sống?",
          "options": ["54 dân tộc", "45 dân tộc", "63 dân tộc", "30 dân tộc"],
          "answerIndex": 0,
          "explanation": "Việt Nam là quốc gia đa dân tộc với 54 dân tộc anh em cùng chung sống."
        },
        {
          "type": "mcq",
          "prompt": "Dân tộc nào có số dân đông nhất ở Việt Nam?",
          "options": ["Kinh", "Tày", "Thái", "Mường"],
          "answerIndex": 0,
          "explanation": "Dân tộc Kinh chiếm đa số dân số cả nước, sinh sống tập trung ở đồng bằng."
        },
        {
          "type": "match",
          "prompt": "Nối tên miền với đặc điểm địa lý nổi bật:",
          "pairs": [
            {"left": "Miền Bắc", "right": "Đồng bằng sông Hồng, nhiều núi cao"},
            {"left": "Miền Trung", "right": "Dải đất hẹp, nhiều đèo, hay có bão lũ"},
            {"left": "Miền Nam", "right": "Đồng bằng sông Cửu Long, sông ngòi chằng chịt"}
          ],
          "explanation": "Mỗi miền của nước ta có đặc điểm địa hình riêng: Bắc có đồng bằng sông Hồng và vùng núi cao; Trung là dải đất hẹp ven biển nhiều đèo; Nam là đồng bằng sông Cửu Long rộng lớn, kênh rạch dày đặc."
        }
      ]
    },
    {
      "id": "buoi-dau-dung-nuoc",
      "name": "🏛️ Buổi đầu dựng nước",
      "questions": [
        {
          "type": "mcq",
          "prompt": "Nhà nước đầu tiên của người Việt cổ có tên là gì?",
          "options": ["Văn Lang", "Âu Lạc", "Đại Việt", "Đại Cồ Việt"],
          "answerIndex": 0,
          "explanation": "Văn Lang là nhà nước đầu tiên trong lịch sử Việt Nam, do các Vua Hùng đứng đầu."
        },
        {
          "type": "mcq",
          "prompt": "Vua đầu tiên đứng đầu nước Văn Lang được gọi là gì?",
          "options": ["Hùng Vương", "An Dương Vương", "Lý Thái Tổ", "Đinh Tiên Hoàng"],
          "answerIndex": 0,
          "explanation": "Các vị vua nước Văn Lang được gọi chung là Hùng Vương."
        },
        {
          "type": "mcq",
          "prompt": "Kinh đô của nước Văn Lang đặt ở vùng đất nào?",
          "options": ["Phong Châu (Phú Thọ ngày nay)", "Cổ Loa", "Hoa Lư", "Thăng Long"],
          "answerIndex": 0,
          "explanation": "Kinh đô Văn Lang đặt ở vùng Phong Châu, nay thuộc tỉnh Phú Thọ."
        },
        {
          "type": "mcq",
          "prompt": "Ai là người hợp nhất Văn Lang và Tây Âu, lập ra nước Âu Lạc?",
          "options": ["An Dương Vương", "Hùng Vương", "Triệu Đà", "Lý Bí"],
          "answerIndex": 0,
          "explanation": "An Dương Vương Thục Phán đã hợp nhất hai vùng đất để lập ra nước Âu Lạc."
        },
        {
          "type": "truefalse",
          "prompt": "Thành Cổ Loa là kinh đô của nước Âu Lạc.",
          "answer": true,
          "explanation": "Đúng. An Dương Vương đã cho xây thành Cổ Loa (Hà Nội ngày nay) làm kinh đô nước Âu Lạc."
        },
        {
          "type": "mcq",
          "prompt": "Vương quốc Cham-pa cổ xưa phát triển mạnh ở khu vực nào của nước ta ngày nay?",
          "options": ["Miền Trung", "Miền Bắc", "Tây Bắc", "Đồng bằng sông Hồng"],
          "answerIndex": 0,
          "explanation": "Cham-pa là vương quốc cổ phát triển ở khu vực duyên hải miền Trung Việt Nam."
        },
        {
          "type": "mcq",
          "prompt": "Vương quốc Phù Nam cổ xưa phát triển mạnh ở khu vực nào?",
          "options": ["Đồng bằng sông Cửu Long (Nam Bộ)", "Đồng bằng sông Hồng", "Bắc Trung Bộ", "Tây Bắc"],
          "answerIndex": 0,
          "explanation": "Phù Nam là vương quốc cổ hình thành và phát triển ở vùng đồng bằng sông Cửu Long."
        },
        {
          "type": "truefalse",
          "prompt": "Truyền thuyết \"Nỏ thần\" gắn liền với câu chuyện An Dương Vương xây thành Cổ Loa.",
          "answer": true,
          "explanation": "Đúng. Truyền thuyết kể về chiếc nỏ thần giúp An Dương Vương giữ thành Cổ Loa."
        }
      ]
    },
    {
      "id": "dau-tranh-giu-nuoc",
      "name": "⚔️ Đấu tranh giữ nước",
      "questions": [
        {
          "type": "mcq",
          "prompt": "Ai là người lãnh đạo cuộc khởi nghĩa chống quân Hán đầu tiên, với lời thề \"đền nợ nước, trả thù nhà\"?",
          "options": ["Hai Bà Trưng", "Bà Triệu", "Lý Bí", "Mai Hắc Đế"],
          "answerIndex": 0,
          "explanation": "Hai Bà Trưng (Trưng Trắc, Trưng Nhị) đã phất cờ khởi nghĩa chống quân Hán vào năm 40."
        },
        {
          "type": "mcq",
          "prompt": "Ai đã đánh tan quân Nam Hán trên sông Bạch Đằng năm 938, mở ra thời kỳ độc lập lâu dài cho dân tộc?",
          "options": ["Ngô Quyền", "Đinh Bộ Lĩnh", "Lê Hoàn", "Lý Công Uẩn"],
          "answerIndex": 0,
          "explanation": "Chiến thắng Bạch Đằng năm 938 do Ngô Quyền chỉ huy đã chấm dứt hơn 1000 năm Bắc thuộc."
        },
        {
          "type": "mcq",
          "prompt": "Vị vua nào đã dời đô từ Hoa Lư về Thăng Long vào năm 1010?",
          "options": ["Lý Công Uẩn (Lý Thái Tổ)", "Lê Hoàn", "Đinh Tiên Hoàng", "Trần Thái Tông"],
          "answerIndex": 0,
          "explanation": "Năm 1010, Lý Công Uẩn dời đô về thành Đại La và đổi tên là Thăng Long."
        },
        {
          "type": "mcq",
          "prompt": "Quân dân nhà Trần đã ba lần đánh thắng quân xâm lược nào?",
          "options": ["Mông - Nguyên", "Tống", "Minh", "Thanh"],
          "answerIndex": 0,
          "explanation": "Nhà Trần ba lần kháng chiến chống quân Mông - Nguyên thắng lợi (1258, 1285, 1288)."
        },
        {
          "type": "mcq",
          "prompt": "Ai là vị tướng chỉ huy quân dân nhà Trần làm nên chiến thắng Bạch Đằng năm 1288?",
          "options": ["Trần Hưng Đạo", "Trần Quốc Toản", "Lý Thường Kiệt", "Trần Khánh Dư"],
          "answerIndex": 0,
          "explanation": "Trần Hưng Đạo là tổng chỉ huy quân đội nhà Trần, lập nên chiến thắng Bạch Đằng lần thứ ba."
        },
        {
          "type": "mcq",
          "prompt": "Ai lãnh đạo khởi nghĩa Lam Sơn đánh đuổi quân Minh, sau lập ra nhà Lê?",
          "options": ["Lê Lợi", "Nguyễn Trãi", "Lê Lai", "Trần Nguyên Hãn"],
          "answerIndex": 0,
          "explanation": "Lê Lợi dựng cờ khởi nghĩa ở Lam Sơn, sau 10 năm kháng chiến đã đánh đuổi quân Minh."
        },
        {
          "type": "mcq",
          "prompt": "Vị vua nào đã đại phá quân Thanh vào mùa xuân năm Kỷ Dậu (1789)?",
          "options": ["Quang Trung (Nguyễn Huệ)", "Lê Lợi", "Gia Long", "Lý Thái Tổ"],
          "answerIndex": 0,
          "explanation": "Vua Quang Trung (Nguyễn Huệ) chỉ huy nghĩa quân Tây Sơn đại phá 29 vạn quân Thanh."
        },
        {
          "type": "match",
          "prompt": "Nối tên nhân vật lịch sử với chiến công của mình:",
          "pairs": [
            {"left": "Ngô Quyền", "right": "Chiến thắng Bạch Đằng năm 938"},
            {"left": "Lê Lợi", "right": "Khởi nghĩa Lam Sơn đánh đuổi quân Minh"},
            {"left": "Quang Trung", "right": "Đại phá quân Thanh năm 1789"}
          ],
          "explanation": "Ba mốc son trong lịch sử chống ngoại xâm: Ngô Quyền (938) chấm dứt Bắc thuộc, Lê Lợi (khởi nghĩa Lam Sơn) đánh đuổi quân Minh, Quang Trung (1789) đại phá quân Thanh."
        }
      ]
    },
    {
      "id": "khang-chien-hien-dai",
      "name": "🚩 Kháng chiến & thống nhất",
      "questions": [
        {
          "type": "mcq",
          "prompt": "Ai đọc bản Tuyên ngôn Độc lập khai sinh nước Việt Nam Dân chủ Cộng hòa ngày 2/9/1945?",
          "options": ["Chủ tịch Hồ Chí Minh", "Trường Chinh", "Phạm Văn Đồng", "Võ Nguyên Giáp"],
          "answerIndex": 0,
          "explanation": "Ngày 2/9/1945, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình, Hà Nội."
        },
        {
          "type": "mcq",
          "prompt": "Chiến thắng nào đã kết thúc cuộc kháng chiến chống thực dân Pháp năm 1954?",
          "options": ["Chiến thắng Điện Biên Phủ", "Chiến thắng Bạch Đằng", "Chiến thắng Đống Đa", "Chiến thắng Rạch Gầm - Xoài Mút"],
          "answerIndex": 0,
          "explanation": "Chiến thắng Điện Biên Phủ ngày 7/5/1954 \"lừng lẫy năm châu, chấn động địa cầu\" đã kết thúc kháng chiến chống Pháp."
        },
        {
          "type": "truefalse",
          "prompt": "Đại tướng Võ Nguyên Giáp là người chỉ huy chiến dịch Điện Biên Phủ năm 1954.",
          "answer": true,
          "explanation": "Đúng. Đại tướng Võ Nguyên Giáp là Tổng Tư lệnh chỉ huy chiến dịch Điện Biên Phủ."
        },
        {
          "type": "mcq",
          "prompt": "Ngày 30/4/1975 gắn với sự kiện lịch sử nào?",
          "options": ["Giải phóng miền Nam, thống nhất đất nước", "Cách mạng tháng Tám thành công", "Chiến thắng Điện Biên Phủ", "Ký Hiệp định Genève"],
          "answerIndex": 0,
          "explanation": "Ngày 30/4/1975, quân ta giải phóng Sài Gòn, hoàn thành sự nghiệp thống nhất đất nước."
        },
        {
          "type": "mcq",
          "prompt": "Cách mạng tháng Tám năm 1945 thành công đã lật đổ chế độ nào ở nước ta?",
          "options": ["Chế độ thực dân, phong kiến", "Chế độ phong kiến nhà Lý", "Chính quyền Pháp tại châu Âu", "Chế độ quân chủ nhà Trần"],
          "answerIndex": 0,
          "explanation": "Cách mạng tháng Tám 1945 đã lật đổ chế độ thực dân Pháp và phong kiến, lập nên nước Việt Nam Dân chủ Cộng hòa."
        },
        {
          "type": "truefalse",
          "prompt": "Sau ngày 30/4/1975, đất nước Việt Nam được thống nhất hoàn toàn về một mối.",
          "answer": true,
          "explanation": "Đúng. Từ ngày 30/4/1975, hai miền Nam - Bắc chính thức thống nhất thành một quốc gia."
        },
        {
          "type": "mcq",
          "prompt": "Quốc khánh nước Cộng hòa Xã hội Chủ nghĩa Việt Nam là ngày nào?",
          "options": ["2 tháng 9", "30 tháng 4", "7 tháng 5", "19 tháng 8"],
          "answerIndex": 0,
          "explanation": "Ngày 2/9 hằng năm là ngày Quốc khánh, kỷ niệm ngày đọc Tuyên ngôn Độc lập năm 1945."
        },
        {
          "type": "match",
          "prompt": "Nối sự kiện với mốc thời gian đúng:",
          "pairs": [
            {"left": "Tuyên ngôn Độc lập", "right": "2/9/1945"},
            {"left": "Chiến thắng Điện Biên Phủ", "right": "7/5/1954"},
            {"left": "Giải phóng miền Nam, thống nhất đất nước", "right": "30/4/1975"}
          ],
          "explanation": "Ba mốc thời gian quan trọng của lịch sử hiện đại Việt Nam: 2/9/1945 khai sinh đất nước, 7/5/1954 kết thúc kháng chiến chống Pháp, 30/4/1975 thống nhất đất nước."
        }
      ]
    }
  ]
}
;
