// import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart, AiOutlineShoppingCart, AiOutlineMessage } from "react-icons/ai";
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  { id: 1, name: "Sản phẩm 1", price: 100000, image: "/images/product1.jpg" },
  { id: 2, name: "Sản phẩm 2", price: 200000, image: "/images/product2.jpg" },
  { id: 3, name: "Sản phẩm 3", price: 300000, image: "/images/product3.jpg" },
  { id: 4, name: "Sản phẩm 4", price: 400000, image: "/images/product4.jpg" },
  { id: 5, name: "Sản phẩm 5", price: 500000, image: "/images/product5.jpg" },
  { id: 6, name: "Sản phẩm 6", price: 600000, image: "/images/product6.jpg" },
  { id: 7, name: "Sản phẩm 7", price: 700000, image: "/images/product7.jpg" },
  { id: 8, name: "Sản phẩm 8", price: 800000, image: "/images/product8.jpg" },
  { id: 9, name: "Sản phẩm 9", price: 900000, image: "/images/product9.jpg" },
];

const ProductGrid: React.FC = () => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]));
  };

  const addToCart = (id: number) => {
    console.log(`Thêm sản phẩm ${id} vào giỏ hàng`);
  };
  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Danh Sách Sản Phẩm</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center">
          {products.map((product) => (
            <a
              key={product.id}
              href={`/products/${product.id}`}
              className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md w-56 p-4 relative mb-6"
            >
              {/* Ảnh sản phẩm */}
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg mb-4" />

              {/* Tên và giá sản phẩm */}
              <h2 className="text-lg font-bold mb-1 text-center">{product.name}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-2 text-center">Giá: {product.price.toLocaleString()} VND</p>
              {/* Hàng trên cùng: Icon Yêu Thích và Nút Thêm vào Giỏ Hàng */}
              {/* Hàng trên cùng: Icon Yêu Thích và Nút Thêm vào Giỏ Hàng */}
              <div className="flex items-center justify-between mb-2 w-full ">
                {/* Icon Yêu Thích */}
                <button onClick={() => toggleFavorite(product.id)} className="text-xl text-left">
                  {favorites.includes(product.id) ? (
                    <AiFillHeart className="text-red-500" />
                  ) : (
                    <AiOutlineHeart className="text-gray-500 dark:text-gray-300" />
                  )}
                </button>

                {/* Nút Thêm vào Giỏ Hàng */}
                <button
                  onClick={() => addToCart(product.id)}
                  className="bg-blue-500 text-white py-1 px-3 rounded-md flex items-center justify-center gap-2 text-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
                >
                  <AiOutlineShoppingCart />
                  Thêm vào giỏ hàng
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>
      {/* Icon Chat */}
      <button
        onClick={toggleChat}
        className="fixed bottom-5 right-5 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <AiOutlineMessage size={24} />
      </button>

      {/* Khung Chat */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-5 w-80 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg p-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-bold">Chat hỗ trợ</h3>
            <button onClick={toggleChat} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
              &times;
            </button>
          </div>
          <div className="overflow-y-auto max-h-60 mb-3">
            {/* Nội dung tin nhắn */}
            <p className="text-gray-700 dark:text-gray-300">Xin chào! Tôi có thể giúp gì cho bạn?</p>
          </div>
          <textarea
            placeholder="Nhập tin nhắn..."
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
