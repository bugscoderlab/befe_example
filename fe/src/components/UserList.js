"use client";
import { useUsersList } from './useUserList';

export default function UserList() {
  const { users, isLoading, error } = useUsersList();

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto mt-10 p-6">
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-red-50 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-red-700">Error</h2>
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">User List</h2>
        <p className="text-gray-500 text-center">No users found</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">User List</h2>
      
      <div className="space-y-6">
        {users.map((user) => (
          <div key={user.id} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-sm text-gray-500">ID: {user.id}</p>
              </div>
            </div>
            
            {user.skills && user.skills.length > 0 && (
              <div className="mt-4">
                <h4 className="text-md font-medium text-gray-700 mb-2">Skills:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {user.skills.map((skill) => (
                    <div 
                      key={skill.id} 
                      className="bg-blue-50 p-2 rounded flex justify-between items-center"
                    >
                      <span className="font-medium">{skill.name}</span>
                      <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs">
                        Level: {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}