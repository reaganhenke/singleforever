export interface Recipe {
  title: string;
  picture?: string;
  url?: string;
  shortUrl?: string;
  ingredients: string[];
  steps: string[];
  nutrition: number;
  energy: number;
}

export const recipes: Recipe[] = [
  {
    title: 'Mujaddara',
    picture: 'assets/mealprep/mujaddara.jpg',
    url: 'https://thelemonbowl.com/mujaddara-lentils-and-rice-with-caramelized-onions/',
    shortUrl: 'thelemonbowl.com',
    ingredients: ['Rice', 'Lentils', 'Onion', 'Greek Yogurt'],
    steps: ['Make rice', 'Boil lentils', 'Heat oil and carmelize onions', 'Combine everything. Add salt.'],
    nutrition: 3,
    energy: 3
}];
