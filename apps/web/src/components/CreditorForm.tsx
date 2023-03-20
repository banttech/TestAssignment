import { useForm } from 'react-hook-form';

type CreditorFormData = {
  name: string;
  address: string;
  email: string;
  phone: string;
  amount_owed: number;
};

type CreditorFormProps = {
  onSubmit: (data: CreditorFormData) => void;
  defaultValues?: CreditorFormData;
};

export default function CreditorForm({
  onSubmit,
  defaultValues,
}: CreditorFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreditorFormData>({ defaultValues });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-gray-100 p-6 rounded-lg"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name:
        </label>
        <input
          type="text"
          {...register('name', { required: true })}
          id="name"
          className="text-gray-700 px-3 py-2 border-gray-800 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">Name is required.</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
          Address:
        </label>
        <input
          type="text"
          {...register('address', { required: true })}
          id="address"
          className="text-gray-700 px-3 py-2 border-gray-800 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        />
        {errors.address && (
          <p className="text-red-500 text-sm mt-1">Address is required.</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email:
        </label>
        <input
          type="text"
          {...register('email', { required: true })}
          id="email"
          className="text-gray-700 px-3 py-2 border-gray-800 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">Email is required.</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
          Phone:
        </label>
        <input
          type="text"
          {...register('phone', { required: true })}
          id="phone"
          className="text-gray-700 px-3 py-2 border-gray-800 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">Phone is required.</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
      >
        Submit
      </button>
    </form>
  );
}
