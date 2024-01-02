// An array of arrays of Nigerian cuisines and their details
const foodData = [
  // A sub-array for each cuisine

  {
    // A sub-array for Rice category
    name: "Jollof Rice",
    description:
      "A spicy rice dish cooked with tomato sauce and other seasonings",
    id: 1,
    image:
      "https://grandbaby-cakes.com/wp-content/uploads/2023/04/jollof-rice-recipe-23.jpg",
    method:
      "Boil the rice, fry the tomato sauce, mix them together and simmer until done",
    nutrition: "Calories: 296g, Protein: 6.6g, Carbs: 55.8g, Fat: 4.4g",

    ingredients: [
      "Rice",
      "Tomato paste",
      "Onion",
      "Garlic",
      "Ginger",
      "Vegetable oil",
      "Salt",
      "Curry powder",
      "Thyme",
      "Bay leaf",
      "Chicken stock",
      "Water",
    ],
    category: "Rice",
    time: "45 minutes",
  },
  {
    name: "Fried Rice",
    description: "A rice dish stir-fried with mixed vegetables and meat",
    id: 2,
    image:
      "https://img-global.cpcdn.com/recipes/5da646cc1c73a947/1200x630cq70/photo.jpg",
    method:
      "Parboil the rice, fry the vegetables and meat, mix them with the rice and seasonings",
    nutrition: "Calories: 333, Protein: 9.9g, Carbs: 53.4g, Fat: 9.4g",
    ingredients: [
      "Rice",
      "Carrot",
      "Green beans",
      "Green peas",
      "Sweet corn",
      "Liver",
      "Chicken",
      "Vegetable oil",
      "Salt",
      "Curry powder",
      "Thyme",
      "Garlic",
      "Onion",
      "Chicken stock",
      "Water",
    ],
    category: "Rice",
    time: "60 minutes",
  },
  {
    name: "Coconut Rice",
    description: "A rice dish cooked with coconut milk and spices",
    id: 3,
    image:
      "https://www.foodiesonline.com.ng/mobileapp/wp-content/uploads/2019/10/Coconut-rice-600.jpg",
    method:
      "Extract the coconut milk, boil the rice with the milk and seasonings, add more water if needed",
    nutrition: "Calories: 403, Protein: 6.8g, Carbs: 68.9g, Fat: 11.9g",
    ingredients: [
      "Rice",
      "Coconut",
      "Onion",
      "Garlic",
      "Ginger",
      "Vegetable oil",
      "Salt",
      "Curry powder",
      "Thyme",
      "Bay leaf",
      "Water",
    ],
    category: "Rice",
    time: "50 minutes",
  },
  {
    name: "Ofada Rice",
    description: "A local rice dish served with a spicy pepper sauce",
    id: 4,
    image:
      "https://mamajuli.com.ng/mj/wp-content/uploads/2023/03/OFADA-RICE.jpg",
    method:
      "Wash and cook the rice, blend the peppers, fry the sauce with locust beans and other ingredients",
    nutrition: "Calories: 378, Protein: 8.9g, Carbs: 64.4g, Fat: 9.1g",
    ingredients: [
      "Ofada rice",
      "Red bell pepper",
      "Scotch bonnet pepper",
      "Onion",
      "Locust beans",
      "Palm oil",
      "Salt",
      "Crayfish",
      "Beef",
      "Water",
    ],
    category: "Rice",
    time: "90 minutes",
  },
  {
    name: "Tuwo Shinkafa",
    description: "A soft rice pudding eaten with soup",
    id: 5,
    image:
      "https://eatwellabi.com/wp-content/uploads/2022/10/Jamaican-chicken-soup-and-tuwo-15.jpg",
    method:
      "Soak and cook the rice until soft, mash it into a smooth paste, shape it into balls and serve with soup",
    nutrition: "Calories: 216, Protein: 4.3g, Carbs: 47.6g, Fat: 0.4g",
    ingredients: ["Tuwo rice", "Water", "Salt"],
    category: "Rice",
    time: "40 minutes",
  },
  // A sub-array for Soup category
  {
    name: "Egusi Soup",
    description: "A thick soup made from melon seeds and vegetables",
    id: 6,
    image: "https://allnigerianfoods.com/wp-content/uploads/egusi_soup-1.jpg",
    method:
      "Grind the egusi seeds, fry the sauce with palm oil and other ingredients, add water and vegetables and cook until done",
    nutrition: "Calories: 394, Protein: 18.9g, Carbs: 17.1g, Fat: 29.4g",
    ingredients: [
      "Egusi seeds",
      "Palm oil",
      "Onion",
      "Garlic",
      "Ginger",
      "Salt",
      "Stock cubes",
      "Crayfish",
      "Beef",
      "Dry fish",
      "Water",
      "Ugu leaves",
      "Bitter leaves",
    ],
    category: "Soup",
    time: "60 minutes",
  },
  {
    name: "Okra Soup",
    description: "A slimy soup made from okra and vegetables",
    id: 7,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/Okro_soup_with_shrimps%2Cdried_fish%2Ccow_leg_and_tail_with_meat.jpg",
    method:
      "Chop the okra, boil the meat and fish, add the okra and other ingredients and cook until done",
    nutrition: "Calories: 121, Protein: 9.7g, Carbs: 9.2g, Fat: 4.5g",
    ingredients: [
      "Okra",
      "Palm oil",
      "Onion",
      "Salt",
      "Stock cubes",
      "Crayfish",
      "Beef",
      "Dry fish",
      "Water",
      "Ugu leaves",
    ],
    category: "Soup",
    time: "45 minutes",
  },
  {
    name: "Efo Riro",
    description: "A vegetable soup made with spinach and assorted meat",
    id: 8,
    image:
      "https://lowcarbafrica.com/wp-content/uploads/2019/08/Efo-Riro-IG-2.jpg",
    method:
      "Blanch and chop the spinach, boil the meat and fish, fry the sauce with palm oil and other ingredients, add the spinach and cook until done",
    nutrition: "Calories: 290, Protein: 23.4g, Carbs: 9.8g, Fat: 18.1g",
    ingredients: [
      "Spinach",
      "Palm oil",
      "Onion",
      "Garlic",
      "Ginger",
      "Salt",
      "Stock cubes",
      "Crayfish",
      "Beef",
      "Shaki",
      "Ponmo",
      "Dry fish",
      "Water",
    ],
    category: "Soup",
    time: "75 minutes",
  },
  {
    name: "Ogbono Soup",
    description: "A slimy soup made from ogbono seeds and vegetables",
    id: 9,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/39/Ogbono_soup.jpg",
    method:
      "Grind the ogbono seeds, boil the meat and fish, add the ogbono and other ingredients and cook until done",
    nutrition: "Calories: 358, Protein: 19.6g, Carbs: 15.9g, Fat: 25.1g",
    ingredients: [
      "Ogbono seeds",
      "Palm oil",
      "Onion",
      "Salt",
      "Stock cubes",
      "Crayfish",
      "Beef",
      "Dry fish",
      "Water",
      "Ugu leaves",
      "Bitter leaves",
    ],
    category: "Soup",
    time: "60 minutes",
  },
  {
    name: "Edikang Ikong",
    description: "A vegetable soup made with pumpkin leaves and water leaves",
    id: 10,
    image:
      "https://img-global.cpcdn.com/recipes/1c040b78888229ac/1200x630cq70/photo.jpg",
    method:
      "Wash and chop the leaves, boil the meat and fish, add the leaves and other ingredients and cook until done",
    nutrition: "Calories: 271, Protein: 17.8g, Carbs: 11.6g, Fat: 18.4g",
    ingredients: [
      "Pumpkin leaves",
      "Water leaves",
      "Palm oil",
      "Onion",
      "Salt",
      "Stock cubes",
      "Crayfish",
      "Beef",
      "Dry fish",
      "Periwinkle",
      "Water",
    ],
    category: "Soup",
    time: "90 minutes",
  },
  // A sub-array for snacks category
  {
    name: "Puff Puff",
    description: "A deep-fried dough ball sprinkled with sugar",
    id: 11,
    image:
      "https://simshomekitchen.com/wp-content/uploads/2023/01/puffpuff-nigerian.png",
    method:
      "Mix the flour, yeast, sugar and water into a batter, let it rise, scoop and fry in hot oil, drain and sprinkle with sugar",
    nutrition: "Calories: 103, Protein: 1.6g, Carbs: 15.9g, Fat: 3.7g",
    ingredients: ["Flour", "Yeast", "Sugar", "Water", "Oil"],
    category: "Snacks",
    time: "60 minutes",
  },
  {
    name: "Chin Chin",
    description: "A crunchy fried pastry cut into small pieces",
    id: 12,
    image:
      "https://www.mydiasporakitchen.com/wp-content/uploads/2021/04/5B32CC1A-7B2F-4283-B22B-F90FADE6F21B.jpeg",
    method:
      "Mix the flour, butter, sugar, milk, eggs and nutmeg into a dough, roll and cut into small pieces, fry in hot oil and drain",
    nutrition: "Calories: 58, Protein: 0.8g, Carbs: 7.4g, Fat: 2.8g",
    ingredients: ["Flour", "Butter", "Sugar", "Milk", "Eggs", "Nutmeg", "Oil"],
    category: "Snacks",
    time: "90 minutes",
  },
  {
    name: "Buns",
    description: "A round fried pastry made with flour and eggs",
    id: 13,
    image:
      "https://kikifoodies.com/wp-content/uploads/2021/01/2BF00A23-4040-4C18-85E4-7296FE139AF3.jpeg",
    method:
      "Mix the flour, baking powder, sugar, eggs and water into a thick batter, scoop and fry in hot oil, drain and serve",
    nutrition: "Calories: 121, Protein: 2.4g, Carbs: 18.6g, Fat: 4.1g",
    ingredients: ["Flour", "Baking powder", "Sugar", "Eggs", "Water", "Oil"],
    category: "Snacks",
    time: "45 minutes",
  },
  {
    name: "Samosa",
    description:
      "A triangular fried pastry filled with minced meat and vegetables",
    id: 14,
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/samosa-recipe.jpg",
    method:
      "Mix the flour, salt and oil into a dough, divide and roll into circles, cut into halves, fold into cones, fill with cooked meat and vegetables, seal and fry in hot oil, drain and serve",
    nutrition: "Calories: 91, Protein: 3.5g, Carbs: 10.5g, Fat: 4.1g",
    ingredients: [
      "Flour",
      "Salt",
      "Oil",
      "Minced meat",
      "Onion",
      "Carrot",
      "Green peas",
      "Curry powder",
      "Thyme",
      "Stock cubes",
      "Water",
    ],
    category: "Snacks",
    time: "120 minutes",
  },
  {
    name: "Plantain Chips",
    description: "A crispy snack made from sliced ripe or unripe plantains",
    id: 15,
    image:
      "https://www.simplyrecipes.com/thmb/dL3xJOJZmemMQsWWGdcQCfPRPSk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Plantain-Chips-Lead-11-7fe8e7350d6e4626b2c89eb1a9791205.jpg",
    method:
      "Peel and slice the plantains, sprinkle with salt, fry in hot oil, drain and serve",
    nutrition: "Calories: 152, Protein: 1.3g, Carbs: 32.2g, Fat: 2.5g",
    ingredients: ["Plantains", "Salt", "Oil"],
    category: "Snacks",
    time: "30 minutes",
  },

  // A sub-array for beans category
  {
    name: "Beans Porridge",
    description: "A savory dish made from cooked beans and palm oil",
    id: 16,
    image:
      "https://daddysnom.com/wp-content/uploads/2020/07/honey-beans-porridge-e1593777988888.jpg",
    method:
      "Soak and cook the beans, add the palm oil, onion, salt, stock cubes, crayfish and pepper and cook until done, add the plantain and cook until soft",
    nutrition: "Calories: 378, Protein: 18.4g, Carbs: 49.9g, Fat: 13.1g",
    ingredients: [
      "Beans",
      "Palm oil",
      "Onion",
      "Salt",
      "Stock cubes",
      "Crayfish",
      "Pepper",
      "Plantain",
      "Water",
    ],
    category: "Beans",
    time: "90 minutes",
  },
  {
    name: "Moi Moi",
    description: "A steamed pudding made from blended beans and spices",
    id: 17,
    image: "https://sisijemimah.com/wp-content/uploads/2015/12/moimoi-3.jpg",
    method:
      "Soak and peel the beans, blend with the onion, pepper, crayfish and water, add the salt, stock cubes and vegetable oil and mix well, pour into containers, add the eggs and fish, cover and steam until done",
    nutrition: "Calories: 267, Protein: 14.8g, Carbs: 28.9g, Fat: 11.1g",
    ingredients: [
      "Beans",
      "Onion",
      "Pepper",
      "Crayfish",
      "Salt",
      "Stock cubes",
      "Vegetable oil",
      "Water",
      "Eggs",
      "Fish",
    ],
    category: "Beans",
    time: "120 minutes",
  },
  {
    name: "Akara",
    description: "A deep-fried fritter made from blended beans and spices",
    id: 18,
    image:
      "https://img-global.cpcdn.com/recipes/302b85cd971dc126/1200x630cq70/photo.jpg",
    method:
      "Soak and peel the beans, blend with the onion, pepper and water, add the salt and baking powder and mix well, scoop and fry in hot oil, drain and serve",
    nutrition: "Calories: 117, Protein: 5.2g, Carbs: 13.4g, Fat: 4.9g",
    ingredients: [
      "Beans",
      "Onion",
      "Pepper",
      "Salt",
      "Baking powder",
      "Water",
      "Oil",
    ],
    category: "Beans",
    time: "90 minutes",
  },

  // A sub-array for swallow category
  {
    name: "Eba",
    description: "A stiff dough made from garri and hot water",
    id: 16,
    image:
      "https://www.myactivekitchen.com/wp-content/uploads/2015/03/how-to-make-eba-food-nigerian-eba-img2-1-499x375.jpg",
    method:
      "Boil water in a pot, sprinkle garri into the water and stir until well combined, mold into balls and serve with soup",
    nutrition: "Calories: 330, Protein: 1.5g, Carbs: 77.5g, Fat: 0.4g",
    ingredients: ["Garri", "Water"],
    category: "Swallow",
    time: "15 minutes",
  },
  {
    name: "Amala",
    description: "A dark brown dough made from yam flour and hot water",
    id: 17,
    image:
      "https://ocdn.eu/images/pulscms/ZDk7MDA_/e62f2ef3398f7020dcc99c210678791f.jpg",
    method:
      "Boil water in a pot, add yam flour and stir until well combined, mold into balls and serve with soup",
    nutrition: "Calories: 352, Protein: 1.9g, Carbs: 82.8g, Fat: 0.5g",
    ingredients: ["Yam flour", "Water"],
    category: "Swallow",
    time: "15 minutes",
  },
  {
    name: "Fufu",
    description: "A soft dough made from cassava and hot water",
    id: 18,
    image:
      "https://www.thespruceeats.com/thmb/2omuPeKpH6HesujCzUqqVvYUGbI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/yam-fufu-2138088-hero-01-3366d155060e480abaf33cc67031dc9d.jpg",
    method:
      "Boil water in a pot, add cassava flour and stir until well combined, mold into balls and serve with soup",
    nutrition: "Calories: 267, Protein: 1.4g, Carbs: 64.3g, Fat: 0.3g",
    ingredients: ["Cassava flour", "Water"],
    category: "Swallow",
    time: "15 minutes",
  },
  {
    name: "Pounded Yam",
    description: "A smooth dough made from boiled yam and hot water",
    id: 19,
    image:
      "https://cheflolaskitchen.com/wp-content/uploads/2019/06/DSC0194-pounded-yam.jpg",
    method:
      "Peel and cut the yam into chunks, boil until soft, pound in a mortar or blender with hot water until smooth, mold into balls and serve with soup",
    nutrition: "Calories: 344, Protein: 4.7g, Carbs: 80.1g, Fat: 0.6g",
    ingredients: ["Yam", "Water"],
    category: "Swallow",
    time: "60 minutes",
  },
  {
    name: "Semo",
    description: "A light brown dough made from semolina and hot water",
    id: 20,
    image: "https://mandifoods.com.ng/wp-content/uploads/2022/11/Semo.jpg",
    method:
      "Boil water in a pot, add semolina and stir until well combined, mold into balls and serve with soup",
    nutrition: "Calories: 360, Protein: 9.2g, Carbs: 79.2g, Fat: 0.7g",
    ingredients: ["Semolina", "Water"],
    category: "Swallow",
    time: "15 minutes",
  },

  // A sub-array for stew category
  {
    name: "Tomato Stew",
    description: "A red sauce made from tomato paste and spices",
    id: 21,
    image:
      "https://www.mydiasporakitchen.com/wp-content/uploads/2020/06/savingpng-3-1-e1595556392862.png",
    method:
      "Blend the tomatoes, peppers and onion, fry the sauce with vegetable oil and other ingredients, add water and meat or fish and cook until done",
    nutrition: "Calories: 149, Protein: 6.1g, Carbs: 9.9g, Fat: 9.8g",
    ingredients: [
      "Tomato paste",
      "Red bell pepper",
      "Scotch bonnet pepper",
      "Onion",
      "Vegetable oil",
      "Salt",
      "Curry powder",
      "Thyme",
      "Bay leaf",
      "Stock cubes",
      "Water",
      "Chicken",
      "Beef",
      "Fish",
    ],
    category: "Stew",
    time: "60 minutes",
  },
  {
    name: "Banga Stew",
    description: "A yellow sauce made from palm fruit extract and spices",
    id: 22,
    image:
      "https://foodpluswords.com/wp-content/uploads/2022/07/banga-soup-and-starch-720x540.jpeg",
    method:
      "Boil and extract the palm fruit juice, boil the juice with onion and other ingredients, add water and meat or fish and cook until done",
    nutrition: "Calories: 282, Protein: 9.4g, Carbs: 11.2g, Fat: 22.5g",
    ingredients: [
      "Palm fruits",
      "Onion",
      "Salt",
      "Stock cubes",
      "Crayfish",
      "Dry fish",
      "Periwinkle",
      "Water",
      "Beef",
      "Chicken",
      "Fish",
    ],
    category: "Stew",
    time: "90 minutes",
  },
  {
    name: "Egusi Ijebu",
    description: "A light brown sauce made from egusi seeds and spices",
    id: 23,
    image:
      "https://foodiesbymina.com/wp-content/uploads/2018/04/IMG-20180401-WA0008.jpg",
    method:
      "Grind the egusi seeds, boil the water with onion and other ingredients, add the egusi and meat or fish and cook until done",
    nutrition: "Calories: 270, Protein: 14.3g, Carbs: 12.4g, Fat: 19.1g",
    ingredients: [
      "Egusi seeds",
      "Water",
      "Onion",
      "Salt",
      "Stock cubes",
      "Crayfish",
      "Dry fish",
      "Beef",
      "Chicken",
      "Fish",
    ],
    category: "Stew",
    time: "45 minutes",
  },
  {
    name: "Ayamase",
    description: "A green sauce made from green peppers and palm oil",
    id: 24,
    image:
      "https://lowcarbafrica.com/wp-content/uploads/2020/06/Ofada-Stew-Ayamase-Stew-IG-1.jpg",
    method:
      "Bleach the palm oil, blend the green peppers and onion, fry the sauce with the oil and other ingredients, add water and meat or fish and cook until done",
    nutrition: "Calories: 367, Protein: 14.7g, Carbs: 13.8g, Fat: 29.2g",
    ingredients: [
      "Palm oil",
      "Green bell pepper",
      "Green scotch bonnet pepper",
      "Onion",
      "Salt",
      "Stock cubes",
      "Crayfish",
      "Iru",
      "Water",
      "Beef",
      "Shaki",
      "Ponmo",
      "Dry fish",
    ],
    category: "Stew",
    time: "75 minutes",
  },
  {
    name: "Ofe Akwu",
    description: "A red sauce made from palm fruit extract and spices",
    id: 25,
    image:
      "https://afrifoodnetwork.com/wp-content/uploads/2023/04/ofe-akwu.png",
    method:
      "Boil and extract the palm fruit juice, blend the tomatoes, peppers and onion, fry the sauce with the juice and other ingredients, add water and meat or fish and cook until done",
    nutrition: "Calories: 314, Protein: 10.6g, Carbs: 13.4g, Fat: 24.9g",
    ingredients: [
      "Palm fruits",
      "Tomato paste",
      "Red bell pepper",
      "Scotch bonnet pepper",
      "Onion",
      "Salt",
      "Stock cubes",
      "Crayfish",
      "Dry fish",
      "Water",
      "Beef",
      "Chicken",
      "Fish",
    ],
    category: "Stew",
    time: "90 minutes",
  },

  // A sub-array for salad category
  {
    name: "Coleslaw",
    description:
      "A cold salad made from shredded cabbage and carrot mixed with mayonnaise",
    id: 26,
    image:
      "https://www.inspiredtaste.net/wp-content/uploads/2023/09/Easy-Coleslaw-Recipe-Video.jpg",
    method:
      "Wash and shred the cabbage and carrot, mix with mayonnaise and sugar, refrigerate and serve",
    nutrition: "Calories: 268, Protein: 1.8g, Carbs: 15.6g, Fat: 22.4g",
    ingredients: ["Cabbage", "Carrot", "Mayonnaise", "Sugar"],
    category: "Salad",
    time: "15 minutes",
  },
  {
    name: "Potato Salad",
    description:
      "A cold salad made from boiled potatoes mixed with mayonnaise and other ingredients",
    id: 27,
    image:
      "https://www.freshoffthegrid.com/wp-content/uploads/Potato-salad-10.jpg",
    method:
      "Peel and dice the potatoes, boil until soft, drain and cool, mix with mayonnaise, onion, celery, mustard, vinegar, salt and pepper, refrigerate and serve",
    nutrition: "Calories: 358, Protein: 4.5g, Carbs: 40.2g, Fat: 20.2g",
    ingredients: [
      "Potatoes",
      "Mayonnaise",
      "Onion",
      "Celery",
      "Mustard",
      "Vinegar",
      "Salt",
      "Pepper",
    ],
    category: "Salad",
    time: "45 minutes",
  },
  {
    name: "Fruit Salad",
    description:
      "A cold salad made from assorted fruits mixed with yogurt or cream",
    id: 28,
    image:
      "https://www.eatingwell.com/thmb/3AAcN1VEtaKBSDAbiZfjLIARapo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/easy-fruit-salad132-c61ad7e4d75b4ef9b3589205e1cf1db5.jpg",
    method:
      "Wash and chop the fruits, mix with yogurt or cream and sugar, refrigerate and serve",
    nutrition: "Calories: 124, Protein: 2.1g, Carbs: 25.9g, Fat: 1.7g",
    ingredients: [
      "Banana",
      "Apple",
      "Orange",
      "Pineapple",
      "Watermelon",
      "Yogurt",
      "Sugar",
    ],
    category: "Salad",
    time: "15 minutes",
  },
  {
    name: "Chicken Salad",
    description:
      "A cold salad made from shredded chicken mixed with mayonnaise and other ingredients",
    id: 29,
    image:
      "https://www.skinnytaste.com/wp-content/uploads/2008/07/Classic-Chicken-Salad-4.jpg",
    method:
      "Boil and shred the chicken, mix with mayonnaise, onion, celery, parsley, lemon juice, salt and pepper, refrigerate and serve",
    nutrition: "Calories: 417, Protein: 25.4g, Carbs: 3.4g, Fat: 34.1g",
    ingredients: [
      "Chicken",
      "Mayonnaise",
      "Onion",
      "Celery",
      "Parsley",
      "Lemon juice",
      "Salt",
      "Pepper",
    ],
    category: "Salad",
    time: "60 minutes",
  },
  {
    name: "Vegetable Salad",
    description:
      "A cold salad made from assorted vegetables mixed with salad dressing",
    id: 30,
    image:
      "https://simple-veganista.com/wp-content/uploads/2012/09/healthy-chopped-vegetable-salad-recipe-4.jpg",
    method:
      "Wash and chop the vegetables, mix with salad dressing and salt, refrigerate and serve",
    nutrition: "Calories: 71, Protein: 1.9g, Carbs: 8.4g, Fat: 4g",
    ingredients: [
      "Lettuce",
      "Cucumber",
      "Tomato",
      "Carrot",
      "Green beans",
      "Sweet corn",
      "Salad dressing",
      "Salt",
    ],
    category: "Salad",
    time: "15 minutes",
  },

  // A sub-array for breakfast dishes category
  {
    name: "Classic Nigerian Breakfast",
    description:
      "A dish that consists of akara/kosai (bean cake), fried yam and fried plantains with sauce",
    id: 31,
    image:
      "https://qph.cf2.quoracdn.net/main-qimg-b503db745928a582ae7c344fe03d7c0c-pjlq",
    method:
      "Soak and peel the beans, blend with onion, pepper and salt into a smooth paste, heat oil in a frying pan, scoop and fry the paste until golden brown, drain and set aside, peel and cut the yam and plantain into slices, fry in hot oil until golden and crisp, drain and set aside, make the sauce by frying onion, tomato paste, pepper, salt and stock cubes in oil, add water and simmer until thickened, serve the akara, yam and plantain with the sauce",
    nutrition: "Calories: 782, Protein: 19.2g, Carbs: 117.9g, Fat: 29.3g",
    ingredients: [
      "Beans",
      "Onion",
      "Pepper",
      "Salt",
      "Oil",
      "Yam",
      "Plantain",
      "Tomato paste",
      "Stock cubes",
      "Water",
    ],
    category: "Breakfast Dishes",
    time: "90 minutes",
  },
  {
    name: "Nigerian 'Full English' Breakfast",
    description:
      "A Nigerian twist on a traditional Full English breakfast that features baked beans, sausage, bacon, eggs, toast and plantain",
    id: 32,
    image:
      "https://www.zikoko.com/wp-content/uploads/zikoko/2020/04/Plantain-and-eggs-feature-imaga-1.jpg",
    method:
      "Heat the baked beans in a pot, fry the sausage and bacon in a frying pan until cooked, drain and set aside, beat the eggs with salt, pepper and milk, scramble in a frying pan with butter, set aside, toast the bread slices in a toaster or oven, peel and cut the plantain into slices, fry in hot oil until golden and crisp, drain and set aside, serve the baked beans, sausage, bacon, eggs, toast and plantain on a large plate",
    nutrition: "Calories: 1014, Protein: 40.8g, Carbs: 115.6g, Fat: 46.2g",
    ingredients: [
      "Baked beans",
      "Sausage",
      "Bacon",
      "Eggs",
      "Salt",
      "Pepper",
      "Milk",
      "Butter",
      "Bread",
      "Plantain",
      "Oil",
    ],
    category: "Breakfast Dishes",
    time: "45 minutes",
  },
  {
    name: "Ogi",
    description: "A fermented corn porridge eaten with milk and sugar",
    id: 33,
    image:
      "https://4.bp.blogspot.com/-hV0VQA3WqH0/VTdOIS0n7bI/AAAAAAAACxI/yC52J0E3JQw/s1600/Goldenogi.jpg",
    method:
      "Soak the corn in water for three days, wash and blend into a smooth paste, sieve the paste with a muslin cloth to separate the chaff from the liquid, pour the liquid into a pot and boil until thickened, stirring constantly, serve the ogi with milk and sugar",
    nutrition: "Calories: 113, Protein: 2.5g, Carbs: 24.1g, Fat: 0.7g",
    ingredients: ["Corn", "Water", "Milk", "Sugar"],
    category: "Breakfast Dishes",
    time: "72 hours",
  },
  {
    name: "Kunu",
    description: "A spicy drink made from millet, ginger and other spices",
    id: 34,
    image:
      "https://theonlinecook.com/wp-content/uploads/2022/03/kunu-zaki-ingredients.png",
    method:
      "Soak the millet in water for a day, wash and blend with ginger, cloves and water into a smooth paste, sieve the paste with a muslin cloth to separate the chaff from the liquid, pour the liquid into a pot and boil with sugar and salt, stirring constantly, cool and refrigerate the kunu, serve chilled",
    nutrition: "Calories: 88, Protein: 2.1g, Carbs: 18.6g, Fat: 0.6g",
    ingredients: ["Millet", "Water", "Ginger", "Cloves", "Sugar", "Salt"],
    category: "Breakfast Dishes",
    time: "24 hours",
  },
  {
    name: "Gari",
    description:
      "A granulated cassava product eaten with milk, sugar and groundnuts",
    id: 35,
    image:
      "https://t3.ftcdn.net/jpg/05/14/81/88/360_F_514818809_yGkIrGp6g10CTdF0aNL1notQ9z1RCLPV.jpg",
    method:
      "Peel and grate the cassava, press out the liquid with a muslin cloth, spread the cassava on a large tray and dry in the sun, sieve the cassava to remove any lumps, store the gari in an airtight container, serve the gari with milk, sugar and groundnuts",
    nutrition: "Calories: 360, Protein: 1.8g, Carbs: 84.3g, Fat: 0.6g",
    ingredients: ["Cassava", "Milk", "Sugar", "Groundnuts"],
    category: "Breakfast Dishes",
    time: "48 hours",
  },

  // A sub-array for yam-based dishes category
  {
    name: "White Yam and Palm Oil Sauce",
    description:
      "A simple dish of boiled yam served with a sauce made from palm oil and other ingredients",
    id: 36,
    image:
      "https://img-global.cpcdn.com/recipes/cd61c37fbfd525da/1200x630cq70/photo.jpg",
    method:
      "Peel and cut the yam into chunks, boil in salted water until soft, drain and set aside, heat the palm oil in a pot, add the onion, pepper, salt, stock cubes, crayfish and locust beans, fry for a few minutes, add water and simmer until thickened, serve the yam with the sauce",
    nutrition: "Calories: 471, Protein: 5.9g, Carbs: 79.9g, Fat: 15.8g",
    ingredients: [
      "Yam",
      "Water",
      "Salt",
      "Palm oil",
      "Onion",
      "Pepper",
      "Stock cubes",
      "Crayfish",
      "Locust beans",
    ],
    category: "Yam-based Dishes",
    time: "45 minutes",
  },
  {
    name: "Yam Pepper Soup",
    description: "A spicy soup made from yam and assorted meat",
    id: 37,
    image: "https://i.ytimg.com/vi/fNCnK6dKozA/maxresdefault.jpg",
    method:
      "Peel and cut the yam into chunks, wash and season the meat with salt, pepper and onion, boil in water until tender, add the yam and more water if needed, add the pepper soup spice, scent leaves and salt, cook until the yam is soft, serve hot",
    nutrition: "Calories: 398, Protein: 28.7g, Carbs: 46.9g, Fat: 11.4g",
    ingredients: [
      "Yam",
      "Water",
      "Salt",
      "Pepper",
      "Onion",
      "Beef",
      "Goat meat",
      "Chicken",
      "Pepper soup spice",
      "Scent leaves",
    ],
    category: "Yam-based Dishes",
    time: "60 minutes",
  },
  {
    name: "Yam and Egg Sauce",
    description:
      "A dish of boiled yam served with a sauce made from eggs and tomatoes",
    id: 38,
    image: "https://allnigerianfoods.com/wp-content/uploads/egg-sauce.png",
    method:
      "Peel and cut the yam into chunks, boil in salted water until soft, drain and set aside, beat the eggs with salt and pepper, heat oil in a frying pan, fry the onion, tomato and pepper for a few minutes, add the eggs and scramble, serve the yam with the egg sauce",
    nutrition: "Calories: 394, Protein: 12.8g, Carbs: 65.4g, Fat: 10.3g",
    ingredients: [
      "Yam",
      "Water",
      "Salt",
      "Eggs",
      "Pepper",
      "Oil",
      "Onion",
      "Tomato",
    ],
    category: "Yam-based Dishes",
    time: "45 minutes",
  },
];

module.exports = foodData;
