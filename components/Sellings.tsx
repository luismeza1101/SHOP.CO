import {top_sellings} from '@data/sellings'
import ProductsSlider from './ProductsSlider'
import Link from 'next/link'

const Sellings = () => {
  return (
    <section className="w-[90%] mx-auto pt-12 text-center">
      <h2 className="subtitle">TOP SELLING</h2>
      <ProductsSlider array={top_sellings}/>
      <Link href='/all-product' className="flex items-center justify-center border-2 w-[90%] mx-auto h-14 rounded-full desktop:w-[252px]">View All</Link>
    </section>
  )
}

export default Sellings
