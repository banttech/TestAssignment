import Navbar from '../../components/Navbar';
import AllCreditors from '../../components/AllCreditors';

export default function allCreditors() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-900 min-h-screen text-white">
        <div className="max-w-md mx-auto pt-10 pb-4 flex justify-center">
          <h1 className="text-3xl font-bold">Creditors List</h1>
        </div>
        <AllCreditors />
      </div>
    </>
  );
}
