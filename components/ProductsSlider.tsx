import Carrousel from '@components/Carrousel'
import Product from '@components/Product'
import { Type_Product } from '../types'

interface Props{
    array: Type_Product[]
}

const ProductsHero: React.FC<Props> = ({array}) => {
  return (
    <>
      <Carrousel array={array} />
      <div className="hidden my-10 md:grid grid-cols-2 grid-rows-2 gap-5 desktop:grid-cols-4 desktop:grid-rows-1 px-5">
        {array.map(product => (
          <Product
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            discount={product.discount}
            initial_price={product.initial_price}
          />
        ))}
      </div>
    </>
  )
}

export default ProductsHero
