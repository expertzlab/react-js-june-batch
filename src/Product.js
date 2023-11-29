import AddToCart from "./AddToCart";
import { Card } from "@mui/material";
import { CardHeader } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";

var Product = function (props){
    return(
        <Card sx={{maxWidth:'300px', border:'1px solid blue', boxShadow:'1px 1px blue'}}>
        <CardHeader title={props.title} />
        <CardMedia
            	component="img"
            	height="194"
            	image={props.imgurl}
            	alt="Paella dish"
        	/>

        <CardContent>
            Product Name: {props.name} <br />
            product Price: {props.price} <br />
            <AddToCart name='Add Product' />
        </CardContent>
        </Card>
    );
}

export default Product;