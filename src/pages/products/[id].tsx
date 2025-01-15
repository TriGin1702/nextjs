import React, { useState } from "react";

// Giả sử đây là dữ liệu sản phẩm, bạn có thể thay bằng dữ liệu từ API hoặc props.
const product = {
  id: 1,
  name: "Sản phẩm mẫu",
  price: 500000,
  description: "Mô tả chi tiết về sản phẩm này...",
  images: [
    "/images/product1_large.jpg",
    "/images/product1_thumb1.jpg",
    "/images/product1_thumb2.jpg",
    "/images/product1_thumb3.jpg",
    "/images/product1_thumb4.jpg",
    "/images/product1_thumb5.jpg",
  ],
  comments: [
    { id: 1, user: "Nguyễn Văn A", content: "Sản phẩm rất tốt!", avatar: "/images/avatar1.jpg" },
    { id: 2, user: "Trần Thị B", content: "Đáng giá tiền!", avatar: "/images/avatar2.jpg" },
  ],
};

const ProductDetail: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [isFavorite, setIsFavorite] = useState(false); // Trạng thái yêu thích

  const toggleFavorite = () => setIsFavorite(!isFavorite);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Chi tiết sản phẩm</h1>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Phần hiển thị hình ảnh */}
          <div className="flex-[6]">
            {/* Ảnh lớn */}
            <div className="mb-4">
              <img
                src={selectedImage}
                alt="Ảnh sản phẩm"
                className="w-full h-[420px] object-cover rounded-lg shadow-lg" // Tăng chiều cao ảnh lớn
              />
            </div>

            {/* Ảnh nhỏ */}
            <div className="flex gap-6 justify-between w-[70%] mx-auto">
              {" "}
              {/* Tăng độ rộng chứa ảnh nhỏ */}
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Ảnh nhỏ ${index + 1}`}
                  className={`w-[28%] h-20 object-cover rounded-lg cursor-pointer ${selectedImage === image ? "ring-2 ring-blue-500" : ""}`} // Tăng kích thước ảnh nhỏ
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
          </div>

          {/* Phần hiển thị thông tin sản phẩm */}
          <div className="flex-[4]">
            <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
            <p className="text-xl text-blue-500 font-semibold mb-4">Giá: {product.price.toLocaleString()} VND</p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">{product.description}</p>

            <div className="flex items-center gap-4">
              {/* Nút yêu thích */}
              <button onClick={toggleFavorite} className={`text-3xl ${isFavorite ? "text-red-500" : "text-gray-400"} focus:outline-none`}>
                {isFavorite ? "❤️" : "🤍"}
              </button>

              {/* Nút thêm vào giỏ hàng */}
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Thêm vào giỏ hàng</button>
            </div>
          </div>
        </div>

        {/* Phần bình luận */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold mb-4">Bình luận</h3>
          <div className="space-y-4">
            {product.comments.map((comment) => (
              <div key={comment.id} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md flex gap-4">
                {/* Ảnh đại diện người dùng */}
                <img src={comment.avatar} alt={comment.user} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-bold">{comment.user}</p>
                  <p className="text-gray-700 dark:text-gray-300">{comment.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form thêm bình luận */}
          <form className="mt-6 flex flex-col">
            <textarea
              placeholder="Để lại bình luận..."
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
            ></textarea>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-3 self-end">
              Gửi bình luận
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
