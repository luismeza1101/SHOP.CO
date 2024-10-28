import { Type_Product } from "../types";
import { all_products } from "./all_products";

const names_products = ['Vertical Striped Shirt', 'Courage Graphic T-shirt', 'Loose Fit Bermuda Shorts', 'Faded Skinny Jeans']

export const top_sellings : Type_Product[] = all_products.filter(product => names_products.includes(product.name))