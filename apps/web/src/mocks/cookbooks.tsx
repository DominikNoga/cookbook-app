import type { Cookbook } from '@/types/model';

export const cookbooksMock: Cookbook[] = [
  {
    id: 'cb-italian-weeknights',
    title: 'Italian Weeknights',
    description:
      'Fast, cozy Italian-inspired dinners you can cook after work. Minimal ingredients, maximum comfort.',
    coverImageUrl:
      'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1400&q=80',
    price: { amountCents: 1999, currency: 'PLN' },
  },
  {
    id: 'cb-brunch-basics',
    title: 'Brunch Basics',
    description:
      'Simple breakfasts and brunch recipes that always hit. Great for lazy weekends and quick mornings.',
    coverImageUrl:
      'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1400&q=80',
    price: undefined,
  },
];

export function getCookbookById(cookbookId: string): Cookbook | undefined {
  return cookbooksMock.find((c) => c.id === cookbookId);
}
