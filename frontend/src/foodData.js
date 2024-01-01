// An array of arrays of Nigerian cuisines and their details
export const foodData = [
  // A sub-array for each cuisine

  {
    // A sub-array for Rice category
    name: "Jollof Rice",
    description:
      "A spicy rice dish cooked with tomato sauce and other seasonings",
    id: 1,
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgrandbaby-cakes.com%2Fjollof-rice-recipe%2F&psig=AOvVaw2HS5nKHcxQZ5Ap5enuHc6A&ust=1704232212307000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPjTwfCVvYMDFQAAAAAdAAAAABAH",
    method:
      "Boil the rice, fry the tomato sauce, mix them together and simmer until done",
    nutrition: [
      { Name: "Calories", Value: 296 },
      { Name: "Protein", value: 6.6 },
      { Name: "Carbs", value: 55.8 },
      { Name: "Fat", value: 4.4 },
    ],
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
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fallnigerianfoods.com%2Fnigerian-fried-rice%2F&psig=AOvVaw29RkLzlEoqdPfsOzguccRp&ust=1704232240771000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOCBsv-VvYMDFQAAAAAdAAAAABAI",
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
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.preciouscore.com%2Fcameroonian-coconut-rice%2F&psig=AOvVaw0IgIo7v669qjYO46bQQXZy&ust=1704232277712000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKD9wY-WvYMDFQAAAAAdAAAAABAD",
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
    image: "https://www.shutterstock.com/search/ofada-rice",
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
      "https://www.bing.com/images/search?view=detailV2&ccid=dmk9166f&id=7E83AC82E27A5C48D41C483D68AB8EDA2A364F8A&thid=OIP.ZLo836Wk9U60XHtBN8MOcwHaDP&mediaurl=https%3a%2f%2fwww.africa.com%2fwp-content%2fuploads%2f2019%2f10%2fTuwo-Shinkafa-1.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.76693dd7ae9f0eaeda7ff639689d75bc%3frik%3dik82KtqOq2g9SA%26pid%3dImgRaw%26r%3d0&exph=304&expw=696&q=free+tuwo-shinkafa.jpg&simid=608045804952038363&FORM=IRPRST&ck=046797EB0EC160B5063BAB78664B13E0&selectedIndex=1",
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
    image: "https://www.shutterstock.com/search/egusi-soup",
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
      "https://www.bing.com/images/search?view=detailV2&ccid=Jwf%2b8%2b6u&id=2F05CCF09393D04EF3E54CB51354E4E4F042B090&thid=OIP.Jwf-8-6u7dCqHcbEfBGf3QHaEh&mediaurl=https%3a%2f%2fwww.pointoneafricancuisine.com%2fwp-content%2fuploads%2f2021%2f02%2fsoutmeat2.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.2707fef3eeaeedd0aa1dc6c47c119fdd%3frik%3dkLBC8OTkVBO1TA%26pid%3dImgRaw%26r%3d0&exph=1172&expw=1920&q=free+okra-soup.jpg&simid=608040659573946630&FORM=IRPRST&ck=241CDBF97B0D83442065C904BDBBFC9E&selectedIndex=1",
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
    image: "https://www.dreamstime.com/photos-images/efo-riro.html",
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
      "https://www.bing.com/images/search?view=detailV2&ccid=UN5bNOBE&id=FAF9F880D2FE3D437B75214F17B364E230A3D5A8&thid=OIP.UN5bNOBE8YTQRpFhUwbdGgHaEK&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.50de5b34e044f184d04691615306dd1a%3frik%3dqNWjMOJksxdPIQ%26riu%3dhttp%253a%252f%252forsimages.unileversolutions.com%252fORS_Images%252fKnorr_en-NG%252fogbono_soup_40_3.1.37_326X580_40_3.1.37_326X580_40_3.1.37_326X580.Jpeg%26ehk%3d%252fY9SYlupjUKlRaRmomagPPU51ajPXnL%252fKf1mKybAc3E%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=326&expw=580&q=free+ogbono-soup+images&simid=608002258285636254&FORM=IRPRST&ck=56ED5CC9E93A4C902B249F3B2BA93E3A&selectedIndex=25",
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
      "https://www.bing.com/images/search?view=detailV2&ccid=DDQ019Mp&id=63524F6E5AEC502CD838CDBA6CF819786BD424E8&thid=OIP.DDQ019MprSUtS9DQgTJpJAHaE8&mediaurl=https%3a%2f%2fwww.royacshop.com%2fwp-content%2fuploads%2f2018%2f09%2fEdika-Ikong-Soup.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.0c3434d7d329ad252d4bd0d081326924%3frik%3d6CTUa3gZ%252bGy6zQ%26pid%3dImgRaw%26r%3d0&exph=667&expw=1000&q=free+edikang-ikong+images&simid=608028255708991228&FORM=IRPRST&ck=A567AA1E773523BF4A07087DAE2E96E8&selectedIndex=0",
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
      "https://th.bing.com/th/id/OIP.fnRNBPQMopZ5g91JcjoKiAHaGs?pid=ImgDet&rs=1",
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
      "https://www.bing.com/images/search?view=detailV2&ccid=c0z9vmiT&id=5A2E6E941F60A0C6AE18B9003A525375DDF6280B&thid=OIP.c0z9vmiTT9S92T9ub-4wJAHaFj&mediaurl=https%3a%2f%2fpastrymachinery.com%2fwp-content%2fuploads%2f2022%2f05%2fchin-chin.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.734cfdbe68934fd4bdd93f6e6fee3024%3frik%3dCyj23XVTUjoAuQ%26pid%3dImgRaw%26r%3d0&exph=540&expw=720&q=free+chin-chin.jpg&simid=608040101231874042&FORM=IRPRST&ck=0314A7B9401D815AF7CA4C5782036C68&selectedIndex=29",
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
      "https://www.bing.com/images/search?view=detailV2&ccid=D9nJanpP&id=86476D1FE1649F695E467EA70DCE7C4615CFA041&thid=OIP.D9nJanpPt-UYsJ_RWEfSQAHaE8&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.0fd9c96a7a4fb7e518b09fd15847d240%3frik%3dQaDPFUZ8zg2nfg%26riu%3dhttp%253a%252f%252fyesofcorsa.com%252fwp-content%252fuploads%252f2017%252f12%252fBuns-Photo1.jpg%26ehk%3djPU0afiUzO%252fEoKD8JIt0aCSvBzAgh0r94pJ9uSTa%252foc%253d%26risl%3d1%26pid%3dImgRaw%26r%3d0&exph=3168&expw=4752&q=free+buns.jpg&simid=607994299716472402&FORM=IRPRST&ck=8E79E452723D37EC47B85CACF5984B8E&selectedIndex=0",
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
      "https://www.bing.com/images/search?view=detailV2&ccid=79eO7CIt&id=5C986AC86770CF31386B2065C5D2BF0D66BA84D4&thid=OIP.79eO7CIt5WlGjzKIuiQ7PwHaGl&mediaurl=https%3a%2f%2fwww.just-eat.ch%2ffoodwiki%2fuploads%2fsites%2f6%2f2017%2f06%2fsamosa-3-1080x960.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.efd78eec222de569468f3288ba243b3f%3frik%3d1IS6Zg2%252f0sVlIA%26pid%3dImgRaw%26r%3d0&exph=960&expw=1080&q=free+samosa.jpg&simid=607993840134210196&FORM=IRPRST&ck=DB72B87BDF0F756F08CEF9A6BCC988F4&selectedIndex=0",
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
      "https://www.bing.com/images/search?view=detailV2&ccid=X5ajZPdT&id=5821338BF7D59B7B3448AE603F628B84C37A705A&thid=OIP.X5ajZPdT4tUj9x5YQy6DdgHaEK&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.5f96a364f753e2d523f71e58432e8376%3frik%3dWnB6w4SLYj9grg%26riu%3dhttp%253a%252f%252finuofebi.com%252fwp-content%252fuploads%252f2016%252f09%252fplantain-chips-1200x674.jpg%26ehk%3dBk8bxfKV45WCpR%252f%252bn0FDqHqPW40d73cB50%252biLTR8BzU%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=674&expw=1200&q=free+plantain-chips.jpg&simid=608009057221420936&FORM=IRPRST&ck=45509127BB0C6CFC5B8026163E832872&selectedIndex=8",
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
      "https://www.bing.com/images/search?view=detailV2&ccid=NcygjEt8&id=06C47E7B3F3700BA4A24CFF8D60206B93C9BA033&thid=OIP.NcygjEt8-fkJtOd9sxbmsgHaFA&mediaurl=https%3a%2f%2fwww.naijadelicacy.com%2fwp-content%2fuploads%2f2019%2f12%2fbeansPorridge.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.35cca08c4b7cf9f909b4e77db316e6b2%3frik%3dM6CbPLkGAtb4zw%26pid%3dImgRaw%26r%3d0&exph=431&expw=637&q=free+beans-porridge.jpg&simid=607996906718123458&FORM=IRPRST&ck=7D9F2C589CD39D58FBD274647A1BD98C&selectedIndex=9",
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
    image:
      "https://www.bing.com/images/search?view=detailV2&ccid=GrKM1bjh&id=049309B6FF7DCEA8DDA7128E66E7B4EDFA4AE14C&thid=OIP.GrKM1bjhiAdO9tcu_QAwFQHaE8&mediaurl=https%3a%2f%2fpulses.org%2fimages%2fcom_yoorecipe%2f422%2fmoi-moi-rollup.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.1ab28cd5b8e188074ef6d72efd003015%3frik%3dTOFK%252bu2052aOEg%26pid%3dImgRaw%26r%3d0&exph=748&expw=1122&q=Moi+Moi+Recipe&simid=608014790955181743&FORM=IRPRST&ck=B5A3B9E8512ECFC4378D1837FC926341&selectedIndex=1",
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
      "https://www.bing.com/images/search?view=detailV2&ccid=d04uPLzk&id=2B446577A5E352015C3C421674DF4C0503EF6817&thid=OIP.d04uPLzk6TzR_GaJCBR39gHaD4&mediaurl=https%3a%2f%2f4.bp.blogspot.com%2f-Cn0DEl_cNUM%2fVu3UfjScPUI%2fAAAAAAAAFxo%2ffiwNttWa8M8XkVAt_voVInXIxYmVHb0Sw%2fw1200-h630-p-k-no-nu%2fakara.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.774e2e3cbce4e93cd1fc6689081477f6%3frik%3dF2jvAwVM33QWQg%26pid%3dImgRaw%26r%3d0&exph=630&expw=1200&q=free+akara+images&simid=608048716935531766&FORM=IRPRST&ck=6C91837530BC32D92C141C479A6E4DEA&selectedIndex=8",
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
      "https://www.bing.com/images/search?view=detailV2&ccid=R031Ouyg&id=0B743776A972ACFDD96A96E7CA22AE349F582821&thid=OIP.R031OuygS4cThZ-2POsXVQHaE8&mediaurl=https%3a%2f%2fthumbs.dreamstime.com%2fb%2fpounded-yam-garri-eba-served-egusi-soup-pounded-yam-garri-eba-served-egusi-soup-ready-to-eat-242067261.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.474df53aeca04b8713859fb63ceb1755%3frik%3dIShYnzSuIsrnlg%26pid%3dImgRaw%26r%3d0&exph=534&expw=800&q=free+garri+eba+and+egusi&simid=608055425655395992&FORM=IRPRST&ck=0CF3BF133D7F7F0E11654DE9E758D61D&selectedIndex=11",
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
      "https://www.bing.com/images/search?view=detailV2&ccid=PFO8XRBW&id=01AAB25C33C0F3D55E50922F3BDB8FD7B44E714F&thid=OIP.PFO8XRBWxOWHupSHtEeEIgHaET&mediaurl=https%3a%2f%2fwww.hynaija.com%2fwp-content%2fuploads%2f2019%2f01%2fBest-Amala-Spots-in-Lagos.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.3c53bc5d1056c4e587ba9487b4478422%3frik%3dT3FOtNeP2zsvkg%26pid%3dImgRaw%26r%3d0&exph=600&expw=1033&q=free+amala+food+images&simid=607993943225956453&FORM=IRPRST&ck=5E74B0F550183D335D7000EBAA17FFFA&selectedIndex=37",
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
      "https://www.bing.com/images/search?view=detailV2&ccid=jYYNA6t%2f&id=C9B6B1BF1AED7B76A333CC4505F29B90B0F2E6B4&thid=OIP.jYYNA6t_QGkDf-KtFwGhCgHaEK&mediaurl=https%3a%2f%2fwww.mashed.com%2fimg%2fgallery%2fwhat-is-fufu-and-how-do-you-make-it%2fintro-1614460396.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.8d860d03ab7f4069037fe2ad1701a10a%3frik%3dtObysJCb8gVFzA%26pid%3dImgRaw%26r%3d0&exph=563&expw=1000&q=free+fufu+images&simid=608008460194884771&FORM=IRPRST&ck=9647F1A6AD7AB501DCFBD6ACEF34A780&selectedIndex=3",
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
      "https://www.bing.com/images/search?view=detailV2&ccid=TqruVCOo&id=E5E9A33C810E4CF27B7E94F808DD213C3652A330&thid=OIP.TqruVCOoDviEXwgIG3QhIwHaFP&mediaurl=https%3a%2f%2fi.pinimg.com%2foriginals%2f9f%2f74%2fab%2f9f74ab69f8670d910f57f3e237140c80.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.4eaaee5423a80ef8845f08081b742123%3frik%3dMKNSNjwh3Qj4lA%26pid%3dImgRaw%26r%3d0&exph=1064&expw=1502&q=free+pounded-yam+images&simid=608001510955357120&FORM=IRPRST&ck=77E2BCB325BEFCD77BE040D037ED2994&selectedIndex=3",
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
    image:
      "https://www.bing.com/images/search?view=detailV2&ccid=V6hahbse&id=9342DFB8113C9B807D0217419951FC8F2D7195E6&thid=OIP.V6hahbseaB_5C_5IIqVA_wHaGA&mediaurl=https%3a%2f%2fjiji-blog.com%2fwp-content%2fuploads%2f2017%2f11%2fsemovita2-608x493.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.57a85a85bb1e681ff90bfe4822a540ff%3frik%3d5pVxLY%252f8UZlBFw%26pid%3dImgRaw%26r%3d0&exph=493&expw=608&q=free+semovita++images&simid=608038782690740472&FORM=IRPRST&ck=D400FF137784F62A7228A9616D5CAAFE&selectedIndex=0",
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
      "https://www.bing.com/images/search?view=detailV2&ccid=AHL%2bPbBP&id=1CAFFB4AA02FF5CC12727068308E48597A967402&thid=OIP.AHL-PbBPCM4vLvftcfqgAgHaD4&mediaurl=https%3a%2f%2fimg-global.cpcdn.com%2frecipes%2f41f7259864e41325%2f1200x630cq70%2fphoto.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.0072fe3db04f08ce2f2ef7ed71faa002%3frik%3dAnSWellIjjBocA%26pid%3dImgRaw%26r%3d0&exph=630&expw=1200&q=free+tomato-stew+images&simid=608042536484424823&FORM=IRPRST&ck=7137DBB4EAA423F34354CDADEEFFD516&selectedIndex=48",
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
      "https://www.bing.com/images/search?view=detailV2&ccid=FpxHB5Em&id=A8BB24D01BC3C396FBAC02958E16F19EF5964FDA&thid=OIP.FpxHB5Emop8MERUUjP1o8AHaFP&mediaurl=https%3a%2f%2fimg-global.cpcdn.com%2frecipes%2fe87746d0473f977e%2f751x532cq70%2fbanga-stew-aka-ofe-akwu-recipe-main-photo.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.169c47079126a29f0c1115148cfd68f0%3frik%3d2k%252bW9Z7xFo6VAg%26pid%3dImgRaw%26r%3d0&exph=532&expw=751&q=free+banga-stew+images&simid=608028315841016571&FORM=IRPRST&ck=8868E29724E010AF028FBE18822E4C21&selectedIndex=0",
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
      "https://th.bing.com/th?q=Egusi+Soup+HD&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-WW&cc=NG&setlang=en&adlt=moderate&t=1&mw=247",
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
      "https://www.bing.com/images/search?view=detailV2&ccid=DrQndl5g&id=8E97C56AC32D5B72544657DCA4FB14D248635DC9&thid=OIP.DrQndl5go3dynTn-wprVSwHaFP&mediaurl=https%3a%2f%2fimg-global.cpcdn.com%2frecipes%2fa6ec9f5b882a6473%2f680x482cq70%2fayamase-sauce-recipe-main-photo.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.0eb427765e60a377729d39fec29ad54b%3frik%3dyV1jSNIU%252b6TcVw%26pid%3dImgRaw%26r%3d0&exph=482&expw=680&q=free+ayamase+images&simid=608033886435949405&FORM=IRPRST&ck=91B9BA562E6697C9981301468E9A7B35&selectedIndex=4",
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
      "https://www.bing.com/images/search?view=detailV2&ccid=6ylZpD9I&id=030426867B5756BEA0B23F1726AD825C0841CD73&thid=OIP.6ylZpD9IfCYWPaUiHEClNwHaFj&mediaurl=https%3a%2f%2fwww.allnigerianrecipes.com%2fwp-content%2fuploads%2f2019%2f03%2fbanga-soup.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.eb2959a43f487c26163da5221c40a537%3frik%3dc81BCFyCrSYXPw%26pid%3dImgRaw%26r%3d0%26sres%3d1%26sresct%3d1%26srh%3d800%26srw%3d1066&exph=375&expw=500&q=free+ofe-akwu+images&simid=608026529130157950&FORM=IRPRST&ck=804EA664946B04AA0AF2A83836DD90AD&selectedIndex=14",
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
      "https://www.bing.com/images/search?view=detailV2&ccid=0KbQcQvw&id=A8AB1AAEC42DFF06A8918664785F634B15309943&thid=OIP.0KbQcQvwvnkkOb_52Rd9VAHaE8&mediaurl=https%3a%2f%2fi.pinimg.com%2foriginals%2faa%2f85%2f24%2faa85242d3ca6b19b6e4abacb1fb4230d.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.d0a6d0710bf0be792439bff9d9177d54%3frik%3dQ5kwFUtjX3hkhg%26pid%3dImgRaw%26r%3d0&exph=1067&expw=1600&q=free+coleslaw+images&simid=608029247860134585&FORM=IRPRST&ck=1D7616A28759DD275878F6E46FA3A1D3&selectedIndex=11",
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
      "https://www.bing.com/images/search?view=detailV2&ccid=s60K1Vjh&id=928DB67598B679321FDDC31F03D32723D38F1A2C&thid=OIP.s60K1VjhHuLaS-j5DCDMpgHaLH&mediaurl=https%3a%2f%2fi2.wp.com%2fwww.downshiftology.com%2fwp-content%2fuploads%2f2015%2f05%2fPotato-Salad-6.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.b3ad0ad558e11ee2da4be8f90c20cca6%3frik%3dLBqP0yMn0wMfww%26pid%3dImgRaw%26r%3d0&exph=1536&expw=1024&q=free+potato-salad+images&simid=608020971475398621&FORM=IRPRST&ck=A9FDA555EC7C154438CC38DC80A33795&selectedIndex=4",
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
      "https://www.bing.com/images/search?view=detailV2&ccid=b4IrCisl&id=D71F3DB1BB2F2B4F4354061A93C9DA727095086A&thid=OIP.b4IrCislTcKYFaleBcQEhwHaHa&mediaurl=https%3a%2f%2fwww.tasteofhome.com%2fwp-content%2fuploads%2f2018%2f01%2fLayered-Fresh-Fruit-Salad_EXPS_HCA18_2778_B04_26_3b-1.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.6f822b0a2b254dc29815a95e05c40487%3frik%3dagiVcHLayZMaBg%26pid%3dImgRaw%26r%3d0&exph=1200&expw=1200&q=free+fruit-salad+images&simid=607995317616663731&FORM=IRPRST&ck=5188ACF9CB10520F7A80CB825017D8FE&selectedIndex=4",
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
      "https://www.bing.com/images/search?view=detailV2&ccid=nkJUMrgE&id=8FFCF32A6A4B5468CC69E07A94AF0F2FA2A0F369&thid=OIP.nkJUMrgEBzk4orDmNq4BsgHaEq&mediaurl=https%3a%2f%2fwww.farmwifecooks.com%2fwp-content%2fuploads%2f2017%2f03%2fHotchickensalad-1.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.9e425432b804073938a2b0e636ae01b2%3frik%3dafOgoi8Pr5R64A%26pid%3dImgRaw%26r%3d0&exph=2054&expw=3266&q=free+chicken-salad+images&simid=608007459466928335&FORM=IRPRST&ck=0239F5CC05DB67850DE89F391A6D45DF&selectedIndex=11",
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
      "https://www.bing.com/images/search?view=detailV2&ccid=TxwSahfp&id=1C119359250D525819225F64AA29929B6D7E52BA&thid=OIP.TxwSahfp4gBBFIIQ1XlfowHaE8&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.4f1c126a17e9e20041148210d5795fa3%3frik%3dulJ%252bbZuSKapkXw%26riu%3dhttp%253a%252f%252fimg.taste.com.au%252fQaDKlckA%252ftaste%252f2016%252f11%252ffresh-summer-vegetable-salad-91664-1.jpeg%26ehk%3dtj7qLs2rAIGitkP7H44hpoWV8dVLz%252bbMDoFcImb8w9U%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=2000&expw=3000&q=free+vegetable-salad+images&simid=607989613916678474&FORM=IRPRST&ck=5B351024646998AB520F0569985E7CCC&selectedIndex=7",
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
      "https://www.bing.com/images/search?view=detailV2&ccid=qZvjJ7xy&id=4C5676C700079038C0238891C39EE516DBF580F3&thid=OIP.qZvjJ7xyWWdIEfgEpW-j2gHaHN&mediaurl=https%3a%2f%2fhealthguide.ng%2fwp-content%2fuploads%2f2019%2f05%2fIMG_20190529_071821_749.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.a99be327bc7259674811f804a56fa3da%3frik%3d84D12xblnsORiA%26pid%3dImgRaw%26r%3d0&exph=701&expw=720&q=Full+Nigerian+Breakfast&simid=608017891967384704&FORM=IRPRST&ck=D2D0058D1AFB049993D8CE76E24F2826&selectedIndex=3",
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
      "https://www.bing.com/images/search?view=detailV2&ccid=Bvr3V8Jl&id=035E10B9783D5C7D370A9091BD50F80CCD288A4C&thid=OIP.Bvr3V8JlXbHJGDm2fE2-NQHaFU&mediaurl=https%3a%2f%2fwww.onlinenigeria.com%2fpageCreation%2fimages%2fogi.JPG&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.06faf757c2655db1c91839b67c4dbe35%3frik%3dTIoozQz4UL2RkA%26pid%3dImgRaw%26r%3d0&exph=498&expw=693&q=free+ogi+food+images&simid=608010981359355514&FORM=IRPRST&ck=406CAD45E2E2C0BB308D7F61ECA3E3CF&selectedIndex=53",
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
      "https://www.bing.com/images/search?view=detailV2&ccid=rysOCG9d&id=AC4687C2116591031FFB45E8BDD798E8CD4D138B&thid=OIP.rysOCG9d37bN3WM-d1X7ewHaEK&mediaurl=https%3a%2f%2fguardian.ng%2fwp-content%2fuploads%2f2018%2f11%2fKunu-Photo-credit-The-Cable-640x360.png&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.af2b0e086f5ddfb6cddd633e7755fb7b%3frik%3dixNNzeiY173oRQ%26pid%3dImgRaw%26r%3d0&exph=360&expw=640&q=free+kunu+images&simid=608047157869429516&FORM=IRPRST&ck=BB7A0F6BD3C924E410B115AF0DCDF5E2&selectedIndex=5",
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
      "https://www.bing.com/images/search?view=detailV2&ccid=pK4l%2fcX%2b&id=CC5E0335988939DA7C810343D9EC352D77CD3249&thid=OIP.pK4l_cX-ivN3KoVty3O8_AHaEd&mediaurl=https%3a%2f%2fi.etsystatic.com%2f6035140%2fr%2fil%2f6a3a61%2f2814997051%2fil_1588xN.2814997051_3an2.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.a4ae25fdc5fe8af3772a856dcb73bcfc%3frik%3dSTLNdy017NlDAw%26pid%3dImgRaw%26r%3d0&exph=958&expw=1588&q=Nigeria+Gari&simid=608022715183674720&FORM=IRPRST&ck=0C17225AE7F3F2B357737E6C4979D97B&selectedIndex=18",
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
      "https://www.bing.com/images/search?view=detailV2&ccid=xyj1hZaw&id=C16B622FEE802B66DAC80372C54C68B9772261E9&thid=OIP.xyj1hZawopnuexxRpDD9-wHaFP&mediaurl=https%3a%2f%2fimg-global.cpcdn.com%2frecipes%2fc231b12eb7ea071e%2f680x482cq70%2foven-roasted-yam-with-native-palm-oil-sauce-recipe-main-photo.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.c728f58596b0a299ee7b1c51a430fdfb%3frik%3d6WEid7loTMVyAw%26pid%3dImgRaw%26r%3d0&exph=482&expw=680&q=free+white-yam-and-palm-oil-sauce+images&simid=608025416734571475&FORM=IRPRST&ck=533EEE83DDF8B9ACF91B7870D6E8D2D2&selectedIndex=0",
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
    image:
      "https://www.bing.com/images/search?view=detailV2&ccid=Tfcnpssd&id=B8D939C89FE1CB975B75556072A210378EF7610D&thid=OIP.TfcnpssdwxP1efP2odUYPgHaEK&mediaurl=https%3a%2f%2fwww.bellanaija.com%2fwp-content%2fuploads%2f2021%2f01%2fSisi-Jemimah-Pepper-Soup.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.4df727a6cb1dc313f579f3f6a1d5183e%3frik%3dDWH3jjcQonJgVQ%26pid%3dImgRaw%26r%3d0&exph=720&expw=1280&q=free+yam-pepper-soup+images&simid=608025756012342095&FORM=IRPRST&ck=43438AD2734305AE16063E70568E59AF&selectedIndex=1",
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
    image:
      "https://www.bing.com/images/search?view=detailV2&ccid=tdPe4ixM&id=ADB970D0B5013C6E6C9ABA61063C6DEFF7497926&thid=OIP.tdPe4ixM-OQOEgxIRtUfpgHaEg&mediaurl=https%3a%2f%2fagameals.com%2fwp-content%2fuploads%2f2022%2f04%2fmaxresdefault-23-1140x694.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.b5d3dee22c4cf8e40e120c4846d51fa6%3frik%3dJnlJ9%252b9tPAZhug%26pid%3dImgRaw%26r%3d0&exph=694&expw=1140&q=free+yam-and-egg-sauce+images&simid=608016126720673997&FORM=IRPRST&ck=2DB781E41F09A228B8F5AE102704F677&selectedIndex=22",
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
