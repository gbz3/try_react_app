import React from "react";
import Recipe from "./Recipe";

function Menu({ recipes }) {
    return (
        <articles>
            <header>
                <h1>Delicious Recipes</h1>
            </header>
            <div className="recipes">
                {recipes.map((recipe, i) => (<Recipe key={i} {...recipe} />))}
            </div>
        </articles>
    );
}

export default Menu;
