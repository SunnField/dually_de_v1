import { getCategories } from '@/app/actions/categories';
import CategoriesClient from './client/categories-client';

export default async function CategoriesPage() {
  const data = await getCategories();

  return (
    <div>
      <CategoriesClient categories={data!} />
    </div>
  );
}
