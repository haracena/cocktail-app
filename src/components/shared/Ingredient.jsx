import React from 'react'

const Ingredient = ({ ingredient, measure }) => {

  const getIngredientImg = () => {
    const searchName = ingredient.replace(' ', '%20');
    return `https://www.thecocktaildb.com/images/ingredients/${searchName}-Medium.png`;
  }

  return (
    <div>
      <img src={getIngredientImg()} alt={ingredient}/>
      <p>{ingredient} - {measure}</p>
    </div>
  )
}

export default Ingredient;
