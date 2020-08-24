import { Product } from "../types";

export const pastOrders: Product[] = [
  {
    id: String(Math.random()),
    name: "McDonald's",
    tags: ["Chinese", "American"],
    price: 19.99,
    image: require("../assets/images/products/burger-2.jpg"),
    time: "25min",
    aspectRatio: 1.8,
    burger: true,
    ratings: {
      average: 4.5,
      total: 100,
    },
  },
  {
    id: String(Math.random()),
    name: "McDonald's",
    tags: ["Chinese", "American"],
    price: 9.99,
    image: require("../assets/images/products/fruit-1.jpg"),
    time: "25min",
    aspectRatio: 1.6,
    fruit: true,
  },
  {
    id: String(Math.random()),
    name: "McDonald's",
    tags: ["Chinese", "American"],
    price: 14.99,
    image: require("../assets/images/products/sandwich-1.jpg"),
    time: "25min",
    aspectRatio: 1.6,
    sandwich: true,
  },
  {
    id: String(Math.random()),
    name: "McDonald's",
    tags: ["Chinese", "American"],
    price: 9.99,
    image: require("../assets/images/products/fruit-2.jpg"),
    time: "25min",
    aspectRatio: 1.6,
    fruit: true,
  },
];

export const upcomingOrders: Product[] = [
  {
    id: String(Math.random()),
    name: "McDonald's",
    tags: ["Chinese", "American"],
    price: 9.99,
    image: require("../assets/images/products/burger-1.jpg"),
    time: "25min",
    aspectRatio: 1.2,
    burger: true,
  },
  {
    id: String(Math.random()),
    name: "McDonald's",
    tags: ["Chinese", "American"],
    price: 7.99,
    image: require("../assets/images/products/soup-1.jpg"),
    time: "25min",
    aspectRatio: 1.2,
    soup: true,
  },
];
