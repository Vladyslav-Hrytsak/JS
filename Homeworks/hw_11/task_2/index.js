fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(recipesObj => {
        const output = document.getElementById('output');

        recipesObj.recipes.forEach(recipe => {
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe');
            recipeDiv.innerHTML += `<p><b>ID:</b> ${recipe.id}</p>`;
            recipeDiv.innerHTML += `<h2>${recipe.name}</h2>`;

            const ingTitle = document.createElement('h3');
            ingTitle.innerText = 'Ingredients:';
            recipeDiv.appendChild(ingTitle);

            const ingList = document.createElement('ul');
            recipe.ingredients.forEach(ing => {
                const li = document.createElement('li');
                li.innerText = ing;
                ingList.appendChild(li);
            });
            recipeDiv.appendChild(ingList);

            const instTitle = document.createElement('h3');
            instTitle.innerText = 'Instructions:';
            recipeDiv.appendChild(instTitle);

            const instList = document.createElement('ol');
            recipe.instructions.forEach(step => {
                const li = document.createElement('li');
                li.innerText = step;
                instList.appendChild(li);
            });
            recipeDiv.appendChild(instList);

            recipeDiv.innerHTML += `<p><b>Prep Time:</b> ${recipe.prepTimeMinutes} minutes</p>`;
            recipeDiv.innerHTML += `<p><b>Cook Time:</b> ${recipe.cookTimeMinutes} minutes</p>`;
            recipeDiv.innerHTML += `<p><b>Servings:</b> ${recipe.servings}</p>`;
            recipeDiv.innerHTML += `<p><b>Difficulty:</b> ${recipe.difficulty}</p>`;
            recipeDiv.innerHTML += `<p><b>Cuisine:</b> ${recipe.cuisine}</p>`;
            recipeDiv.innerHTML += `<p><b>Calories per Serving:</b> ${recipe.caloriesPerServing}</p>`;

            if (recipe.tags?.length) {
                recipeDiv.innerHTML += `<p><b>Tags:</b> ${recipe.tags.join(', ')}</p>`;
            }

            recipeDiv.innerHTML += `<p><b>User ID:</b> ${recipe.userId}</p>`;
            recipeDiv.innerHTML += `<img src="${recipe.image}" alt="${recipe.name}">`;
            recipeDiv.innerHTML += `<p><b>Rating:</b> ${recipe.rating}</p>`;
            recipeDiv.innerHTML += `<p><b>Review Count:</b> ${recipe.reviewCount}</p>`;

            if (recipe.mealType?.length) {
                recipeDiv.innerHTML += `<p><b>Meal Type:</b> ${recipe.mealType.join(', ')}</p>`;
            }

            output.appendChild(recipeDiv);
        });
    })
    .catch(error => {
        console.error('Error fetching recipes:', error);
    });
