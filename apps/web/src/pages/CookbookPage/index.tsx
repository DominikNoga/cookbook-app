import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { getCookbookById } from '@/mocks/cookbooks';
import { getRecipesByCookbookId } from '@/mocks/recipes';
import { formatMoney } from '@/lib/format';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { RecipeCard } from '@/components/recipe/RecipeCard/RecipeCard';

export function CookbookPage() {
  const { cookbookId } = useParams<{ cookbookId: string }>();

  const cookbook = useMemo(
    () => (cookbookId ? getCookbookById(cookbookId) : undefined),
    [cookbookId],
  );

  const recipes = useMemo(
    () => (cookbookId ? getRecipesByCookbookId(cookbookId) : []),
    [cookbookId],
  );

  if (!cookbook) {
    return <div className='p-6'>Cookbook not found.</div>;
  }

  const priceLabel = cookbook.price ? formatMoney(cookbook.price) : 'Free';

  return (
    <div className='space-y-6'>
      <div className='overflow-hidden rounded-2xl border'>
        <img
          src={cookbook.coverImageUrl}
          alt={cookbook.title}
          className='h-56 w-full object-cover sm:h-72'
        />
      </div>

      <div className='space-y-2'>
        <div className='flex flex-wrap items-center gap-3'>
          <h1 className='text-2xl font-semibold'>{cookbook.title}</h1>
          <Badge variant={cookbook.price ? 'default' : 'secondary'}>{priceLabel}</Badge>
        </div>
        <p className='text-muted-foreground'>{cookbook.description}</p>
      </div>

      <Separator />

      <div className='space-y-3'>
        <h2 className='text-lg font-semibold'>Recipes</h2>
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {recipes.map((r) => (
            <RecipeCard key={r.id} recipe={r} />
          ))}
        </div>
      </div>
    </div>
  );
}
