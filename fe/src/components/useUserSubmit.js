import { useState } from 'react';

export function useUserSubmit() {
  const [status, setStatus] = useState({
    message: '',
    type: '' // 'success' or 'error'
  });
  const [isLoading, setIsLoading] = useState(false);

  const submitUser = async (userData) => {
    setIsLoading(true);
    setStatus({ message: '', type: '' });

    try {
      const response = await fetch('http://127.0.0.1:8000/users/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        throw new Error(data.detail || 'Something went wrong');
      }

      setStatus({
        message: `User created successfully with ID: ${data.data.id}`,
        type: 'success'
      });
      
      return true; // Indicate success
    } catch (error) {
      setStatus({
        message: error.message,
        type: 'error'
      });
      return false; // Indicate failure
    } finally {
      setIsLoading(false);
    }
  };

  return { submitUser, status, isLoading };
}