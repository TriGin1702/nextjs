import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return passwordRegex.test(password);
  };

  const handleLogin = () => {
    if (!validateEmail(email)) {
      setError("Email không hợp lệ.");
      return;
    }
    if (!validatePassword(password)) {
      setError("Mật khẩu phải có ít nhất 6 ký tự, bao gồm cả chữ và số.");
      return;
    }

    setError("");
    login(email, password);
    localStorage.setItem("user", JSON.stringify({ email }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">Đăng Nhập</h1>

        {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Nhập email của bạn"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 dark:text-gray-300 text-sm font-medium">
            Mật khẩu
          </label>
          <input
            type="password"
            id="password"
            placeholder="Nhập mật khẩu của bạn"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
        </div>

        <div className="mb-6">
          <Link href="/" className="text-blue-500 hover:underline">
            <button
              onClick={handleLogin}
              className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-500"
            >
              Đăng Nhập
            </button>
          </Link>
        </div>

        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          Chưa có tài khoản?{" "}
          <Link href="/register" className="text-blue-500 hover:underline">
            Đăng ký
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;