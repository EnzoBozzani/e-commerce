import { Metadata, NextPage } from 'next';
import { Header, ProductContainer } from '@/src/components'
import { fetchProducts, ProductType } from '@/src/services/products';

export const metadata: Metadata = {
  title: 'Nossos Produtos',
  description: 'Conheça todos os nossos produtos',
}

const Products: NextPage = async () => {
  const products: ProductType[] = await fetchProducts();
  return (
    <>
      <Header />

      <main>
        <ProductContainer products={products}/>
      </main>
    </>
  )
}

export default Products