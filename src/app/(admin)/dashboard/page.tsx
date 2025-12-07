import { requireAuth } from '@/lib/auth-utils';

export default async function DashboardPage() {
  await requireAuth();
  return (
    <div>
      <h1>dashboard</h1>
    </div>
  );
}
