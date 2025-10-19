import UserForm from '@/components/UserForm';
import UserList from '@/components/UserList';

export default function Home() {
  return (
    <main className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">User Management</h1>
      <UserForm />
      <UserList />
    </main>
  );
}