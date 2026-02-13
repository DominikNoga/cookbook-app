import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeById } from '@/mocks/recipes';
import { Separator } from '@/components/ui/separator';
import { formatTotalTime } from '@/lib/format';

function RichText({ html }: { html: string }) {
  // MVP: assume trusted mock content.
  // Later: sanitize on the backend or sanitize here before dangerouslySetInnerHTML.
  return (
    <div
      className='prose prose-zinc dark:prose-invert max-w-none'
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export function RecipePage() {
  const { recipeId } = useParams<{ recipeId: string }>();

  const recipe = useMemo(() => (recipeId ? getRecipeById(recipeId) : undefined), [recipeId]);

  if (!recipe) {
    return <div className='p-6'>Recipe not found.</div>;
  }

  return (
    <div className='mx-auto max-w-3xl space-y-6'>
      <div className='overflow-hidden rounded-2xl border'>
        <img
          src={recipe.heroImageUrl}
          alt={recipe.title}
          className='h-64 w-full object-cover sm:h-80'
        />
      </div>

      <div className='space-y-2'>
        <h1 className='text-3xl font-semibold tracking-tight'>{recipe.title}</h1>
        <p className='text-sm text-muted-foreground'>
          Prep {recipe.preparationTimeMinutes}m · Cook {recipe.cookingTimeMinutes}m · Total{' '}
          {formatTotalTime(recipe.preparationTimeMinutes, recipe.cookingTimeMinutes)}
        </p>
      </div>

      <Separator />

      <section className='space-y-3'>
        <h2 className='text-lg font-semibold'>Ingredients</h2>
        <ul className='space-y-2'>
          {recipe.ingredients.map((i) => (
            <li key={i} className='rounded-xl border bg-card px-4 py-3'>
              {i}
            </li>
          ))}
        </ul>
      </section>

      <Separator />

      <section className='space-y-3'>
        <h2 className='text-lg font-semibold'>Instructions</h2>
        <RichText html={recipe.instructions} />
      </section>
    </div>
  );
}
