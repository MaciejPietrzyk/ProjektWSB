import React from 'react';

const RecipeList = ({ recipes }) => {
    return (
        <div className="recipe-list">
            {recipes.map((recipe) => (
                <div key={recipe.recipe.uri} className="recipe-item">
                    <h2>{recipe.recipe.label}</h2>
                    <img src={recipe.recipe.image} alt={recipe.recipe.label} />
                    <p>{recipe.recipe.source}</p>
                    <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">
                        View Recipe
                    </a>
                </div>
            ))}
        </div>
    );
};

export default RecipeList;