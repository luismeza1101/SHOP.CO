import { Type_Product } from "../types";
import { all_products } from "./all_products";

const names_products = ['T-shirt with Tape Details', 'Skinny Fit Jeans', 'Checkered Shirt', 'Sleeve Striped T-shirt']

export const new_arrivals : Type_Product[] = all_products.filter(product => names_products.includes(product.name))