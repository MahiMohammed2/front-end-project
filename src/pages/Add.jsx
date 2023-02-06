import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const navigateIn = useNavigate()
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [image, setImage] = useState('');
  
  
  
  const createProduct = async (e) => {
  
    e.preventDefault();
    const formData = new FormData();

      formData.append('name', name);
      formData.append('price', price);
      formData.append('description', description);
      formData.append('image', image);


    await axios.post('http://127.0.0.1:8000/api/products', formData ).then(({ data }) => {
      console.log(data.message);
      window.location.reload(false);
    }).catch(({ res }) => {
      if (res.status === 422) {
        console.log(res.data.errors);
      } else {
        console.log(res.data.message);
      }
    })
  }
  const hundelChanger = (e) => {
    setImage(e.target.files[0]);
  }
  return (
    <div>
    <form onSubmit={createProduct}>
      <div className='form'>
        <h1>Add product</h1>
        <span className='warning'><span>Warning :</span> All information is requidred please entre your product data before <span>"Add this product"</span></span>
        <input required type='text' className='input' name='name' value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Entre name of your product' />

        <input type='number' required className='input' name='price' value={price} onChange={(e)=>{setPrice(e.target.value)}} placeholder='Entre price of your product' />

        <input type='file' required className='input-file' onChange={hundelChanger} name='image' />
        
        <textarea name='description' required value={description} onChange={(e)=>{setDescription(e.target.value)}} placeholder='Entre discription of your product' />
        <div className='controle'>
          <button className='btn btn-primary' type='submit'>Add this product</button>
        </div>
      </div>
    </form>
    </div>
  )
}

export default Add