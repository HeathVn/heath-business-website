import React from 'react';
import {Card, CardMedia, CardContent,CardActions,Typography, IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons'
import {RiMoneyDollarCircleFill} from 'react-icons/ri'

import useStyles from './styles';

import './styles.css';

export const Product = ({ product }) => {

    const classes = useStyles();

    return (
        <div className="cardBorder">
           <Card className={classes.root} >
               <CardMedia className={classes.media} image={product.image} title={product.name} />
               <CardContent>
                   <div className={classes.cardContent}>
                        <Typography variant ="h5" gutterBottom>
                            {product.name}
                        </Typography >
                        <Typography variant ="h5">
                            {product.price}
                        </Typography>
                    </div>
                        <Typography variant ="body2" color="textSecondary"> {product.description}
                        </Typography>
               </CardContent>
               <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label="Add to Cart">
                        <RiMoneyDollarCircleFill className="money"/>
                    </IconButton>
               </CardActions>
            </Card> 
          </div>  
        
    )
}

export default Product