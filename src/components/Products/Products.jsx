import React from 'react';
import { Grid } from '@material-ui/core';
import photo from '../Products/web.jpg'

import Product from './Product/Product';

const products = [
    {id:1, name: 'Website Template', description:'Customizable Website Template/Bootstrap',image:'https://www.multidots.com/wp-content/uploads/2020/01/code-quality-standard.png?quality=90', price:'$250'}
];

const Products =() => {
    return (
        <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))}
        </Grid>
    </main>
    )   
}

export default Products;