import { Header } from '@/src/components';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Carrinho',
  description: 'Meu carrinho de compras',
}

const Cart: NextPage = () => {
  return (
    <>
      <Header />
      <h1>
        Carrinho
      </h1>
    </>
  )
}

export default Cart;