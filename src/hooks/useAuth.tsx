import { useState, useEffect } from "react";

interface User {
  name: string | null;
  email: string | null;
  avatar: string | null;
  password?: string | null;
  gender?: string;
}

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  // Login method
  const login = (email: string, password: string) => {
    // Thực hiện logic đăng nhập ở đây (gọi API hoặc xác thực)
    return { email: email, password: password };
  };

  // Logout method
  const logout = () => {
    setUser(null);
  };

  // Register method
  const register = (name: string, avatar: string, email: string, password: string, gender: string) => {
    // Thực hiện logic đăng ký ở đây (ví dụ: gọi API để tạo tài khoản)
    console.log("User registered:", { email, gender });
    setUser({ name, avatar, email, password, gender });
  };

  useEffect(() => {
    // Có thể thêm logic kiểm tra session hoặc localStorage ở đây để tự động đăng nhập
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return {
    user,
    login,
    logout,
    register, // Thêm phương thức register vào kết quả trả về
  };
};

export default useAuth;
