import { NextResponse } from 'next/server';
import products from '../../../../database.json';

export async function GET( req: Request, { params } : { params : { id : string } }){
    const { id } = params;
    const product = products.find(prod => prod.id === +id);
    return NextResponse.json(product);
}