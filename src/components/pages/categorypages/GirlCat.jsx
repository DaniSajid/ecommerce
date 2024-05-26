import { Card, CardActionArea, CardActions, CardMedia, Typography, CardContent, Grid, Rating } from '@mui/material'
import CardBtn from '../Card/CardBtn'
import React, { useContext } from 'react'
import { GirlShoesData } from '../../../productData';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/Context';

const GirlCat = () => {
    const { addToCart } = useContext(CartContext);
    const navigate = useNavigate()
    const btnDetail = (product) => {
        console.log(product);
        navigate(`/products/${product.id}`, { state: { product } });
    };
    return (
        <>
            {GirlShoesData.map((value, index) => (
                <Grid key={index} item lg={3} md={4} sm={6} xs={12} >
                <Card  className='mx-2' sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            className='card-img-css'
                            height="140"
                            image={value.imagePath}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {value.name}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                {value.price}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {value.desc}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <Rating value={value.rating} precision={0.5} readOnly />
                    <CardActions>
                        <CardBtn onClick={() => btnDetail(value)} BtnCardName={value.BtnText} />
                        <CardBtn onClick={() => addToCart(value)} BtnCardName={value.BtnAdd} />
                    </CardActions>
                </Card>
                </Grid>
            ))}
        </>
    )
}

export default GirlCat;