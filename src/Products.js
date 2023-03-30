import React from 'react'
import { Grid, Container, Typography, Button, Card, CardMedia, CardActions, CardContent } from '@mui/material'

const productsList = [
    {name:"Product 1", cost:"200/-"},
    {name:"Product 2", cost:"1000/-"},
    {name:"Product 3", cost:"299/-"},
    {name:"Product 4", cost:"219/-"},
    {name:"Product 5", cost:"499/-"},
    {name:"Product 6", cost:"200/-"},
    {name:"Product 7", cost:"355/-"},
    {name:"Product 8", cost:"677/-"},
    {name:"Product 9", cost:"999/-"},
]

const Products = () => {
  return (
    <>
        <Container maxWidth="md" style={{marginTop:'40px'}}>
        <Grid container spacing={4}>
            {
                productsList.map((item) => 
                    <Grid item xs={12} sm={6} md={4}>
                <Card>
                <CardMedia 
                    component="img"
                    image="https://source.unsplash.com/random"
                    title="Image Title"
                    height="180"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        {item.name}
                    </Typography>
                    <Typography>
                        {item.cost}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button>Share</Button>
                    <Button>Learn More</Button>
                </CardActions>
                </Card>
            </Grid>
                )
            }
        </Grid>
        </Container>
    </>
  )
}

export default Products