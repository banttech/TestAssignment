import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import UpdateAmountForm from '../../components/UpdateAmountForm';
import { updateAmount } from '../../api/creditors';

export default function UpdateAmount() {
  const router = useRouter();
  const id = router.query.id ? Number(router.query.id) : null;

  const handleUpdateAmount = async (formData) => {
    try {
      const response = await updateAmount(
        id,
        formData.price
      );
      if (response) {
        alert('Amount updated successfully');
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
          <h1 className="text-3xl font-bold mb-8">Update Amount</h1>
            <UpdateAmountForm onSubmit={handleUpdateAmount} id={id} />
        </div>
      </div>
    </>
  );
}
