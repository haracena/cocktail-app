export const getIngredientsMeasure = (cocktail) => {
  let list = [];
  
  for (let i = 0; i < 16; i++) {
    if (cocktail[`strIngredient${i + 1}`] != null) {
      list[i] = {
        ingredient: cocktail[`strIngredient${i + 1}`],
        img: getIngredientImg(cocktail[`strIngredient${i + 1}`])
      };
    }

    if (cocktail[`strMeasure${i + 1}`] != null) {
      list[i].measure = cocktail[`strMeasure${i + 1}`]
    }
  }

  return list;
}

const getIngredientImg = (ingredient) => {
  const searchName = ingredient.replace(' ', '%20');
  return `https://www.thecocktaildb.com/images/ingredients/${searchName}-Medium.png`;
}