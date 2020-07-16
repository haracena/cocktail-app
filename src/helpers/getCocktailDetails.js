export const getIngredientsMeasure = (cocktail) => {
  let list = [];
  
  for (let i = 1; i < 16; i++) {
    if (cocktail[`strIngredient${i}`] != null) {
      list[i] = {
        ingredient: cocktail[`strIngredient${i}`]
      };
    }

    if (cocktail[`strMeasure${i}`] != null) {
      list[i].measure = cocktail[`strMeasure${i}`]
    }
  }

  return list;
}