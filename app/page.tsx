import GreetingDisplay from '@/components/GreetingDisplay';

export const metadata = {
  title: 'Hello World App',
  description: 'A simple greeting application',
};

export default function Home(): React.ReactElement {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <GreetingDisplay message="Hello, World!" />
    </main>
  );
}