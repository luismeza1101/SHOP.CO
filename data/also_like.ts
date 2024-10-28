import { Type_Product } from "../types";
import { all_products } from "./all_products";

const names_products = ['Polo with Contrast Trims', 'Gradient Graphic T-shirt', 'Polo with Tipping Details', 'Black Striped T-shirt']

export const also_like : Type_Product[] = all_products.filter(product => names_products.includes(product.name))