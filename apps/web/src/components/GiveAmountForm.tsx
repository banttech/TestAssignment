import { useForm } from 'react-hook-form';
import { use, useEffect, useState } from 'react';
import { fetchUsers } from '../api/users';
import {findCreditorById} from '../api/creditors';

type GiveAmountFormData = {
  price: number;
  userId: number;
  creditorId: number;
};

type GiveAmountFormProps = {
  onSubmit: (data: GiveAmountFormData) => void;
  creditorId: number;
  defaultValues?: GiveAmountFormData;
};

export default function GiveAmountForm({
  onSubmit,
  creditorId,
  defaultValues,
}: GiveAmountFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<GiveAmountFormData>({ defaultValues });
  const [users, setUsers] = useState<any>([]);
  const [creditorDetails, setCreditorDetails] = useState<any>([]);

  useEffect(() => {
    findCreditorById(creditorId).then((data) => {
      setCreditorDetails(data);
      setValue('creditorId', data.id);
    });
  }, [creditorId]);

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-gray-100 p-6 rounded-lg"
    >
      <div className="mb-4">
        <label
          htmlFor="creditorId"
          className="block text-gray-700 font-bold mb-2"
        >
          Creditor:
        </label>
        <input
          type="text"
          {...register('creditorId', { required: true })}
          id="creditorId"
          className="text-gray-700 px-3 py-2 border-gray-800 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-gray-200"
          readOnly
          value={creditorDetails ? creditorDetails?.name : ''}
        />
        {errors.creditorId && (
          <p className="text-red-500 text-sm mt-1">Creditor is required.</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="userId" className="block text-gray-700 font-bold mb-2">
          Select User to Give Amount:
        </label>
        <select
          {...register('userId', { required: true })}
          id="userId"
          className="text-gray-700 px-3 py-2 border-gray-800 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        >
          <option value="">Select User</option>
          {users &&
            users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.first_name} {user.last_name}
              </option>
            ))}
        </select>
        {errors.userId && (
          <p className="text-red-500 text-sm mt-1">User is required.</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
         Amount:
        </label>
        <input
          type="number"
          {...register('price', { required: true })}
          id="price"
          className="text-gray-700 px-3 py-2 border-gray-800 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        />
        {errors.price && (
          <p className="text-red-500 text-sm mt-1">Amount is required.</p>
        )}
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
