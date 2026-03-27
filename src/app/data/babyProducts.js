// src/app/data/babyProducts.js

export const babyProductsall = [
  {
    id: "jhabla",
    name: "Muslin Jhabla - PACK OF 2 - Assorted designs",
    type: "assorted-pack",
    packSize: 2,
    price: 280,
    sizes: ["0-3m","3-6m","6-9m","9-12m"],
    images: [
      "/images/jhabla/j1.png",
      "/images/jhabla/j2.png",
      "/images/jhabla/j3.png",      
      "/images/jhabla/melonlemon.png",
      "/images/jhabla/pineapple.png",
      "/images/jhabla/ducktortoise.png",
    ],
    stockBySize: {
    "0-3m": 10,
    "3-6m": 0,    
    "6-9m": 5,
    "9-12m": 0    
  },
    description: "Pack of 2 assorted muslin jhablas. Designs may vary."    
  },
  {
    id: "sleeveless",
    name: "Muslin Frock - PACK OF 2 - Assorted designs",
    type: "assorted-pack",
    packSize: 2,
    price: 380,
    sizes: ["6-9m","12-18m","18-24m"],
    images: ["/images/sleeveless/s1.png","/images/sleeveless/s2.png",
             "/images/sleeveless/s3.jpg","/images/sleeveless/4.png",
             "/images/sleeveless/5.png","/images/sleeveless/6.png","/images/sleeveless/7.png"],
    stockBySize: {
    "0-3m": 1,
    "3-6m": 4,     
    "6-9m": 2,
    "9-12m": 0     
  },         
    description: "Pack of 2 assorted muslin sleeveless frock. Designs may vary.",
    stock: 10+1+2
  },
  {
    id: "fitflare-blue",
    name: "Colorful Floral Frock",
    type: "color-variant",
    packSize: 1,
    price: 320,
    sizes: ["2-3y","3-4y","4-6y","6-8y","8-10y","10-12y"], 
    variants: [
    {
      color: "Blue Floral",
      image: "/images/fitflare/baby3.jpg",
      stockBySize: {
      "2-3y": 0,
      "3-4y": 1,     
      "4-6y": 1,
      "6-8y": 1,
      "4-6y": 1,
      "4-6y": 1 },
      
    },
    {
      color: "Yellow Floral",
      image: "/images/fitflare/baby2.jpg",
      stockBySize: {
      "2-3y": 1,
      "3-4y": 1,     
      "4-6y": 1,
      "6-8y": 1,
      "4-6y": 1,
      "4-6y": 1 },
    },
    {
      color: "Royalblue Floral",
      image: "/images/fitflare/baby1.jpg",
      stockBySize: {
      "2-3y": 1,
      "3-4y": 1,     
      "4-6y": 1,
      "6-8y": 1,
      "4-6y": 1,
      "4-6y": 1 },
    }
  ],       
    description: "Soft cotton floral dress.",    
  },
]
