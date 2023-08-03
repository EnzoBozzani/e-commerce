'use client';

import { Container } from "reactstrap"
import ProductsList from "./ProductsList"
import { ProductType } from "../services/products"

export const ProductContainer = (props: {products: ProductType[]}) => {
    return (
        <Container className="mb-5">
          <h1 className="my-5">
            Nossos Produtos
          </h1>

          <ProductsList products={props.products!} />
        </Container>
    )
}