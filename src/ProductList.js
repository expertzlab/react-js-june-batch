import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import Product from './Product';

var ProductList = function(props){

    let [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3001/products.json')
        .then((data) => {
            return data.json()
        } )
        .then((data) => {
            console.log(data)
            setProducts(data)
        })
    },[])

  return(
    <div>
        
        <Grid container spacing={2} m={8}>

        	<p>Hello, world!</p>
            {
                products.map((product) => (
                    <Grid component="span" sx={4}>
                        <Product name={product.name} price={product.price} 
                          imgurl={product.imgurl} />
                    </Grid>
                ))
            }
        	<Button variant="contained"
                	color="secondary"
                	size="large">
            	Submit
            	</Button>
    	</Grid>
    </div>
  )
}

export default ProductList;