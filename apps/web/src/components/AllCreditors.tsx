import Link from 'next/link';
import { useState, useEffect } from 'react';
import { fetchCreditors } from '../api/creditors';

export default function AllCreditors() {
  const [creditors, setCreditors] = useState<any>([]);

  useEffect(() => {
    fetchCreditors().then((data) => {
      setCreditors(data);
    });
  }, []);

  return (
    <>
      <div className="flex justify-center mt-5">
        {creditors && creditors.length === 0 ? (
          <p className="text-white">No creditors found</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th className="px-4 py-2 text-white">Creditor Name</th>
                <th className="px-4 py-2 text-white">Phone Number</th>
                <th className="px-4 py-2 text-white">Email</th>
                <th className="px-4 py-2 text-white">Action</th>
              </tr>
            </thead>
            <tbody>
              {creditors &&
                creditors.map((creditor: any) => (
                  <tr key={creditor.id}>
                    <td className="border px-4 py-2 text-white">
                      {creditor.name}
                    </td>
                    <td className="border px-4 py-2 text-white">
                      {creditor.phone}
                    </td>
                    <td className="border px-4 py-2 text-white">
                      {creditor.email}
                    </td>

                    <td className="border px-4 py-2 text-white flex items-center space-x-2">
                      <Link
                        href={`/creditorUser/giveAmount?creditorId=${creditor.id}`}
                      >
                        <span className="text-teal-600 cursor-pointer">
                          Give Amount
                        </span>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
