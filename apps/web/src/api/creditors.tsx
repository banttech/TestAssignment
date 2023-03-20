import axios from 'axios';

export const fetchCreditors = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_HOST}/creditors`
  );
  return response.data;
};

export const findCreditorById = async (id: number) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_HOST}/creditors/${id}`
  );
  return response.data;
};

export const createCreditor = async (creditor: any) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_HOST}/creditors`,
    creditor
  );
  return response.data;
};

export const updateCreditor = async (id: string, creditor: any) => {
  const response = await axios.patch(
    `${process.env.NEXT_PUBLIC_BACKEND_HOST}/creditors/${id}`,
    creditor
  );
  return response.data;
};

export const deleteCreditor = async (id: number) => {
  const response = await axios.delete(
    `${process.env.NEXT_PUBLIC_BACKEND_HOST}/creditors/${id}`
  );
  return response.data;
};

export const fetchCreditorList = async (userId: string) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_HOST}/creditorUser/all/${userId}`
  );
  return response.data;
};

export const giveAmount = async (
  creditorId: number,
  userId: number,
  price: number
) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_HOST}/creditorUser`,
    { creditorId, userId, price }
  );
  return response.data;
};

export const findDetailsById = async (id: number) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_HOST}/creditorUser/creditUserDetail/${id}`
  );
  return response.data;
};

export const updateAmount = async (id: number, price: number) => {
  const response = await axios.put(
    `${process.env.NEXT_PUBLIC_BACKEND_HOST}/creditorUser/${id}`,
    { price }
  );
  return response.data;
};

export const deleteCreditorUser = async (id: number) => {
  const response = await axios.delete(
    `${process.env.NEXT_PUBLIC_BACKEND_HOST}/creditorUser/${id}`
  );
  return response.data;
};
