import React, {useEffect,useState} from 'react';
import { Grid } from '@material-ui/core';
import photo from './web.jpg'

import Product from './Product/Product';

import {getServices} from '../../actions/services.js'
import {useDispatch} from 'react-redux';

import {useSelector} from 'react-redux';

 /* 
const products = [
    {id:1, name: 'Website Template', description:'Customizable Website Template/Bootstrap',image:'https://www.multidots.com/wp-content/uploads/2020/01/code-quality-standard.png?quality=90', price:'$250'},
    {id:2, name: 'Shopify Website Customization', description:'Customization of shopify website',image:photo, price:'$250'}

]; */

const Products =() => {
    
    
    const dispatch = useDispatch();


   useEffect(() => {
     dispatch(getServices());
      
   }, [dispatch]);

    const products = useSelector((state) => state.services);
    console.log(products);

    return (
        <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                
                    <Grid item justify="center" xs={12} sm={6} md={4} lg={3} >
                    <Product product={product} />
                </Grid>
                
                
            ))}
        </Grid>
    </main>
    )   
}

export default Products;