// UserManagement.tsx
import React, { useState, useEffect } from 'react';

type User = {
  id: string;
  name: string;
  email: string;
  role: 'customer' | 'admin';
  status: 'active' | 'banned';
};

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Fetch users from the backend API (mock data for now)
    const fetchUsers = async () => {
      const mockUsers: User[] = [
        { id: '1', name: 'John Doe', email: 'john@example.com', role: 'customer', status: 'active' },
        { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'admin', status: 'active' },
        { id: '3', name: 'Sam Wilson', email: 'sam@example.com', role: 'customer', status: 'banned' }
      ];
      setUsers(mockUsers);
    };

    fetchUsers();
  }, []);

  const handleEditUser = (userId: string) => {
    // Implement edit user functionality
    console.log(`Editing user ${userId}`);
  };

  const handleDeleteUser = (userId: string) => {
    // Implement delete user functionality
    setUsers(users.filter(user => user.id !== userId));
    console.log(`Deleted user ${userId}`);
  };

  const handleToggleStatus = (userId: string) => {
    setUsers(users.map(user =>
      user.id === userId ? { ...user, status: user.status === 'active' ? 'banned' : 'active' } : user
    ));
  };

  return (
    <div className="mt-8">
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="py-4 px-6">Name</th>
            <th className="py-4 px-6">Email</th>
            <th className="py-4 px-6">Role</th>
            <th className="py-4 px-6">Status</th>
            <th className="py-4 px-6">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="text-center border-b">
              <td className="py-4 px-6">{user.name}</td>
              <td className="py-4 px-6">{user.email}</td>
              <td className="py-4 px-6">{user.role}</td>
              <td className={`py-4 px-6 ${user.status === 'active' ? 'text-green-500' : 'text-red-500'}`}>
                {user.status}
              </td>
              <td className="py-4 px-6 flex gap-2 justify-center">
                <button
                  onClick={() => handleEditUser(user.id)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded">
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteUser(user.id)}
                  className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
                  Delete
                </button>
                <button
                  onClick={() => handleToggleStatus(user.id)}
                  className={`${
                    user.status === 'active' ? 'bg-gray-500' : 'bg-green-500'
                  } hover:bg-gray-600 text-white py-2 px-4 rounded`}>
                  {user.status === 'active' ? 'Ban' : 'Activate'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
