import { useForm } from "react-hook-form";

type UserFormData = {
  first_name: string;
  last_name: string;
  email: string;
};

type UserFormProps = {
  onSubmit: (data: UserFormData) => void;
  defaultValues?: UserFormData;
};

export default function UserForm({ onSubmit, defaultValues }: UserFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({ defaultValues });
 
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-100 p-6 rounded-lg">
      <div className="mb-4">
        <label htmlFor="first_name" className="block text-gray-700 font-bold mb-2">
          First Name:
        </label>
        <input
          type="text"
          {...register("first_name", { required: true })}
          id="first_name"
          className="text-gray-700 px-3 py-2 border-gray-800 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        />
        {errors.first_name && (
          <p className="text-red-500 text-sm mt-1">First Name is required.</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="last_name" className="block text-gray-700 font-bold mb-2">
          Last Name:
        </label>
        <input
          type="text"
          {...register("last_name", { required: true })}
          id="last_name"
          className="text-gray-700 px-3 py-2 border-gray-800 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        />
        {errors.last_name && (
          <p className="text-red-500 text-sm mt-1">Last Name is required.</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email:
        </label>
        <input
          type="text"
          {...register("email", { required: true })}
          id="email"
          className="text-gray-700 px-3 py-2 border-gray-800 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">Email is required.</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
      >
        Submit
      </button>
    </form>
  );
}