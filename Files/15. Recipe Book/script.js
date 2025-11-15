 // Sample recipe data
        const sampleRecipes = [
            {
                id: 1,
                name: "Classic Pancakes",
                category: "breakfast",
                difficulty: "Easy",
                time: 20,
                servings: 4,
                description: "Fluffy, golden pancakes perfect for a weekend breakfast. Serve with maple syrup and fresh berries.",
                image: "https://picsum.photos/seed/pancakes/600/400.jpg",
                ingredients: [
                    "2 cups all-purpose flour",
                    "2 tablespoons sugar",
                    "2 teaspoons baking powder",
                    "1 teaspoon salt",
                    "2 eggs",
                    "1¾ cups milk",
                    "¼ cup melted butter"
                ],
                instructions: [
                    "Mix dry ingredients in a large bowl.",
                    "In another bowl, whisk eggs, milk, and melted butter.",
                    "Pour wet ingredients into dry ingredients and mix until just combined.",
                    "Heat a griddle or pan over medium heat and lightly grease.",
                    "Pour ¼ cup of batter for each pancake.",
                    "Cook until bubbles form and edges are set, then flip.",
                    "Cook until golden brown on both sides.",
                    "Serve hot with your favorite toppings."
                ]
            },
            {
                id: 2,
                name: "Mediterranean Quinoa Bowl",
                category: "lunch",
                difficulty: "Medium",
                time: 30,
                servings: 2,
                description: "A nutritious and colorful bowl packed with Mediterranean flavors. Perfect for a healthy lunch.",
                image: "https://picsum.photos/seed/quinoabowl/600/400.jpg",
                ingredients: [
                    "1 cup quinoa",
                    "2 cups vegetable broth",
                    "1 cucumber, diced",
                    "1 cup cherry tomatoes, halved",
                    "½ red onion, thinly sliced",
                    "½ cup kalamata olives",
                    "½ cup feta cheese, crumbled",
                    "¼ cup fresh parsley, chopped",
                    "3 tablespoons olive oil",
                    "2 tablespoons lemon juice",
                    "1 clove garlic, minced"
                ],
                instructions: [
                    "Rinse quinoa under cold water until water runs clear.",
                    "In a saucepan, bring vegetable broth to a boil.",
                    "Add quinoa, reduce heat, cover, and simmer for 15 minutes.",
                    "Remove from heat and let stand for 5 minutes, then fluff with a fork.",
                    "In a small bowl, whisk together olive oil, lemon juice, and garlic.",
                    "In a large bowl, combine cooked quinoa, cucumber, tomatoes, onion, olives, and parsley.",
                    "Drizzle with dressing and toss to combine.",
                    "Top with crumbled feta cheese before serving."
                ]
            },
            {
                id: 3,
                name: "Grilled Salmon with Asparagus",
                category: "dinner",
                difficulty: "Medium",
                time: 25,
                servings: 4,
                description: "Perfectly grilled salmon with tender asparagus. A healthy and elegant dinner option.",
                image: "https://picsum.photos/seed/salmon/600/400.jpg",
                ingredients: [
                    "4 salmon fillets",
                    "1 bunch asparagus, trimmed",
                    "3 tablespoons olive oil",
                    "2 cloves garlic, minced",
                    "1 lemon, sliced",
                    "1 teaspoon dried dill",
                    "Salt and pepper to taste"
                ],
                instructions: [
                    "Preheat grill to medium-high heat.",
                    "Toss asparagus with 1 tablespoon olive oil, salt, and pepper.",
                    "Mix remaining olive oil with garlic and dill.",
                    "Brush salmon fillets with oil mixture and season with salt and pepper.",
                    "Place salmon on grill, skin-side down, and grill for 4-5 minutes.",
                    "Flip salmon and place lemon slices on top.",
                    "Add asparagus to grill and cook for another 4-5 minutes.",
                    "Remove from grill when salmon is cooked through and asparagus is tender-crisp."
                ]
            },
            {
                id: 4,
                name: "Chocolate Lava Cake",
                category: "dessert",
                difficulty: "Hard",
                time: 25,
                servings: 4,
                description: "Decadent chocolate cakes with a warm, gooey center. The perfect indulgent dessert.",
                image: "https://picsum.photos/seed/lavacake/600/400.jpg",
                ingredients: [
                    "4 ounces dark chocolate",
                    "4 tablespoons butter",
                    "2 eggs",
                    "2 egg yolks",
                    "¼ cup sugar",
                    "2 tablespoons all-purpose flour",
                    "Pinch of salt",
                    "Powdered sugar for dusting",
                    "Vanilla ice cream for serving (optional)"
                ],
                instructions: [
                    "Preheat oven to 425°F (220°C). Butter and flour 4 ramekins.",
                    "Melt chocolate and butter together in a double boiler or microwave.",
                    "In a bowl, whisk eggs, egg yolks, and sugar until thick and pale.",
                    "Fold chocolate mixture into egg mixture.",
                    "Add flour and salt, and gently fold until just combined.",
                    "Divide batter among prepared ramekins.",
                    "Bake for 12-14 minutes until edges are firm but center jiggles slightly.",
                    "Let cool for 1 minute, then invert onto plates.",
                    "Dust with powdered sugar and serve immediately with ice cream."
                ]
            },
            {
                id: 5,
                name: "Avocado Toast with Poached Egg",
                category: "breakfast",
                difficulty: "Easy",
                time: 15,
                servings: 2,
                description: "Creamy avocado on crispy toast topped with a perfectly poached egg. A trendy and nutritious breakfast.",
                image: "https://picsum.photos/seed/avotoast/600/400.jpg",
                ingredients: [
                    "2 slices of whole grain bread",
                    "1 ripe avocado",
                    "2 eggs",
                    "1 tablespoon white vinegar",
                    "Salt and pepper to taste",
                    "Red pepper flakes (optional)",
                    "Lemon juice",
                    "Cherry tomatoes for garnish"
                ],
                instructions: [
                    "Toast bread slices until golden brown.",
                    "Mash avocado with a fork, add lemon juice, salt, and pepper.",
                    "Spread avocado mixture on toast.",
                    "Fill a saucepan with water and bring to a simmer.",
                    "Add vinegar to water.",
                    "Crack each egg into a small bowl, then gently slide into simmering water.",
                    "Poach for 3-4 minutes for a runny yolk.",
                    "Remove eggs with a slotted spoon and place on avocado toast.",
                    "Season with salt, pepper, and red pepper flakes.",
                    "Garnish with cherry tomatoes and serve immediately."
                ]
            },
            {
                id: 6,
                name: "Vegan Buddha Bowl",
                category: "vegan",
                difficulty: "Easy",
                time: 35,
                servings: 2,
                description: "A colorful, nutrient-packed bowl with a variety of vegetables, grains, and plant-based protein.",
                image: "https://picsum.photos/seed/buddhabowl/600/400.jpg",
                ingredients: [
                    "1 cup brown rice, cooked",
                    "1 cup chickpeas, roasted",
                    "1 sweet potato, cubed and roasted",
                    "2 cups kale, massaged",
                    "1 avocado, sliced",
                    "½ cup shredded carrots",
                    "¼ cup sesame seeds",
                    "For the dressing: 3 tablespoons tahini, 2 tablespoons lemon juice, 1 tablespoon maple syrup, water to thin"
                ],
                instructions: [
                    "Cook brown rice according to package instructions.",
                    "Toss chickpeas with olive oil and spices, then roast at 400°F for 20 minutes.",
                    "Cube sweet potato, toss with olive oil, and roast for 25-30 minutes until tender.",
                    "Massage kale with a little olive oil and lemon juice until wilted.",
                    "Prepare the dressing by whisking together tahini, lemon juice, maple syrup, and enough water to reach desired consistency.",
                    "Assemble bowls by dividing rice among bowls.",
                    "Top with roasted chickpeas, sweet potato, kale, avocado, and carrots.",
                    "Drizzle with tahini dressing and sprinkle with sesame seeds."
                ]
            },
            {
                id: 7,
                name: "Homemade Pizza Margherita",
                category: "dinner",
                difficulty: "Medium",
                time: 90,
                servings: 4,
                description: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil. A crowd-pleasing dinner option.",
                image: "https://picsum.photos/seed/pizza/600/400.jpg",
                ingredients: [
                    "For the dough: 3 cups flour, 1 cup warm water, 1 packet yeast, 2 teaspoons salt, 2 tablespoons olive oil",
                    "For the topping: 1 cup tomato sauce, 8 ounces fresh mozzarella, 1 cup fresh basil leaves, 2 tablespoons olive oil, Salt to taste"
                ],
                instructions: [
                    "Make the dough by mixing yeast with warm water and letting it foam for 5 minutes.",
                    "Combine flour and salt, then add yeast mixture and olive oil.",
                    "Knead for 10 minutes until smooth and elastic.",
                    "Place in an oiled bowl, cover, and let rise for 1 hour until doubled.",
                    "Preheat oven to 475°F (245°C). If using a pizza stone, place it in the oven while preheating.",
                    "Punch down dough and divide into 2-4 portions depending on desired pizza size.",
                    "Roll out each portion on a floured surface.",
                    "Spread tomato sauce, leaving a border for the crust.",
                    "Tear mozzarella and distribute over sauce.",
                    "Bake for 10-12 minutes until crust is golden and cheese is bubbly.",
                    "Remove from oven, top with fresh basil and drizzle with olive oil before serving."
                ]
            },
            {
                id: 8,
                name: "Green Smoothie Bowl",
                category: "beverage",
                difficulty: "Easy",
                time: 10,
                servings: 1,
                description: "A refreshing and nutritious smoothie bowl packed with greens, fruits, and superfoods.",
                image: "https://picsum.photos/seed/smoothiebowl/600/400.jpg",
                ingredients: [
                    "1 frozen banana",
                    "1 cup spinach",
                    "½ cup frozen mango",
                    "½ cup almond milk",
                    "1 tablespoon chia seeds",
                    "Toppings: granola, fresh berries, coconut flakes, hemp seeds"
                ],
                instructions: [
                    "Add frozen banana, spinach, frozen mango, and almond milk to a blender.",
                    "Blend until smooth and thick, adding more almond milk if needed to reach desired consistency.",
                    "Pour into a bowl.",
                    "Arrange toppings in rows or sections on top of the smoothie.",
                    "Sprinkle with chia seeds and hemp seeds.",
                    "Serve immediately with a spoon."
                ]
            }
        ];

        // Initialize the app
        let recipes = [];
        let currentFilter = 'all';
        let searchTerm = '';

        // Load recipes from localStorage or use sample data
        function loadRecipes() {
            const savedRecipes = localStorage.getItem('recipeBookRecipes');
            if (savedRecipes) {
                recipes = JSON.parse(savedRecipes);
            } else {
                recipes = [...sampleRecipes];
                saveRecipes();
            }
        }

        // Save recipes to localStorage
        function saveRecipes() {
            localStorage.setItem('recipeBookRecipes', JSON.stringify(recipes));
        }

        // Display recipes
        function displayRecipes(recipesToShow) {
            const recipeGrid = document.getElementById('recipeGrid');
            const noResults = document.getElementById('noResults');
            
            if (recipesToShow.length === 0) {
                recipeGrid.innerHTML = '';
                noResults.style.display = 'block';
                return;
            }
            
            noResults.style.display = 'none';
            recipeGrid.innerHTML = recipesToShow.map(recipe => `
                <div class="recipe-card" data-id="${recipe.id}">
                    <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
                    <div class="recipe-content">
                        <h3 class="recipe-title">${recipe.name}</h3>
                        <div class="recipe-meta">
                            <span><i class="far fa-clock"></i> ${recipe.time} min</span>
                            <span><i class="far fa-user"></i> ${recipe.servings} servings</span>
                        </div>
                        <span class="recipe-category">${recipe.category}</span>
                        <p class="recipe-description">${recipe.description}</p>
                    </div>
                </div>
            `).join('');
            
            // Add click event to recipe cards
            document.querySelectorAll('.recipe-card').forEach(card => {
                card.addEventListener('click', function() {
                    const recipeId = parseInt(this.dataset.id);
                    showRecipeDetails(recipeId);
                });
            });
        }

        // Filter recipes
        function filterRecipes() {
            let filteredRecipes = recipes;
            
            // Apply category filter
            if (currentFilter !== 'all') {
                filteredRecipes = filteredRecipes.filter(recipe => 
                    recipe.category === currentFilter
                );
            }
            
            // Apply search filter
            if (searchTerm) {
                filteredRecipes = filteredRecipes.filter(recipe => 
                    recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    recipe.category.toLowerCase().includes(searchTerm.toLowerCase())
                );
            }
            
            displayRecipes(filteredRecipes);
        }

        // Show recipe details in modal
        function showRecipeDetails(recipeId) {
            const recipe = recipes.find(r => r.id === recipeId);
            if (!recipe) return;
            
            document.getElementById('modalRecipeImage').src = recipe.image;
            document.getElementById('modalRecipeTitle').textContent = recipe.name;
            document.getElementById('modalRecipeTime').innerHTML = `<i class="far fa-clock"></i> ${recipe.time} minutes`;
            document.getElementById('modalRecipeServings').innerHTML = `<i class="far fa-user"></i> ${recipe.servings} servings`;
            document.getElementById('modalRecipeDifficulty').innerHTML = `<i class="fas fa-signal"></i> ${recipe.difficulty}`;
            
            // Display ingredients
            const ingredientsList = document.getElementById('modalIngredients');
            ingredientsList.innerHTML = recipe.ingredients.map(ingredient => 
                `<li>${ingredient}</li>`
            ).join('');
            
            // Display instructions
            const instructionsList = document.getElementById('modalInstructions');
            instructionsList.innerHTML = recipe.instructions.map(instruction => 
                `<li>${instruction}</li>`
            ).join('');
            
            // Show modal
            document.getElementById('recipeModal').style.display = 'block';
        }

        // Show toast notification
        function showToast(message, duration = 3000) {
            const toast = document.getElementById('toast');
            toast.textContent = message;
            toast.classList.add('show');
            
            setTimeout(() => {
                toast.classList.remove('show');
            }, duration);
        }

        // Get a random recipe
        function getRandomRecipe() {
            if (recipes.length === 0) return;
            
            const randomIndex = Math.floor(Math.random() * recipes.length);
            const randomRecipe = recipes[randomIndex];
            showRecipeDetails(randomRecipe.id);
        }

        // Add a new recipe
        function addRecipe(recipeData) {
            const newRecipe = {
                id: Date.now(),
                ...recipeData,
                image: `https://picsum.photos/seed/recipe${Date.now()}/600/400.jpg`,
                ingredients: recipeData.ingredients.split('\n').filter(i => i.trim()),
                instructions: recipeData.instructions.split('\n').filter(i => i.trim())
            };
            
            recipes.unshift(newRecipe);
            saveRecipes();
            filterRecipes();
            showToast('Recipe added successfully!');
        }

        // Event listeners
        document.addEventListener('DOMContentLoaded', function() {
            // Load recipes on page load
            loadRecipes();
            filterRecipes();
            
            // Search functionality
            document.getElementById('searchInput').addEventListener('input', function() {
                searchTerm = this.value;
                filterRecipes();
            });
            
            // Category filter buttons
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    // Update active state
                    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Apply filter
                    currentFilter = this.dataset.category;
                    filterRecipes();
                });
            });
            
            // Close modal buttons
            document.getElementById('closeModal').addEventListener('click', function() {
                document.getElementById('recipeModal').style.display = 'none';
            });
            
            document.getElementById('closeAddModal').addEventListener('click', function() {
                document.getElementById('addRecipeModal').style.display = 'none';
            });
            
            // Add recipe button
            document.getElementById('addRecipeBtn').addEventListener('click', function() {
                document.getElementById('addRecipeModal').style.display = 'block';
            });
            
            // Random recipe button
            document.getElementById('randomRecipeBtn').addEventListener('click', getRandomRecipe);
            
            // Add recipe form submission
            document.getElementById('addRecipeForm').addEventListener('submit', function(e) {
                e.preventDefault();
                
                const recipeData = {
                    name: document.getElementById('recipeName').value,
                    category: document.getElementById('recipeCategory').value,
                    difficulty: document.getElementById('recipeDifficulty').value,
                    time: parseInt(document.getElementById('recipeTime').value),
                    servings: parseInt(document.getElementById('recipeServings').value),
                    description: document.getElementById('recipeDescription').value,
                    ingredients: document.getElementById('recipeIngredients').value,
                    instructions: document.getElementById('recipeInstructions').value
                };
                
                addRecipe(recipeData);
                
                // Reset form and close modal
                this.reset();
                document.getElementById('addRecipeModal').style.display = 'none';
            });
            
            // Close modals when clicking outside
            window.addEventListener('click', function(event) {
                if (event.target.classList.contains('modal')) {
                    event.target.style.display = 'none';
                }
            });
        });
