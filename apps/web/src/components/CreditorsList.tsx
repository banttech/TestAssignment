import Link from 'next/link';
import { useState, useEffect } from 'react';
import { fetchCreditorList } from '../api/creditors';
import {deleteCreditorUser} from '../api/creditors';

type CreditorsListProps = {
  userId: string;
};

export default function CreditorsList({ userId }: CreditorsListProps) {
  const [creditorList, setCreditorList] = useState<any>([]);

  useEffect(() => {
    if (userId) {
      fetchCreditorList(userId).then((data) => {
        setCreditorList(data);
      });
    }
  }, [userId]);

  const handleDelete = (id: number) => {
    deleteCreditorUser(id).then(() => {
      alert("Creditors deleted successfully");
      fetchCreditorList(userId).then((data) => {
        setCreditorList(data);
      });
    });
  }

  return (
    <>
    {userId ? (
      <div className="flex justify-center mt-5">
        {creditorList && creditorList.length === 0 ? (
          <p className="text-white">No data found.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th className="px-4 py-2 text-white">Creditor Name</th>
                <th className="px-4 py-2 text-white">Phone Number</th>
                <th className="px-4 py-2 text-white">Amount Owed</th>
              </tr>
            </thead>
            <tbody>
              {creditorList && creditorList.map((creditor: any) => (
                <tr key={creditor.id}>
                  <td className="border px-4 py-2 text-white">
                    {creditor.creditor?.name}
                  </td>
                  <td className="border px-4 py-2 text-white">
                    {creditor.creditor?.phone}
                  </td>
                  <td className="border px-4 py-2 text-white">
                    {creditor.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    ) : (
      <div className="flex justify-center mt-5">
        <p className="text-white">Please select a user to see their amount owed list.</p>
      </div>
    )}
    </>
  );
}
