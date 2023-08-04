import { Header } from "@/src/components";
import ProductDetails from "@/src/components/ProductDetails";
import { fetchProduct, fetchProducts } from "@/src/services/products";
import { NextPage } from "next";

type Props = {
    params: { id: string }
}

export async function generateMetadata({ params }: Props) {
    const product = await fetchProduct(params.id);
    return {
        title: product.name,
        description: product.description
    }
}

export async function generateStaticParams() {
    const products = await fetchProducts();
    return products.map(prod => {
        { id: `${prod.id}` }
    })
}

const Product: NextPage<Props> = async ({ params }) => {
    const product = await fetchProduct(params.id);

    return (
        <div>
            <Header />
            <ProductDetails product={product} />
        </div>
    )
}

export default Product;