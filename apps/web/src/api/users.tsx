import axios from 'axios';

export const fetchUsers = async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/users`);
  return response.data;
};

export const createUser = async (user: any) => {
  const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/users`, user);
  return response.data;
};

export const updateUser = async (id: string, user: any) => {
  `${process.env.NEXT_PUBLIC_BACKEND_HOST}/users`
  const response = await axios.patch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/users/${id}`, user);
  return response.data;
};

export const deleteUser = async (id: string) => {
  const response = await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/users/${id}`);
  return response.data;
};