import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { findDetailsById, updateAmount } from '../api/creditors';

type UpdateAmountFormData = {
  price: number;
  id: number;
  givenPrice: number;
};

type UpdateAmountFormProps = {
  onSubmit: (data: UpdateAmountFormData) => void;
  id: number;
  defaultValues?: UpdateAmountFormData;
};

export default function UpdateAmountForm({
  onSubmit,
  id,
  defaultValues,
}: UpdateAmountFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<UpdateAmountFormData>({ defaultValues });

  const price = defaultValues?.price;

  useEffect(() => {
    findDetailsById(id).then((data) => {
        setValue('price', data.price);
    });
  }, [id]);


  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-gray-100 p-6 rounded-lg"
    >
      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
          Update Amount:
        </label>
        <input
          type="number"
          {...register('price', { required: true })}
          id="price"
          className="text-gray-700 px-3 py-2 border-gray-800 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-gray-200"
          value={price}
        />
        {errors.price && (
          <p className="text-red-500 text-sm mt-1">Price is required.</p>
        )}
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
        >
          Update
        </button>
      </div>
    </form>
  );
}
