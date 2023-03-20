import CreditorForm from '../../components/CreditorForm';
import { useRouter } from 'next/router';
import { createCreditor } from '../../api/creditors';
import Navbar from '../../components/Navbar';

export default function CreateCreditor() {
  const router = useRouter();

  const handleCreateCreditor = async (formData) => {
    try {
      const response = await createCreditor(formData);
      if (response) {
        alert('Creditor created successfully');
        router.push('/creditors/allCreditors');
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
          <h1 className="text-3xl font-bold mb-8">Create Creditor</h1>
          <CreditorForm onSubmit={handleCreateCreditor} />
        </div>
      </div>
    </>
  );
}
