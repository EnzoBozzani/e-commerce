import { Header } from '@/src/components';
import { CartContainer } from '@/src/components/CartContainer';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Carrinho',
  description: 'My Cart',
}

const Cart: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <CartContainer/ >
      </main>
    </>
  )
}

export default Cart;