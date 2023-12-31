export const auth = {
  register: {
    path: "/auth/login",
    text: "Register",
    other: "Already Register?",
  },

  login: {
    path: "/auth/register",
    text: "Login",
    other: "Yet to login?",
  },
};

export const nav = [
  {
    name: "Home",
    path: "/",
  },

  {
    name: "About Us",
    path: "/aboutus",
  },

  {
    name: "Cuisines",
    path: "/cuisines",
  },

  {
    name: "Contact",
    path: "/contact",
  },
];

export const featuredDetails = [
  {
    name: "Jollof Rice",
    desc: "A spicy rice dish cooked with tomato sauce and other seasonings",
    image:
      "https://zenaskitchen.com/wp-content/uploads/2022/12/jollof-rice.jpg",
    category: "Rice",
    cookTime: "45",
  },

  {
    name: "Banga Stew",
    desc: "A yellow sauce made from palm fruit extract and spices",
    image:
      "https://allnigerianfoods.com/wp-content/uploads/banga-stew-ofe-akwu.jpg",
    category: "Stew",
    cookTime: "90",
  },

  {
    name: "Okra SouP",
    desc: "A slimy soup made from okra and vegetables ",
    image:
      "https://cheflolaskitchen.com/wp-content/uploads/2018/06/Egusi-soup-Recipe-2-480x270.jpg",
    category: "Soup",
    cookTime: "45",
  },
];
