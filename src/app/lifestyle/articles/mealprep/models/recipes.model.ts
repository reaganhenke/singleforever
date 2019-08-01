export interface Recipe {
  title: string;
  description: string;
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
    title: 'Mujadara',
    description: `Lebanese lentils, rice, and carmelized onions. An excellent comfort food.
      Some effort required, but high nutritional payoff.`,
    picture: 'assets/mealprep/mujaddara.jpg',
    url: 'https://thelemonbowl.com/mujaddara-lentils-and-rice-with-caramelized-onions/',
    shortUrl: 'thelemonbowl.com',
    ingredients: ['2 tbsps oil', '1 large onion (thinly sliced)', '1 cup rice',
      '1 3/4 cups lentils (rinsed)', '1 1/2 tsps salt', '1/2 tsp pepper', 'yogurt (optional)'],
    steps: [`Heat oil in a deep pot over medium heat and saute onions until carmelized
      (about 20-25 minutes), stirring frequently. Sprinkle with salt. Remove from pan and set aside.`,
      `In the same pan, add lentils and increase the heat to medium-high. Add 6 cups water. Bring to a boil,
      then reduce heat to low and simmer until halfway cooked (about 15 minutes)`,
      `Add rice, salt, and pepper to the pot and bring to a boil. Stir once, then cover with lid and reduce
      heat to low. Cook until all liquid is absorbed (about 15 minutes)`,
      `Fluff lentils and rice with a fork, add carmelized onions. Serve with yogurt.`],
    nutrition: 3,
    energy: 3
}, {
  title: 'Honey-Sesame Chicken & Bok Choy',
  description: `Lightly crispy chicken tenders and bok choy in a rich, sweet sauce. A very rewarding dish.
    Lots of effort required, but high nutritional payoff.`,
  picture: 'assets/mealprep/sesamechicken.jpg',
  url: 'https://www.blueapron.com/recipes/honey-sesame-chicken-bok-choy-with-gochujang',
  shortUrl: 'blueapron.com',
  ingredients: ['1 tbsp rice vinegar', '2 tbsp soy sauce', '4 tbsp brown sugar', 'pinch ground ginger',
    '1 lb chicken tenders', '10 oz baby bok choy (about 3 heads)', '1 cup jasmine rice',
    '1 tbsp honey', '1 tbsp sesame oil', '2 tsps gochujang', '1/4 cornstarch', 'sesame seeds (optional)'],
  steps: [`To make the soy glaze: add the vinegar, soy sauce, sugar, and ginger to a small saucepan.
    Bring to a boil, and then simmer until reduced (about 10 minutes). Set aside and let cool.`,
    `In a medium pot, combine 1 cup water, a big pinch of salt, and as much of the gochujang as you want.
    Whisk. Add the rice. Heat to boiling, then reduce to low. Cover and cook without stirring until the
    water has been absorbed (12-14 minutes)`,
    `Wash and dry the bok choy. Chop off and discard the root end, then roughly chop and set aside.`,
    `In a bowl, whisk together the honey, sesame oil, 1 tbsp warm water, and the soy glaze.`,
    `Pat the chicken dry with paper towels. Place in a large bowl, season with salt and pepper. Add
    the cornstarch and stir to coat.`,
    `In a large pan, heat a drizzle of olive oil on medium high. Add the coated chicken in an even layer
    Cook, without stirring, 3-5 minutes on the first side. Flip the chicken, then add the chopped bok choy
    and sauce. Loosely cover the pan with foil and cook without stirring 3-5 minutes (until
      the bok choy is wilted and chicken is cooked through). Stir to combine`,
    `Served the cooked chicken, boy choy, and sauce over the cooked rice. Garnish with sesame seeds.`],
  nutrition: 4,
  energy: 5
}, {
  title: 'Cauliflower Buffalo Wings',
  description: `Spicy and simple, a great way to get a serving of vegetables in.`,
  picture: 'assets/mealprep/cauliflower.jpg',
  url: 'https://www.noracooks.com/vegan-cauliflower-buffalo-wings/',
  shortUrl: 'noracooks.com',
  ingredients: ['1 large head cauliflower', '1 cup water', '3/4 cup flour',
    '1 tbsp garlic powder', '1 tbsp onion power', '1/4 tsp salt', '1 cup Frank\'s Red Hot Sauce'],
  steps: [`Preheat the oven to 450 degrees F. Grease a large baking sheet.`,
    `Wash and cut cauliflower into bite sized pieces`,
    `In a large bowl, add water, flour, garlic and onion powder, and salt. Whisk until well combined`,
    `Add the cauliflower to the batter in the bowl, and toss to combine. Remove the pieces of cauliflower,
    one by one, and tap off the excess batter. Place on the prepared baking sheet in a single layer`,
    `Bake for 15 minutes. Flip them over and bake for 10 more minutes, until golden brown`,
    `Brush the buffalo sauce on each cauliflower wing, or toss the florets with the sauce in a large bowl, then return to the pan.
    Put them back in the oven for 20 minutes.`,
    `Serve with Blu Cheese or Ranch dressing and celery, if desired.`
  ],
  nutrition: 5,
  energy: 2
}, {
  title: 'Frozen Tater Tots with Mayo',
  description: `When you want something easy and salty and crispy and don't care how many calories it has.`,
  picture: 'assets/mealprep/tatertots.jpg',
  url: 'http://freezermealfrenzy.com/2019/03/alexia-crispy-seasoned-potato-puffs-review/',
  shortUrl: 'freezermealfrenzy.com',
  ingredients: ['1 bag frozen tater tots', '1/4 cup mayonnaise', '1 tbsp Frank\'s Red Hot'],
  steps: [`Cook the tater tots according the instructions on the bag.`,
    `Mix mayo and hot sauce.`,
    `Dip the tots in the mayo sauce.`
  ],
  nutrition: 1,
  energy: 1
}, {
  title: 'Chocolate Chip Cookies',
  description: `More effort than a simple snack, but with a sweet, sugary reward. Great for when you've
  got enough energy to really reward yourself`,
  picture: 'assets/mealprep/cookies.jpg',
  url: 'https://www.ihearteating.com/easiest-chocolate-chip-cookie-recipe/',
  shortUrl: 'ihearteating.com',
  ingredients: ['1/2 cup butter (melted)', '1/2 cup sugar', '1/4 cup brown sugar (packed)', '2 tsps vanilla extract',
    '1 large egg', '1 3/4 cups flour', '1/2 tsp baking soda', '1/2 tsp salt', '1 cup semisweet chocolate chips'],
  steps: [`Preheat the oven to 350 F.`, `In a large bowl, mix butter and sugars until well combined.`,
    `Stir in vanilla and egg until incorporated.`, `Add the flour, baking soda, and salt.`, `Mix dough until just combined`,
    `Stir in chocolate chips.`, `Scoop out 1.5 tablespoons of dough and place 2 inches apart on baking sheet`,
    `Bake for 7-10 minutes, or until cookies are set. Enjoy`
  ],
  nutrition: 2,
  energy: 4
}];
