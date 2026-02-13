import type { Recipe } from '@/types/model';

export const recipesMock: Recipe[] = [
  {
    id: 'r-creamy-garlic-chicken',
    cookbookId: 'cb-italian-weeknights',
    title: 'Creamy Garlic Chicken',
    heroImageUrl:
      'https://www.sugarsaltmagic.com/wp-content/uploads/2024/03/Creamy-Garlic-Chicken-2FEAT.jpg',
    preparationTimeMinutes: 10,
    cookingTimeMinutes: 20,
    ingredients: [
      '2 chicken breasts',
      '3 cloves garlic',
      '200 ml cream',
      '1 tbsp butter',
      'Salt & pepper',
    ],
    instructions: `
      <h2>Quick intro</h2>
      <p>This is a creamy, cozy chicken dish you can make on a weeknight. Serve it with rice, pasta, or bread.</p>
      <h2>Instructions</h2>
      <ol>
        <li>Season the chicken with salt and pepper.</li>
        <li>Sear in butter over medium heat until golden.</li>
        <li>Add minced garlic, cook 30 seconds.</li>
        <li>Pour in cream and simmer until thickened.</li>
        <li>Taste, adjust seasoning, and serve.</li>
      </ol>
    `,
  },
  {
    id: 'r-tomato-basil-pasta',
    cookbookId: 'cb-italian-weeknights',
    title: 'Tomato Basil Pasta',
    heroImageUrl:
      'https://beamingbaker.com/wp-content/uploads/2023/09/IGT-Fresh-Tomato-Basil-Pasta-Recipe-2.jpg',
    preparationTimeMinutes: 8,
    cookingTimeMinutes: 12,
    ingredients: [
      '250 g pasta',
      '2 cups cherry tomatoes',
      '2 tbsp olive oil',
      'Fresh basil',
      'Parmesan (optional)',
      'Salt',
    ],
    instructions: `
      <p>Cook pasta until al dente. In a pan, warm olive oil, add tomatoes, salt, and cook until they burst. Toss with pasta, basil, and parmesan.</p>
    `,
  },
  {
    id: 'r-fluffy-pancakes',
    cookbookId: 'cb-brunch-basics',
    title: 'Fluffy Pancakes',
    heroImageUrl:
      'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1400&q=80',
    preparationTimeMinutes: 10,
    cookingTimeMinutes: 15,
    ingredients: [
      '1 cup flour',
      '1 tbsp sugar',
      '1 tsp baking powder',
      '1 egg',
      '1 cup milk',
      '2 tbsp melted butter',
      'Pinch of salt',
    ],
    instructions: `
      <p>Mix dry ingredients. Whisk wet ingredients. Combine gently (don’t overmix). Cook on a preheated pan until bubbles form, flip, and cook until golden.</p>
    `,
  },
];

export function getRecipesByCookbookId(cookbookId: string): Recipe[] {
  return recipesMock.filter((r) => r.cookbookId === cookbookId);
}

export function getRecipeById(recipeId: string): Recipe | undefined {
  return recipesMock.find((r) => r.id === recipeId);
}
