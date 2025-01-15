import React, { useState } from "react";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Sản phẩm 1",
    price: 100000,
    image: "/images/product1.jpg",
    description: "Mô tả sản phẩm 1 rất hấp dẫn và đầy đủ tính năng cho người dùng.",
  },
  {
    id: 2,
    name: "Sản phẩm 2",
    price: 200000,
    image: "/images/product2.jpg",
    description: "Mô tả sản phẩm 2 với nhiều tính năng vượt trội và chất lượng cao cấp.",
  },
  {
    id: 3,
    name: "Sản phẩm 3",
    price: 300000,
    image: "/images/product3.jpg",
    description: "Sản phẩm 3 là sự lựa chọn hoàn hảo với giá cả hợp lý.",
  },
  {
    id: 4,
    name: "Sản phẩm 4",
    price: 400000,
    image: "/images/product4.jpg",
    description: "Mô tả sản phẩm 4 chi tiết và cụ thể giúp khách hàng hiểu rõ hơn.",
  },
  {
    id: 5,
    name: "Sản phẩm 5",
    price: 500000,
    image: "/images/product5.jpg",
    description: "Sản phẩm 5 mang lại trải nghiệm tuyệt vời với thiết kế hiện đại và tính năng vượt trội.",
  },
];

const FavoriteProducts: React.FC = () => {
  const [favorites, setFavorites] = useState<number[]>([1, 2, 3, 5]);

  const removeFavorite = (id: number) => {
    setFavorites((prev) => prev.filter((fav) => fav !== id));
  };

  const addToCart = (id: number) => {
    console.log(`Thêm sản phẩm ${id} vào giỏ hàng`);
  };

  const favoriteProducts = products.filter((product) => favorites.includes(product.id));

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Sản Phẩm Yêu Thích</h1>

        {favoriteProducts.length === 0 ? (
          <p className="text-center text-lg text-gray-500 dark:text-gray-300">Bạn chưa yêu thích sản phẩm nào!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favoriteProducts.map((product) => (
              <a
                key={product.id}
                href={`/products/${product.id}`}
                className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 relative"
              >
                {/* Ảnh sản phẩm */}
                <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg mb-2" />

                {/* Tên sản phẩm và mô tả */}
                <h2 className="text-lg font-bold text-ellipsis overflow-hidden whitespace-nowrap mb-1 text-center mb2">{product.name}</h2>

                <p className="text-sm text-gray-600 dark:text-gray-400 text-ellipsis overflow-hidden whitespace-normal mb-4">
                  {truncateText(product.description, 96)}
                </p>
                {/* Nút thao tác */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      removeFavorite(product.id);
                    }}
                    className="text-red-500 flex items-center gap-1 hover:text-red-600"
                  >
                    <AiFillHeart />
                    <span>Gỡ bỏ</span>
                  </button>
                  {/* Giá sản phẩm */}
                  <p className="text-gray-700 dark:text-gray-300 font-semibold">{product.price.toLocaleString()} VND</p>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product.id);
                    }}
                    className="bg-blue-500 text-white py-1 px-3 rounded-md flex items-center gap-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <AiOutlineShoppingCart />
                    <span>Thêm vào giỏ</span>
                  </button>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoriteProducts;
