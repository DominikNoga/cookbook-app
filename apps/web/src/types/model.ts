export type Money = {
  amountCents: number;
  currency: 'PLN' | 'EUR' | 'USD';
};

export type Cookbook = {
  id: string;
  title: string;
  description: string;
  coverImageUrl: string;
  price?: Money;
};

export type Recipe = {
  id: string;
  cookbookId: string;
  title: string;
  heroImageUrl: string;
  preparationTimeMinutes: number;
  cookingTimeMinutes: number;
  ingredients: string[];
  instructions: string; // Rich text (could be markdown or HTML)
};
