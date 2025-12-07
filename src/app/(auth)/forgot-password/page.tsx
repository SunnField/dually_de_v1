import ForgotPasswordForm from '@/components/forgot-password-form';
import { requireNoAuth } from '@/lib/auth-utils';

export default async function ForgotPasswordPage() {
  await requireNoAuth();
  return <ForgotPasswordForm />;
}
