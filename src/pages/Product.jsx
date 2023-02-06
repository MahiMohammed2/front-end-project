import { Card, CardContent, CardMedia, Typography, CardActions, } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Product = () => {
    //states :
    const [product, setProduct] = useState([]) //data state
    const [isLoading, setIsLoading] = useState(false) //loading state
    const navigate = useNavigate()
    const prod = async () => {
        try {
            setIsLoading(true) //loading

            const res = await axios.get('http://localhost:8000/api/products')
            setProduct(res.data) //call all datas in backend

            setIsLoading(false) //stop loading
        }
        catch (err) {
            setIsLoading(false) //stop loading in err
            console.log(err)
        }
    }
    useEffect(() => {
        prod();
    }, []);
    // console.log(product)



    const deleteProd = async (id) => {
        await axios.delete('http://localhost:8000/api/products/' + id)
        window.location.reload(false);
        
    }
    deleteProd();



    return (
        <div className='App'>
            <h1>Hello !</h1>
            <h1>This is my products :</h1>
            <div className='card-container'>
                {isLoading ?
                    <h1>Loading...</h1> :
                    product.map((e) => (
                        <Card sx={{ width: 300 }}>
                            <CardMedia image={e.image_url} sx={{ height: 300 }} />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                    {e.name}
                                </Typography>
                                <Typography variant='h5'>
                                    {e.type}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {e.description}
                                </Typography>
                                <Typography variant='h5'>
                                    {e.price} MAD
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <button className='btn btn-primary' onClick={() => navigate(`edit/${e.id}`)}>Edit</button>
                                <button className='btn btn-danger' onClick={() => deleteProd(e.id)}>Delete</button>
                            </CardActions>
                        </Card >
                    ))
                }


            </div>

        </div>
    )
}

export default Product