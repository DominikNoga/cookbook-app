import { useMemo, useState } from 'react';

import { CookbookCard } from '@/components/cookbook/CookbookCard/CookbookCard';
import { cookbooksMock } from '@/mocks/cookbooks';
import { Input } from '@/components/ui/input';

export function LibraryPage() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return cookbooksMock;
    return cookbooksMock.filter((c) => c.title.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className='space-y-6'>
      <div className='space-y-1'>
        <h1 className='text-2xl font-semibold'>My Library</h1>
        <p className='text-sm text-muted-foreground'>
          Cookbooks you own (mock for now).
        </p>
      </div>

      <div className='max-w-md'>
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Search cookbooks by title...'
        />
      </div>

      {filtered.length === 0 ? (
        <div className='rounded-xl border bg-card p-6 text-sm text-muted-foreground'>
          No cookbooks match your search.
        </div>
      ) : (
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {filtered.map((cookbook) => (
            <CookbookCard key={cookbook.id} cookbook={cookbook} />
          ))}
        </div>
      )}
    </div>
  );
}
