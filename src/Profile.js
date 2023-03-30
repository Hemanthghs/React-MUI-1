import React from 'react'
import { Grid, Container, Typography, Button, Card, CardMedia, CardActions, CardContent } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import { deepPurple } from '@mui/material/colors'

const Profile = () => {
  return (
    <>
        <Container maxWidth="md" style={{marginTop:'40px'}}>

                <Card>
                <Container align="center"><Avatar sx={{ bgcolor: deepPurple[500] }} style={{marginTop:"20px", height:"200px", width:"200px", fontSize:"64px"}}>HS</Avatar></Container>
                <CardContent>
                    <Typography align="center" gutterBottom variant="h5">
                        Heading
                    </Typography>
                    <Typography align="center">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, ad?
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="large">EDIT</Button>
                </CardActions>
                </Card>

        </Container>
    </>
  )
}

export default Profile