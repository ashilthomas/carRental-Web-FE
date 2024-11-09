import React, { useState, useEffect } from 'react';
import instance from '../../../Axios/Instance';
import Loader from '../../Loader/Loader';

type IUser = {
  id: string;
  username: string;
  email: string;
  role: 'customer' | 'admin';
  status: 'active' | 'banned';
};

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // Fetch user data from the API with pagination
  const fetchUserData = async (page: number) => {
    try {
      setLoading(true);
      
      // Fetch data from API with pagination
      const response = await instance.get(`/adduser/alluser?page=${page}&limit=5`);
      
      if (response.data.success) {
        setUsers(response.data.users);
        setTotalPages(response.data.totalPages);
      } else {
        setError('No users found');
      }
    } catch (err) {
      console.error('Error fetching user data:', err);
      setError('Failed to fetch user data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  if (loading) return <div><Loader/></div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="mt-4">
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-900 text-white">
            <th className="py-4 px-6">Name</th>
            <th className="py-4 px-6">Email</th>
            <th className="py-4 px-6">Role</th>
           
            <th className="py-4 px-6">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="text-center border-b">
              <td className="py-4 px-6">{user.username}</td>
              <td className="py-4 px-6">{user.email}</td>
              <td className="py-4 px-6">{user.role}</td>
            
              <td className="py-4 px-6 flex justify-center">
                <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 mx-2 rounded"
        >
          Previous
        </button>
        <span className="text-gray-700 mx-2">Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 mx-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserManagement;
