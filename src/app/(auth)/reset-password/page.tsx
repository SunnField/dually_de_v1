import ResetPasswordForm from '@/components/reset-password-form';
import { requireNoAuth } from '@/lib/auth-utils';

export default async function ResetPasswordPage() {
  await requireNoAuth();
  return <ResetPasswordForm />;
}
