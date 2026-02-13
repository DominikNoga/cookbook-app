import { Link } from 'react-router-dom';
import type { Recipe } from '@/types/model';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

type Props = {
  recipe: Recipe;
};

export function RecipeCard({ recipe }: Props) {
  return (
    <Link
      to={`/cookbooks/${recipe.cookbookId}/recipes/${recipe.id}`}
      className='block'
    >
      <Card className='overflow-hidden transition hover:shadow-sm'>
        <CardHeader className='p-0'>
          <AspectRatio ratio={16 / 9}>
            <img
              src={recipe.heroImageUrl}
              alt={recipe.title}
              className='h-full w-full object-cover'
              loading='lazy'
            />
          </AspectRatio>
        </CardHeader>

        <CardContent className='space-y-1 p-4'>
          <CardTitle className='text-base leading-tight'>{recipe.title}</CardTitle>
          <p className='text-sm text-muted-foreground'>
            Prep {recipe.preparationTimeMinutes}m · Cook {recipe.cookingTimeMinutes}m
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
