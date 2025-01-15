import React from "react";
import Link from "next/link";
import useAuth from "../hooks/useAuth";

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const mockUser = {
    id: "123",
    name: "Nguyễn Văn A",
    avatar: "https://via.placeholder.com/150", // Link ảnh đại diện mẫu
    email: "nguyenvana@example.com",
  };
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <ul className="flex space-x-6 justify-center items-center">
        <li>
          <Link href="/" passHref legacyBehavior>
            <a className="navbar-link">Trang Chủ</a>
          </Link>
        </li>
        <li>
          <Link href="/cart" passHref legacyBehavior>
            <a className="navbar-link">Giỏ Hàng</a>
          </Link>
        </li>
        {!user ? (
          <li>
            <Link href="/login" passHref legacyBehavior>
              <a className="navbar-link">Đăng Nhập</a>
            </Link>
          </li>
        ) : (
          <li className="flex items-center space-x-4">
            {/* Hiển thị ảnh đại diện và tên người dùng */}
            {mockUser.avatar && <img src={mockUser.avatar} alt="Avatar" className="w-8 h-8 rounded-full" />}
            <span className="text-white">{mockUser.name}</span>
            <button onClick={logout} className="navbar-link bg-red-500 hover:bg-red-600 px-2 py-1 rounded-md">
              Đăng Xuất
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
