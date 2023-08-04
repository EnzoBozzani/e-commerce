'use client';

import { Container } from "reactstrap";
import CartTable from "./CartTable";
import CartTotal from "./CartTotal";

export const CartContainer = () => {
    return (
        <Container className="mb-5">
            <h1 className="my-5">
                Carrinho
            </h1>

            <CartTable />
            <CartTotal />
        </Container>
    )
}