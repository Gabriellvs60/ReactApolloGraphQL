import React from 'react';

const SearchItem = () => (
    <li key={recipe._id}>
        <Link to={`/recipes/${recipe._id}`}>
            <h4>{recipe.name}</h4>
        </Link>
        <p>Likes: {recipe.likes}</p>
    </li>
)

export default SearchItem;