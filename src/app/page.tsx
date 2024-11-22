import { Input } from '@/components/ui/input';

export default function Home() {
  return (
    <main className="container mx-auto flex flex-col gap-8 pt-6">
      <h1 className="text-primary">Instant mate admin</h1>
      <div className="flex gap-4">
        <Input type="email" placeholder="Email" />
      </div>
    </main>
  );
}
