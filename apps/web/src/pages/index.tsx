import Head from 'next/head';
import { useState } from 'react';
import CreditorsList from '../components/CreditorsList';
import Navbar from '../components/Navbar';
import UsersList from '../components/UsersList';

export default function Home() {
  const [selectedUserId, setSelectedUserId] = useState<string>('');
  const handleUserChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedUserId(event.target.value);
  };

  return (
    <>
      <Head>
        <title>DNPL | Technical Test</title>
        <meta
          name="description"
          content="Say goodbye to debt and hello to financial freedom with Dnpl – the all-in-one debt management solution."
        />
      </Head>
      <Navbar /> 
      <div className="h-screen w-full bg-gray-900">
        <UsersList
          selectedUserId={selectedUserId}
          handleUserChange={handleUserChange}
        />
        <CreditorsList userId={selectedUserId} />
      </div>
    </>
  );
}
