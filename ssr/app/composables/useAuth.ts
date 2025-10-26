import { useCookie } from "#app";

interface IUser {
  _id: string;
  name: string;
  email: string;
}

export const useAuth = () => {
  const token = useCookie("token"); 
  const user = useCookie<IUser | null>("user");

  // ตั้งค่า auth หลัง login
  const setAuth = (data: { token: string; user: IUser }) => {
    token.value = data.token;
    user.value = data.user;
  };

  // อัปเดต user หลัง login หรือแก้ไข profile
  const updateUser = (updatedUser: Partial<IUser>) => {
    if (!user.value) return;
    user.value = { ...user.value, ...updatedUser };
  };

  // ล็อกเอาท์
  const clearAuth = () => {
    token.value = null;
    user.value = null;
  };

  // เช็คว่า login หรือยัง
  const isAuthenticated = () => !!token.value;

  return {
    token,
    user,
    setAuth,
    updateUser,
    clearAuth,
    isAuthenticated,
  };
};
