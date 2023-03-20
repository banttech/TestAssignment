import { useEffect, useState } from 'react';
import { fetchUsers } from '../api/users';

type UsersListProps = {
  selectedUserId: string;
  handleUserChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function UsersList({
  selectedUserId,
  handleUserChange,
}: UsersListProps) {
  const [users, setUsers] = useState<any>([]);

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <div className="flex justify-center">
      <select value={selectedUserId} onChange={handleUserChange} className="bg-gray-900 text-white mt-5">
        <option value="" selected disabled>Select a user</option>
        {users.map((user: any) => (
          <option key={user.id} value={user.id}>
            {user.first_name} {user.last_name}
          </option>
        ))}
      </select>
    </div>
  );
}
