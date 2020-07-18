export const getIngredientsMeasure = (cocktail) => {
  let list = [];
  const maxIngredientsCount = 15;

  for (let i = 0; i <= maxIngredientsCount; i++) {
    const ingredient = cocktail[`strIngredient${i + 1}`];
    const measure = cocktail[`strMeasure${i + 1}`];

    if (ingredient != null && ingredient.length > 0) {
      list[i] = {
        ingredient: cocktail[`strIngredient${i + 1}`],
        img: getIngredientImg(cocktail[`strIngredient${i + 1}`]),
      };
    }

    if (measure != null && measure.length > 0) {
      list[i].measure = measure;
    }
  }

  return list;
};

export const getIngredientImg = (ingredient) => {
  const searchName = ingredient.replace(' ', '%20');
  return `https://www.thecocktaildb.com/images/ingredients/${searchName}-Medium.png`;
};
