import UserForm from '../../components/UserForm';
import { useRouter } from 'next/router';
import { createUser } from '../../api/users';
import Navbar from '../../components/Navbar';

export default function CreateUser() {
  const router = useRouter();

  const handleCreateUser = async (formData) => {
    try {
      const response = await createUser(formData);
      if (response) {
        alert('User created successfully');
        router.push('/');
      }
    } catch (error) {
      alert('Something went wrong');
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-900 min-h-screen text-white">
        <div className="max-w-md mx-auto py-12">
          <h1 className="text-3xl font-bold mb-8">Create User</h1>
          <UserForm onSubmit={handleCreateUser} />
        </div>
      </div>
    </>
  );
}
