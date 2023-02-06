import { Card, CardContent, CardMedia,Typography,CardActions, } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Edit from './Edit';

const Home = () => {
//states :
  const [product, setProduct] = useState([]) //data state
  const [isLoading, setIsLoading] = useState(false) //loading state
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const prod = async () => {
    try{
      setIsLoading(true) //loading
      
      const res = await axios.get('http://localhost:8000/api/products')
      
      setProduct(res.data) //call all datas in backend
      
      setIsLoading(false) //stop loading
    }
    catch(err)
    {
      setIsLoading(false) //stop loading in err
      console.log(err)
    }
    }
    prod();
  }, []);
// console.log(product)

  return (
    <div className='App'>
      <h1>Hello !</h1>
      <h1>welcom to my Store :{')'}</h1>
      <div className='card-container'>
      {isLoading ?
      <h1>Loading...</h1>:
        product.map((e) => (
          <Card sx={{ width:300 }}>
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
            <button className='btn btn-primary'>Buy</button>
            <button className='btn btn-primary'>Get it</button>
            </CardActions>
          </Card >
))
}
      

</div>

    </div>
  )
}

export default Home