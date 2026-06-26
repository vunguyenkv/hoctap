const KHOAHOC_DATA = {
  "lop4": {
    "topics": [
      {
        "id": "chat",
        "name": "💧 Chất",
        "questions": [
          {
            "type": "mcq",
            "prompt": "Nước ở dạng lỏng có đặc điểm gì?",
            "options": [
              "Không màu, không mùi, không vị, không có hình dạng nhất định",
              "Có màu xanh, có mùi thơm tự nhiên",
              "Luôn có hình dạng giống khối lập phương",
              "Có vị ngọt tự nhiên"
            ],
            "answerIndex": 0,
            "explanation": "Nước ở dạng lỏng không màu, không mùi, không vị và không có hình dạng nhất định — nó mang hình dạng của vật chứa nó."
          },
          {
            "type": "mcq",
            "prompt": "Nước luôn chảy theo hướng nào?",
            "options": [
              "Từ cao xuống thấp",
              "Từ thấp lên cao",
              "Đứng yên, không chảy",
              "Chỉ chảy theo chiều ngang"
            ],
            "answerIndex": 0,
            "explanation": "Nước luôn chảy từ nơi cao xuống nơi thấp và lan ra khắp mọi phía."
          },
          {
            "type": "truefalse",
            "prompt": "Nước có thể thấm qua vải, giấy nhưng không thấm qua ni lông, sắt.",
            "answer": true,
            "explanation": "Đúng. Đây là một tính chất quan trọng của nước, được ứng dụng để làm áo mưa, ô dù từ ni lông."
          },
          {
            "type": "mcq",
            "prompt": "Không khí có vai trò gì đối với sự sống?",
            "options": [
              "Cần thiết cho sự hô hấp của con người, động vật, thực vật",
              "Không có vai trò gì đặc biệt",
              "Chỉ cần thiết cho con người, không cần cho cây cối",
              "Chỉ có ở ngoài trời, không có trong nhà"
            ],
            "answerIndex": 0,
            "explanation": "Không khí rất cần thiết cho sự sống — con người, động vật, thực vật đều cần không khí để hô hấp."
          },
          {
            "type": "mcq",
            "prompt": "Thành phần chính của không khí gồm những khí nào?",
            "options": [
              "Khí ni-tơ và khí ô-xi",
              "Chỉ có khí ô-xi",
              "Chủ yếu là khí CO2",
              "Khí hi-đrô"
            ],
            "answerIndex": 0,
            "explanation": "Không khí gồm chủ yếu là khí ni-tơ và khí ô-xi, cùng một số khí khác với lượng rất nhỏ."
          },
          {
            "type": "truefalse",
            "prompt": "Gió chính là không khí chuyển động.",
            "answer": true,
            "explanation": "Đúng. Khi không khí chuyển động, ta cảm nhận được đó là gió."
          },
          {
            "type": "mcq",
            "prompt": "Nguyên nhân nào sau đây gây ô nhiễm không khí do con người gây ra?",
            "options": [
              "Khí thải từ nhà máy, xe cộ, hoạt động sản xuất",
              "Núi lửa phun trào",
              "Gió mùa tự nhiên",
              "Mưa rào"
            ],
            "answerIndex": 0,
            "explanation": "Khí thải công nghiệp, giao thông là nguyên nhân nhân tạo (do con người) gây ô nhiễm không khí."
          },
          {
            "type": "mcq",
            "prompt": "Để góp phần bảo vệ môi trường không khí, em nên làm gì?",
            "options": [
              "Trồng nhiều cây xanh, hạn chế đốt rác",
              "Đốt rác thường xuyên ngoài trời",
              "Sử dụng nhiều xe cộ xả khí thải",
              "Không cần làm gì cả"
            ],
            "answerIndex": 0,
            "explanation": "Trồng cây xanh giúp lọc không khí, hạn chế đốt rác giúp giảm khí độc thải ra môi trường."
          }
        ]
      },
      {
        "id": "nang-luong",
        "name": "⚡ Năng lượng",
        "questions": [
          {
            "type": "mcq",
            "prompt": "Ánh sáng mặt trời có vai trò gì với đời sống?",
            "options": [
              "Sưởi ấm, giúp con người, động vật, thực vật sống và phát triển",
              "Không có vai trò gì với sinh vật",
              "Chỉ có ích vào ban đêm",
              "Chỉ cần thiết cho con người"
            ],
            "answerIndex": 0,
            "explanation": "Ánh sáng mặt trời chiếu sáng, sưởi ấm và giúp con người, động vật, thực vật sống, phát triển."
          },
          {
            "type": "mcq",
            "prompt": "Vật nào sau đây là nguồn sáng (tự nó phát ra ánh sáng)?",
            "options": [
              "Mặt Trời",
              "Mặt Trăng",
              "Gương",
              "Quyển sách"
            ],
            "answerIndex": 0,
            "explanation": "Mặt Trời tự phát ra ánh sáng. Mặt Trăng, gương chỉ phản chiếu ánh sáng từ nguồn khác."
          },
          {
            "type": "truefalse",
            "prompt": "Mặt Trăng tự nó không phát ra ánh sáng mà chỉ phản chiếu ánh sáng từ Mặt Trời.",
            "answer": true,
            "explanation": "Đúng. Ánh sáng ta thấy từ Mặt Trăng thực chất là ánh sáng Mặt Trời phản chiếu lại."
          },
          {
            "type": "mcq",
            "prompt": "Âm thanh được tạo ra khi nào?",
            "options": [
              "Khi vật rung động (dao động)",
              "Khi vật đứng yên hoàn toàn",
              "Khi không có vật nào cả",
              "Chỉ khi có ánh sáng chiếu vào"
            ],
            "answerIndex": 0,
            "explanation": "Âm thanh được tạo ra khi vật rung động (ví dụ: dây đàn, mặt trống rung)."
          },
          {
            "type": "mcq",
            "prompt": "Âm thanh có thể truyền qua những môi trường nào?",
            "options": [
              "Không khí, nước, vật rắn",
              "Chỉ qua không khí",
              "Chỉ truyền trong chân không",
              "Không truyền qua đâu cả"
            ],
            "answerIndex": 0,
            "explanation": "Âm thanh truyền được qua không khí, nước và cả vật rắn (như tường, mặt đất)."
          },
          {
            "type": "mcq",
            "prompt": "Nhiệt kế dùng để làm gì?",
            "options": [
              "Đo nhiệt độ",
              "Đo âm thanh",
              "Đo ánh sáng",
              "Đo khối lượng"
            ],
            "answerIndex": 0,
            "explanation": "Nhiệt kế là dụng cụ dùng để đo nhiệt độ của vật hoặc môi trường."
          },
          {
            "type": "mcq",
            "prompt": "Nhiệt truyền từ vật nào sang vật nào?",
            "options": [
              "Từ vật nóng hơn sang vật lạnh hơn",
              "Từ vật lạnh hơn sang vật nóng hơn",
              "Nhiệt không truyền được",
              "Chỉ truyền khi có ánh sáng"
            ],
            "answerIndex": 0,
            "explanation": "Nhiệt luôn truyền từ vật có nhiệt độ cao hơn sang vật có nhiệt độ thấp hơn."
          },
          {
            "type": "truefalse",
            "prompt": "Kim loại thường dẫn nhiệt tốt hơn gỗ hoặc nhựa.",
            "answer": true,
            "explanation": "Đúng. Vì vậy tay cầm xoong nồi thường làm bằng gỗ hoặc nhựa để không bị nóng, còn đáy nồi làm bằng kim loại để dẫn nhiệt tốt."
          }
        ]
      },
      {
        "id": "thuc-vat-dong-vat",
        "name": "🌱 Thực vật & động vật",
        "questions": [
          {
            "type": "mcq",
            "prompt": "Thực vật cần những yếu tố nào để sống và phát triển bình thường?",
            "options": [
              "Nước, ánh sáng, không khí, chất khoáng",
              "Chỉ cần nước",
              "Chỉ cần ánh sáng",
              "Không cần yếu tố nào"
            ],
            "answerIndex": 0,
            "explanation": "Thực vật cần đủ nước, ánh sáng, không khí và chất khoáng để sống và phát triển bình thường."
          },
          {
            "type": "mcq",
            "prompt": "Động vật cần những yếu tố nào để sống?",
            "options": [
              "Nước, không khí, thức ăn, nhiệt độ phù hợp",
              "Chỉ cần thức ăn",
              "Chỉ cần nước",
              "Không cần gì cả"
            ],
            "answerIndex": 0,
            "explanation": "Giống thực vật, động vật cũng cần nước, không khí, và thêm thức ăn, nhiệt độ phù hợp để sống."
          },
          {
            "type": "truefalse",
            "prompt": "Nếu thiếu ánh sáng, hầu hết cây xanh sẽ phát triển không bình thường (lá vàng, còi cọc).",
            "answer": true,
            "explanation": "Đúng. Ánh sáng rất cần thiết để cây quang hợp và phát triển khỏe mạnh."
          },
          {
            "type": "mcq",
            "prompt": "Việc chăm sóc cây trồng đúng cách gồm những việc gì?",
            "options": [
              "Tưới nước, bón phân, làm cỏ hợp lý",
              "Chỉ cần tưới nước thật nhiều mỗi ngày",
              "Không cần chăm sóc gì",
              "Chỉ cần bón phân, không cần tưới nước"
            ],
            "answerIndex": 0,
            "explanation": "Chăm sóc cây trồng đúng cách cần kết hợp tưới nước, bón phân và làm cỏ hợp lý."
          },
          {
            "type": "mcq",
            "prompt": "Việc chăm sóc vật nuôi đúng cách cần đảm bảo điều gì?",
            "options": [
              "Đủ thức ăn, nước uống, nơi ở sạch sẽ",
              "Chỉ cần cho ăn, không cần dọn vệ sinh",
              "Để vật nuôi tự tìm thức ăn",
              "Không cần quan tâm gì"
            ],
            "answerIndex": 0,
            "explanation": "Vật nuôi cần được cung cấp đủ thức ăn, nước uống và nơi ở sạch sẽ để phát triển khỏe mạnh."
          }
        ]
      },
      {
        "id": "nam",
        "name": "🍄 Nấm",
        "questions": [
          {
            "type": "mcq",
            "prompt": "Nấm có nhiều hình dạng, màu sắc và kích thước khác nhau, điều này thể hiện điều gì?",
            "options": [
              "Sự đa dạng của nấm",
              "Tất cả nấm đều giống nhau",
              "Nấm không có hình dạng cố định",
              "Nấm chỉ có một loại duy nhất"
            ],
            "answerIndex": 0,
            "explanation": "Nấm rất đa dạng về hình dạng, màu sắc, kích thước và môi trường sống."
          },
          {
            "type": "mcq",
            "prompt": "Nấm men thường được dùng để làm gì trong đời sống?",
            "options": [
              "Làm bánh mì, lên men sữa chua, rượu",
              "Làm thuốc trừ sâu",
              "Làm vật liệu xây dựng",
              "Không có ứng dụng nào"
            ],
            "answerIndex": 0,
            "explanation": "Nấm men là loại nấm có lợi, được dùng để làm nở bánh mì và lên men trong sản xuất sữa chua, rượu."
          },
          {
            "type": "truefalse",
            "prompt": "Tất cả các loại nấm đều có thể ăn được.",
            "answer": false,
            "explanation": "Sai. Có nhiều loại nấm độc, nếu ăn vào có thể gây nguy hiểm đến sức khỏe, thậm chí tử vong."
          },
          {
            "type": "mcq",
            "prompt": "Khi ăn phải nấm độc, cơ thể có thể bị gì?",
            "options": [
              "Đau bụng, nôn, khó thở, nguy hiểm đến tính mạng",
              "Không có biểu hiện gì",
              "Chỉ thấy ngon hơn",
              "Cơ thể khỏe mạnh hơn"
            ],
            "answerIndex": 0,
            "explanation": "Nấm độc có thể gây đau bụng, nôn, vã mồ hôi, khó thở, hôn mê, thậm chí tử vong nếu không cấp cứu kịp thời."
          },
          {
            "type": "mcq",
            "prompt": "Để bảo quản thực phẩm tránh bị nấm mốc, ta nên làm gì?",
            "options": [
              "Để nơi khô ráo, thoáng mát hoặc bảo quản lạnh",
              "Để nơi ẩm ướt, kín gió",
              "Để ngoài nắng gắt cả ngày",
              "Không cần bảo quản gì"
            ],
            "answerIndex": 0,
            "explanation": "Bảo quản thực phẩm ở nơi khô ráo, thoáng mát hoặc trong tủ lạnh giúp hạn chế nấm mốc phát triển."
          }
        ]
      },
      {
        "id": "con-nguoi-suc-khoe",
        "name": "❤️ Con người & sức khỏe",
        "questions": [
          {
            "type": "mcq",
            "prompt": "Các nhóm chất dinh dưỡng chính có trong thức ăn gồm những gì?",
            "options": [
              "Chất đạm, chất béo, chất đường (bột), vi-ta-min và khoáng chất",
              "Chỉ có chất đường",
              "Chỉ có nước",
              "Chỉ có vi-ta-min"
            ],
            "answerIndex": 0,
            "explanation": "Thức ăn cung cấp nhiều nhóm chất dinh dưỡng: chất đạm, chất béo, chất đường (bột đường), vi-ta-min và khoáng chất."
          },
          {
            "type": "mcq",
            "prompt": "Thực phẩm an toàn cần đảm bảo điều gì?",
            "options": [
              "Không nhiễm vi sinh vật, hóa chất; không bị ôi, thiu, dập nát",
              "Càng nhiều màu sắc bắt mắt càng tốt",
              "Giá thành phải rất rẻ",
              "Không cần quan tâm nguồn gốc"
            ],
            "answerIndex": 0,
            "explanation": "Thực phẩm an toàn phải được nuôi trồng, bảo quản hợp vệ sinh, không nhiễm vi sinh vật hay hóa chất độc hại, không ôi thiu."
          },
          {
            "type": "mcq",
            "prompt": "Ăn uống khoa học cần đảm bảo điều gì?",
            "options": [
              "Ăn đa dạng thực phẩm, đủ chất, đúng giờ",
              "Chỉ ăn một loại thức ăn yêu thích",
              "Ăn càng nhiều càng tốt, không cần giờ giấc",
              "Bỏ bữa sáng để tiết kiệm thời gian"
            ],
            "answerIndex": 0,
            "explanation": "Ăn uống khoa học là ăn đa dạng các loại thực phẩm, đủ chất dinh dưỡng và đúng giờ giấc."
          },
          {
            "type": "truefalse",
            "prompt": "Không nên bơi một mình ở nơi nước sâu, nguy hiểm khi không có người lớn giám sát, để phòng tránh đuối nước.",
            "answer": true,
            "explanation": "Đúng. Đây là một nguyên tắc quan trọng để phòng tránh tai nạn đuối nước."
          },
          {
            "type": "mcq",
            "prompt": "Thiếu vi-ta-min và khoáng chất trong thời gian dài có thể dẫn đến điều gì?",
            "options": [
              "Một số bệnh liên quan đến dinh dưỡng (như suy dinh dưỡng, thiếu máu...)",
              "Cơ thể khỏe mạnh hơn",
              "Không ảnh hưởng gì",
              "Tăng chiều cao nhanh hơn"
            ],
            "answerIndex": 0,
            "explanation": "Thiếu vi-ta-min và khoáng chất lâu dài có thể gây ra các bệnh về dinh dưỡng như suy dinh dưỡng, thiếu máu, còi xương..."
          }
        ]
      },
      {
        "id": "sinh-vat-moi-truong",
        "name": "🌍 Sinh vật & môi trường",
        "questions": [
          {
            "type": "mcq",
            "prompt": "Chuỗi thức ăn trong tự nhiên thể hiện điều gì?",
            "options": [
              "Mối quan hệ về thức ăn giữa các sinh vật",
              "Mối quan hệ về màu sắc giữa các sinh vật",
              "Số lượng sinh vật trong một khu vực",
              "Tuổi thọ của các sinh vật"
            ],
            "answerIndex": 0,
            "explanation": "Chuỗi thức ăn cho thấy sinh vật này làm thức ăn cho sinh vật khác, tạo thành một dãy liên kết trong tự nhiên."
          },
          {
            "type": "mcq",
            "prompt": "Thực vật đóng vai trò gì trong chuỗi thức ăn?",
            "options": [
              "Là nguồn cung cấp thức ăn ban đầu (sinh vật sản xuất)",
              "Không có vai trò gì",
              "Chỉ là nơi trú ẩn cho động vật",
              "Luôn ở cuối chuỗi thức ăn"
            ],
            "answerIndex": 0,
            "explanation": "Thực vật là sinh vật sản xuất, tạo ra thức ăn ban đầu cho các loài động vật trong chuỗi thức ăn."
          },
          {
            "type": "truefalse",
            "prompt": "Nếu một loài trong chuỗi thức ăn bị mất đi, có thể ảnh hưởng đến các loài khác trong chuỗi.",
            "answer": true,
            "explanation": "Đúng. Các loài trong chuỗi thức ăn có liên hệ chặt chẽ với nhau, mất một loài có thể làm mất cân bằng cả chuỗi."
          },
          {
            "type": "mcq",
            "prompt": "Việc nào sau đây giúp giữ cân bằng chuỗi thức ăn trong tự nhiên?",
            "options": [
              "Trồng rừng, bảo vệ động vật hoang dã",
              "Săn bắt động vật quá mức",
              "Phá rừng bừa bãi",
              "Xả rác bừa bãi ra môi trường"
            ],
            "answerIndex": 0,
            "explanation": "Trồng rừng và bảo vệ động vật hoang dã giúp duy trì sự cân bằng của các chuỗi thức ăn trong tự nhiên."
          }
        ]
      }
    ]
  }
};
