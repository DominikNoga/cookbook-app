import { Link } from 'react-router-dom';
import type { Cookbook } from '@/types/model';
import { formatMoney } from '@/lib/format';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';

type Props = {
  cookbook: Cookbook;
};

export function CookbookCard({ cookbook }: Props) {
  const priceLabel = cookbook.price ? formatMoney(cookbook.price) : 'Free';

  return (
    <Link to={`/cookbooks/${cookbook.id}`} className='block'>
      <Card className='overflow-hidden transition hover:shadow-sm'>
        <CardHeader className='p-0'>
          <AspectRatio ratio={16 / 9}>
            <img
              src={cookbook.coverImageUrl}
              alt={cookbook.title}
              className='h-full w-full object-cover'
              loading='lazy'
            />
          </AspectRatio>
        </CardHeader>

        <CardContent className='space-y-2 p-4'>
          <div className='flex items-start justify-between gap-3'>
            <CardTitle className='text-base leading-tight'>{cookbook.title}</CardTitle>
            <Badge variant={cookbook.price ? 'default' : 'secondary'}>{priceLabel}</Badge>
          </div>

          <p className='text-sm text-muted-foreground line-clamp-2'>
            {cookbook.description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
