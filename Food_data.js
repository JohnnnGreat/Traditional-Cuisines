// An array of arrays of Nigerian cuisines and their details
var cuisines = [
    [
      // A sub-array for each cuisine
      
      {
        // A sub-array for Rice category
        name: "Jollof Rice",
        description: "A spicy rice dish cooked with tomato sauce and other seasonings",
        id: 1,
        image: "jollof-rice.jpg",
        method: "Boil the rice, fry the tomato sauce, mix them together and simmer until done",
        nutrition: "Calories: 296, Protein: 6.6g, Carbs: 55.8g, Fat: 4.4g",
        ingredients: ["Rice", "Tomato paste", "Onion", "Garlic", "Ginger", "Vegetable oil", "Salt", "Curry powder", "Thyme", "Bay leaf", "Chicken stock", "Water"],
        category: "Rice",
        time: "45 minutes"
      },
      {
        name: "Fried Rice",
        description: "A rice dish stir-fried with mixed vegetables and meat",
        id: 2,
        image: "fried-rice.jpg",
        method: "Parboil the rice, fry the vegetables and meat, mix them with the rice and seasonings",
        nutrition: "Calories: 333, Protein: 9.9g, Carbs: 53.4g, Fat: 9.4g",
        ingredients: ["Rice", "Carrot", "Green beans", "Green peas", "Sweet corn", "Liver", "Chicken", "Vegetable oil", "Salt", "Curry powder", "Thyme", "Garlic", "Onion", "Chicken stock", "Water"],
        category: "Rice",
        time: "60 minutes"
      },
      {
        name: "Coconut Rice",
        description: "A rice dish cooked with coconut milk and spices",
        id: 3,
        image: "coconut-rice.jpg",
        method: "Extract the coconut milk, boil the rice with the milk and seasonings, add more water if needed",
        nutrition: "Calories: 403, Protein: 6.8g, Carbs: 68.9g, Fat: 11.9g",
        ingredients: ["Rice", "Coconut", "Onion", "Garlic", "Ginger", "Vegetable oil", "Salt", "Curry powder", "Thyme", "Bay leaf", "Water"],
        category: "Rice",
        time: "50 minutes"
      },
      {
        name: "Ofada Rice",
        description: "A local rice dish served with a spicy pepper sauce",
        id: 4,
        image: "ofada-rice.jpg",
        method: "Wash and cook the rice, blend the peppers, fry the sauce with locust beans and other ingredients",
        nutrition: "Calories: 378, Protein: 8.9g, Carbs: 64.4g, Fat: 9.1g",
        ingredients: ["Ofada rice", "Red bell pepper", "Scotch bonnet pepper", "Onion", "Locust beans", "Palm oil", "Salt", "Crayfish", "Beef", "Water"],
        category: "Rice",
        time: "90 minutes"
      },
      {
        name: "Tuwo Shinkafa",
        description: "A soft rice pudding eaten with soup",
        id: 5,
        image: "tuwo-shinkafa.jpg",
        method: "Soak and cook the rice until soft, mash it into a smooth paste, shape it into balls and serve with soup",
        nutrition: "Calories: 216, Protein: 4.3g, Carbs: 47.6g, Fat: 0.4g",
        ingredients: ["Tuwo rice", "Water", "Salt"],
        category: "Rice",
        time: "40 minutes"
      },
        // A sub-array for Soup category
      {
        name: "Egusi Soup",
        description: "A thick soup made from melon seeds and vegetables",
        id: 6,
        image: "egusi-soup.jpg",
        method: "Grind the egusi seeds, fry the sauce with palm oil and other ingredients, add water and vegetables and cook until done",
        nutrition: "Calories: 394, Protein: 18.9g, Carbs: 17.1g, Fat: 29.4g",
        ingredients: ["Egusi seeds", "Palm oil", "Onion", "Garlic", "Ginger", "Salt", "Stock cubes", "Crayfish", "Beef", "Dry fish", "Water", "Ugu leaves", "Bitter leaves"],
        category: "Soup",
        time: "60 minutes"
      },
      {
        name: "Okra Soup",
        description: "A slimy soup made from okra and vegetables",
        id: 7,
        image: "okra-soup.jpg",
        method: "Chop the okra, boil the meat and fish, add the okra and other ingredients and cook until done",
        nutrition: "Calories: 121, Protein: 9.7g, Carbs: 9.2g, Fat: 4.5g",
        ingredients: ["Okra", "Palm oil", "Onion", "Salt", "Stock cubes", "Crayfish", "Beef", "Dry fish", "Water", "Ugu leaves"],
        category: "Soup",
        time: "45 minutes"
      },
      {
        name: "Efo Riro",
        description: "A vegetable soup made with spinach and assorted meat",
        id: 8,
        image: "efo-riro.jpg",
        method: "Blanch and chop the spinach, boil the meat and fish, fry the sauce with palm oil and other ingredients, add the spinach and cook until done",
        nutrition: "Calories: 290, Protein: 23.4g, Carbs: 9.8g, Fat: 18.1g",
        ingredients: ["Spinach", "Palm oil", "Onion", "Garlic", "Ginger", "Salt", "Stock cubes", "Crayfish", "Beef", "Shaki", "Ponmo", "Dry fish", "Water"],
        category: "Soup",
        time: "75 minutes"
      },
      {
        name: "Ogbono Soup",
        description: "A slimy soup made from ogbono seeds and vegetables",
        id: 9,
        image: "ogbono-soup.jpg",
        method: "Grind the ogbono seeds, boil the meat and fish, add the ogbono and other ingredients and cook until done",
        nutrition: "Calories: 358, Protein: 19.6g, Carbs: 15.9g, Fat: 25.1g",
        ingredients: ["Ogbono seeds", "Palm oil", "Onion", "Salt", "Stock cubes", "Crayfish", "Beef", "Dry fish", "Water", "Ugu leaves", "Bitter leaves"],
        category: "Soup",
        time: "60 minutes"
      },
      {
        name: "Edikang Ikong",
        description: "A vegetable soup made with pumpkin leaves and water leaves",
        id: 10,
        image: "edikang-ikong.jpg",
        method: "Wash and chop the leaves, boil the meat and fish, add the leaves and other ingredients and cook until done",
        nutrition: "Calories: 271, Protein: 17.8g, Carbs: 11.6g, Fat: 18.4g",
        ingredients: ["Pumpkin leaves", "Water leaves", "Palm oil", "Onion", "Salt", "Stock cubes", "Crayfish", "Beef", "Dry fish", "Periwinkle", "Water"],
        category: "Soup",
        time: "90 minutes"
      },
      // A sub-array for snacks category
      {
        name: "Puff Puff",
        description: "A deep-fried dough ball sprinkled with sugar",
        id: 11,
        image: "puff-puff.jpg",
        method: "Mix the flour, yeast, sugar and water into a batter, let it rise, scoop and fry in hot oil, drain and sprinkle with sugar",
        nutrition: "Calories: 103, Protein: 1.6g, Carbs: 15.9g, Fat: 3.7g",
        ingredients: ["Flour", "Yeast", "Sugar", "Water", "Oil"],
        category: "Snacks",
        time: "60 minutes"
      },
      {
        name: "Chin Chin",
        description: "A crunchy fried pastry cut into small pieces",
        id: 12,
        image: "chin-chin.jpg",
        method: "Mix the flour, butter, sugar, milk, eggs and nutmeg into a dough, roll and cut into small pieces, fry in hot oil and drain",
        nutrition: "Calories: 58, Protein: 0.8g, Carbs: 7.4g, Fat: 2.8g",
        ingredients: ["Flour", "Butter", "Sugar", "Milk", "Eggs", "Nutmeg", "Oil"],
        category: "Snacks",
        time: "90 minutes"
      },
      {
        name: "Buns",
        description: "A round fried pastry made with flour and eggs",
        id: 13,
        image: "buns.jpg",
        method: "Mix the flour, baking powder, sugar, eggs and water into a thick batter, scoop and fry in hot oil, drain and serve",
        nutrition: "Calories: 121, Protein: 2.4g, Carbs: 18.6g, Fat: 4.1g",
        ingredients: ["Flour", "Baking powder", "Sugar", "Eggs", "Water", "Oil"],
        category: "Snacks",
        time: "45 minutes"
      },
      {
        name: "Samosa",
        description: "A triangular fried pastry filled with minced meat and vegetables",
        id: 14,
        image: "samosa.jpg",
        method: "Mix the flour, salt and oil into a dough, divide and roll into circles, cut into halves, fold into cones, fill with cooked meat and vegetables, seal and fry in hot oil, drain and serve",
        nutrition: "Calories: 91, Protein: 3.5g, Carbs: 10.5g, Fat: 4.1g",
        ingredients: ["Flour", "Salt", "Oil", "Minced meat", "Onion", "Carrot", "Green peas", "Curry powder", "Thyme", "Stock cubes", "Water"],
        category: "Snacks",
        time: "120 minutes"
      },
      {
        name: "Plantain Chips",
        description: "A crispy snack made from sliced ripe or unripe plantains",
        id: 15,
        image: "plantain-chips.jpg",
        method: "Peel and slice the plantains, sprinkle with salt, fry in hot oil, drain and serve",
        nutrition: "Calories: 152, Protein: 1.3g, Carbs: 32.2g, Fat: 2.5g",
        ingredients: ["Plantains", "Salt", "Oil"],
        category: "Snacks",
        time: "30 minutes"
      },

      // A sub-array for beans category
      {
        name: "Beans Porridge",
        description: "A savory dish made from cooked beans and palm oil",
        id: 16,
        image: "beans-porridge.jpg",
        method: "Soak and cook the beans, add the palm oil, onion, salt, stock cubes, crayfish and pepper and cook until done, add the plantain and cook until soft",
        nutrition: "Calories: 378, Protein: 18.4g, Carbs: 49.9g, Fat: 13.1g",
        ingredients: ["Beans", "Palm oil", "Onion", "Salt", "Stock cubes", "Crayfish", "Pepper", "Plantain", "Water"],
        category: "Beans",
        time: "90 minutes"
      },
      {
        name: "Moi Moi",
        description: "A steamed pudding made from blended beans and spices",
        id: 17,
        image: "moi-moi.jpg",
        method: "Soak and peel the beans, blend with the onion, pepper, crayfish and water, add the salt, stock cubes and vegetable oil and mix well, pour into containers, add the eggs and fish, cover and steam until done",
        nutrition: "Calories: 267, Protein: 14.8g, Carbs: 28.9g, Fat: 11.1g",
        ingredients: ["Beans", "Onion", "Pepper", "Crayfish", "Salt", "Stock cubes", "Vegetable oil", "Water", "Eggs", "Fish"],
        category: "Beans",
        time: "120 minutes"
      },
      {
        name: "Akara",
        description: "A deep-fried fritter made from blended beans and spices",
        id: 18,
        image: "akara.jpg",
        method: "Soak and peel the beans, blend with the onion, pepper and water, add the salt and baking powder and mix well, scoop and fry in hot oil, drain and serve",
        nutrition: "Calories: 117, Protein: 5.2g, Carbs: 13.4g, Fat: 4.9g",
        ingredients: ["Beans", "Onion", "Pepper", "Salt", "Baking powder", "Water", "Oil"],
        category: "Beans",
        time: "90 minutes"
      },

      // A sub-array for swallow category
    {
        name: "Eba",
        description: "A stiff dough made from garri and hot water",
        id: 16,
        image: "eba.jpg",
        method: "Boil water in a pot, sprinkle garri into the water and stir until well combined, mold into balls and serve with soup",
        nutrition: "Calories: 330, Protein: 1.5g, Carbs: 77.5g, Fat: 0.4g",
        ingredients: ["Garri", "Water"],
        category: "Swallow",
        time: "15 minutes"
      },
      {
        name: "Amala",
        description: "A dark brown dough made from yam flour and hot water",
        id: 17,
        image: "amala.jpg",
        method: "Boil water in a pot, add yam flour and stir until well combined, mold into balls and serve with soup",
        nutrition: "Calories: 352, Protein: 1.9g, Carbs: 82.8g, Fat: 0.5g",
        ingredients: ["Yam flour", "Water"],
        category: "Swallow",
        time: "15 minutes"
      },
      {
        name: "Fufu",
        description: "A soft dough made from cassava and hot water",
        id: 18,
        image: "fufu.jpg",
        method: "Boil water in a pot, add cassava flour and stir until well combined, mold into balls and serve with soup",
        nutrition: "Calories: 267, Protein: 1.4g, Carbs: 64.3g, Fat: 0.3g",
        ingredients: ["Cassava flour", "Water"],
        category: "Swallow",
        time: "15 minutes"
      },
      {
        name: "Pounded Yam",
        description: "A smooth dough made from boiled yam and hot water",
        id: 19,
        image: "pounded-yam.jpg",
        method: "Peel and cut the yam into chunks, boil until soft, pound in a mortar or blender with hot water until smooth, mold into balls and serve with soup",
        nutrition: "Calories: 344, Protein: 4.7g, Carbs: 80.1g, Fat: 0.6g",
        ingredients: ["Yam", "Water"],
        category: "Swallow",
        time: "60 minutes"
      },
      {
        name: "Semo",
        description: "A light brown dough made from semolina and hot water",
        id: 20,
        image: "semo.jpg",
        method: "Boil water in a pot, add semolina and stir until well combined, mold into balls and serve with soup",
        nutrition: "Calories: 360, Protein: 9.2g, Carbs: 79.2g, Fat: 0.7g",
        ingredients: ["Semolina", "Water"],
        category: "Swallow",
        time: "15 minutes"
      },

       // A sub-array for stew category
    {
        name: "Tomato Stew",
        description: "A red sauce made from tomato paste and spices",
        id: 21,
        image: "tomato-stew.jpg",
        method: "Blend the tomatoes, peppers and onion, fry the sauce with vegetable oil and other ingredients, add water and meat or fish and cook until done",
        nutrition: "Calories: 149, Protein: 6.1g, Carbs: 9.9g, Fat: 9.8g",
        ingredients: ["Tomato paste", "Red bell pepper", "Scotch bonnet pepper", "Onion", "Vegetable oil", "Salt", "Curry powder", "Thyme", "Bay leaf", "Stock cubes", "Water", "Chicken", "Beef", "Fish"],
        category: "Stew",
        time: "60 minutes"
      },
      {
        name: "Banga Stew",
        description: "A yellow sauce made from palm fruit extract and spices",
        id: 22,
        image: "banga-stew.jpg",
        method: "Boil and extract the palm fruit juice, boil the juice with onion and other ingredients, add water and meat or fish and cook until done",
        nutrition: "Calories: 282, Protein: 9.4g, Carbs: 11.2g, Fat: 22.5g",
        ingredients: ["Palm fruits", "Onion", "Salt", "Stock cubes", "Crayfish", "Dry fish", "Periwinkle", "Water", "Beef", "Chicken", "Fish"],
        category: "Stew",
        time: "90 minutes"
      },
      {
        name: "Egusi Ijebu",
        description: "A light brown sauce made from egusi seeds and spices",
        id: 23,
        image: "egusi-ijebu.jpg",
        method: "Grind the egusi seeds, boil the water with onion and other ingredients, add the egusi and meat or fish and cook until done",
        nutrition: "Calories: 270, Protein: 14.3g, Carbs: 12.4g, Fat: 19.1g",
        ingredients: ["Egusi seeds", "Water", "Onion", "Salt", "Stock cubes", "Crayfish", "Dry fish", "Beef", "Chicken", "Fish"],
        category: "Stew",
        time: "45 minutes"
      },
      {
        name: "Ayamase",
        description: "A green sauce made from green peppers and palm oil",
        id: 24,
        image: "ayamase.jpg",
        method: "Bleach the palm oil, blend the green peppers and onion, fry the sauce with the oil and other ingredients, add water and meat or fish and cook until done",
        nutrition: "Calories: 367, Protein: 14.7g, Carbs: 13.8g, Fat: 29.2g",
        ingredients: ["Palm oil", "Green bell pepper", "Green scotch bonnet pepper", "Onion", "Salt", "Stock cubes", "Crayfish", "Iru", "Water", "Beef", "Shaki", "Ponmo", "Dry fish"],
        category: "Stew",
        time: "75 minutes"
      },
      {
        name: "Ofe Akwu",
        description: "A red sauce made from palm fruit extract and spices",
        id: 25,
        image: "ofe-akwu.jpg",
        method: "Boil and extract the palm fruit juice, blend the tomatoes, peppers and onion, fry the sauce with the juice and other ingredients, add water and meat or fish and cook until done",
        nutrition: "Calories: 314, Protein: 10.6g, Carbs: 13.4g, Fat: 24.9g",
        ingredients: ["Palm fruits", "Tomato paste", "Red bell pepper", "Scotch bonnet pepper", "Onion", "Salt", "Stock cubes", "Crayfish", "Dry fish", "Water", "Beef", "Chicken", "Fish"],
        category: "Stew",
        time: "90 minutes"
      },
   
      // A sub-array for salad category
      {
        name: "Coleslaw",
        description: "A cold salad made from shredded cabbage and carrot mixed with mayonnaise",
        id: 26,
        image: "coleslaw.jpg",
        method: "Wash and shred the cabbage and carrot, mix with mayonnaise and sugar, refrigerate and serve",
        nutrition: "Calories: 268, Protein: 1.8g, Carbs: 15.6g, Fat: 22.4g",
        ingredients: ["Cabbage", "Carrot", "Mayonnaise", "Sugar"],
        category: "Salad",
        time: "15 minutes"
      },
      {
        name: "Potato Salad",
        description: "A cold salad made from boiled potatoes mixed with mayonnaise and other ingredients",
        id: 27,
        image: "potato-salad.jpg",
        method: "Peel and dice the potatoes, boil until soft, drain and cool, mix with mayonnaise, onion, celery, mustard, vinegar, salt and pepper, refrigerate and serve",
        nutrition: "Calories: 358, Protein: 4.5g, Carbs: 40.2g, Fat: 20.2g",
        ingredients: ["Potatoes", "Mayonnaise", "Onion", "Celery", "Mustard", "Vinegar", "Salt", "Pepper"],
        category: "Salad",
        time: "45 minutes"
      },
      {
        name: "Fruit Salad",
        description: "A cold salad made from assorted fruits mixed with yogurt or cream",
        id: 28,
        image: "fruit-salad.jpg",
        method: "Wash and chop the fruits, mix with yogurt or cream and sugar, refrigerate and serve",
        nutrition: "Calories: 124, Protein: 2.1g, Carbs: 25.9g, Fat: 1.7g",
        ingredients: ["Banana", "Apple", "Orange", "Pineapple", "Watermelon", "Yogurt", "Sugar"],
        category: "Salad",
        time: "15 minutes"
      },
      {
        name: "Chicken Salad",
        description: "A cold salad made from shredded chicken mixed with mayonnaise and other ingredients",
        id: 29,
        image: "chicken-salad.jpg",
        method: "Boil and shred the chicken, mix with mayonnaise, onion, celery, parsley, lemon juice, salt and pepper, refrigerate and serve",
        nutrition: "Calories: 417, Protein: 25.4g, Carbs: 3.4g, Fat: 34.1g",
        ingredients: ["Chicken", "Mayonnaise", "Onion", "Celery", "Parsley", "Lemon juice", "Salt", "Pepper"],
        category: "Salad",
        time: "60 minutes"
      },
      {
        name: "Vegetable Salad",
        description: "A cold salad made from assorted vegetables mixed with salad dressing",
        id: 30,
        image: "vegetable-salad.jpg",
        method: "Wash and chop the vegetables, mix with salad dressing and salt, refrigerate and serve",
        nutrition: "Calories: 71, Protein: 1.9g, Carbs: 8.4g, Fat: 4g",
        ingredients: ["Lettuce", "Cucumber", "Tomato", "Carrot", "Green beans", "Sweet corn", "Salad dressing", "Salt"],
        category: "Salad",
        time: "15 minutes"
      },

      // A sub-array for breakfast dishes category
      {
        name: "Classic Nigerian Breakfast",
        description: "A dish that consists of akara/kosai (bean cake), fried yam and fried plantains with sauce",
        id: 31,
        image: "classic-nigerian-breakfast.jpg",
        method: "Soak and peel the beans, blend with onion, pepper and salt into a smooth paste, heat oil in a frying pan, scoop and fry the paste until golden brown, drain and set aside, peel and cut the yam and plantain into slices, fry in hot oil until golden and crisp, drain and set aside, make the sauce by frying onion, tomato paste, pepper, salt and stock cubes in oil, add water and simmer until thickened, serve the akara, yam and plantain with the sauce",
        nutrition: "Calories: 782, Protein: 19.2g, Carbs: 117.9g, Fat: 29.3g",
        ingredients: ["Beans", "Onion", "Pepper", "Salt", "Oil", "Yam", "Plantain", "Tomato paste", "Stock cubes", "Water"],
        category: "Breakfast Dishes",
        time: "90 minutes"
      },
      {
        name: "Nigerian 'Full English' Breakfast",
        description: "A Nigerian twist on a traditional Full English breakfast that features baked beans, sausage, bacon, eggs, toast and plantain",
        id: 32,
        image: "nigerian-full-english-breakfast.jpg",
        method: "Heat the baked beans in a pot, fry the sausage and bacon in a frying pan until cooked, drain and set aside, beat the eggs with salt, pepper and milk, scramble in a frying pan with butter, set aside, toast the bread slices in a toaster or oven, peel and cut the plantain into slices, fry in hot oil until golden and crisp, drain and set aside, serve the baked beans, sausage, bacon, eggs, toast and plantain on a large plate",
        nutrition: "Calories: 1014, Protein: 40.8g, Carbs: 115.6g, Fat: 46.2g",
        ingredients: ["Baked beans", "Sausage", "Bacon", "Eggs", "Salt", "Pepper", "Milk", "Butter", "Bread", "Plantain", "Oil"],
        category: "Breakfast Dishes",
        time: "45 minutes"
      },
      {
        name: "Ogi",
        description: "A fermented corn porridge eaten with milk and sugar",
        id: 33,
        image: "ogi.jpg",
        method: "Soak the corn in water for three days, wash and blend into a smooth paste, sieve the paste with a muslin cloth to separate the chaff from the liquid, pour the liquid into a pot and boil until thickened, stirring constantly, serve the ogi with milk and sugar",
        nutrition: "Calories: 113, Protein: 2.5g, Carbs: 24.1g, Fat: 0.7g",
        ingredients: ["Corn", "Water", "Milk", "Sugar"],
        category: "Breakfast Dishes",
        time: "72 hours"
      },
      {
        name: "Kunu",
        description: "A spicy drink made from millet, ginger and other spices",
        id: 34,
        image: "kunu.jpg",
        method: "Soak the millet in water for a day, wash and blend with ginger, cloves and water into a smooth paste, sieve the paste with a muslin cloth to separate the chaff from the liquid, pour the liquid into a pot and boil with sugar and salt, stirring constantly, cool and refrigerate the kunu, serve chilled",
        nutrition: "Calories: 88, Protein: 2.1g, Carbs: 18.6g, Fat: 0.6g",
        ingredients: ["Millet", "Water", "Ginger", "Cloves", "Sugar", "Salt"],
        category: "Breakfast Dishes",
        time: "24 hours"
      },
      {
        name: "Gari",
        description: "A granulated cassava product eaten with milk, sugar and groundnuts",
        id: 35,
        image: "gari.jpg",
        method: "Peel and grate the cassava, press out the liquid with a muslin cloth, spread the cassava on a large tray and dry in the sun, sieve the cassava to remove any lumps, store the gari in an airtight container, serve the gari with milk, sugar and groundnuts",
        nutrition: "Calories: 360, Protein: 1.8g, Carbs: 84.3g, Fat: 0.6g",
        ingredients: ["Cassava", "Milk", "Sugar", "Groundnuts"],
        category: "Breakfast Dishes",
        time: "48 hours"
      },
   
      // A sub-array for yam-based dishes category
      {
        name: "White Yam and Palm Oil Sauce",
        description: "A simple dish of boiled yam served with a sauce made from palm oil and other ingredients",
        id: 36,
        image: "white-yam-and-palm-oil-sauce.jpg",
        method: "Peel and cut the yam into chunks, boil in salted water until soft, drain and set aside, heat the palm oil in a pot, add the onion, pepper, salt, stock cubes, crayfish and locust beans, fry for a few minutes, add water and simmer until thickened, serve the yam with the sauce",
        nutrition: "Calories: 471, Protein: 5.9g, Carbs: 79.9g, Fat: 15.8g",
        ingredients: ["Yam", "Water", "Salt", "Palm oil", "Onion", "Pepper", "Stock cubes", "Crayfish", "Locust beans"],
        category: "Yam-based Dishes",
        time: "45 minutes"
      },
      {
        name: "Yam Pepper Soup",
        description: "A spicy soup made from yam and assorted meat",
        id: 37,
        image: "yam-pepper-soup.jpg",
        method: "Peel and cut the yam into chunks, wash and season the meat with salt, pepper and onion, boil in water until tender, add the yam and more water if needed, add the pepper soup spice, scent leaves and salt, cook until the yam is soft, serve hot",
        nutrition: "Calories: 398, Protein: 28.7g, Carbs: 46.9g, Fat: 11.4g",
        ingredients: ["Yam", "Water", "Salt", "Pepper", "Onion", "Beef", "Goat meat", "Chicken", "Pepper soup spice", "Scent leaves"],
        category: "Yam-based Dishes",
        time: "60 minutes"
      },
      {
        name: "Yam and Egg Sauce",
        description: "A dish of boiled yam served with a sauce made from eggs and tomatoes",
        id: 38,
        image: "yam-and-egg-sauce.jpg",
        method: "Peel and cut the yam into chunks, boil in salted water until soft, drain and set aside, beat the eggs with salt and pepper, heat oil in a frying pan, fry the onion, tomato and pepper for a few minutes, add the eggs and scramble, serve the yam with the egg sauce",
        nutrition: "Calories: 394, Protein: 12.8g, Carbs: 65.4g, Fat: 10.3g",
        ingredients: ["Yam", "Water", "Salt", "Eggs", "Pepper", "Oil", "Onion", "Tomato"],
        category: "Yam-based Dishes",
        time: "45 minutes"
      },

    ],
  ];
  