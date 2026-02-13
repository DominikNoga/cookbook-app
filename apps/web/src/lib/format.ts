import type { Money } from '@/types/model';

export function formatMoney(m: Money): string {
  const amount = (m.amountCents / 100).toFixed(2);
  return `${amount} ${m.currency}`;
}

export function formatTotalTime(prep: number, cook: number): string {
  const total = prep + cook;
  return `${total} min`;
}
