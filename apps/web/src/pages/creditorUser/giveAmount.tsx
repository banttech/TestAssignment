import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import GiveAmountForm from '../../components/GiveAmountForm';
import { giveAmount } from '../../api/creditors';

export default function GivenAmout() {
  const router = useRouter();
  const creditorId = router.query.creditorId ? Number(router.query.creditorId) : null;

  const handleGiveAmount = async (formData) => {
    try {
      const response = await giveAmount(
        creditorId,
        formData.userId,
        formData.price
      );
      if (response) {
        alert('Amount given successfully');
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
          <h1 className="text-3xl font-bold mb-8">Give Amount to User</h1>
          <GiveAmountForm onSubmit={handleGiveAmount} creditorId={creditorId} />
        </div>
      </div>
    </>
  );
}
