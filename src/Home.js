import React from 'react'
import { Container, Typography } from '@mui/material'

const Home = () => {
  return (
    <>
        <Container style={{marginTop:'100px'}}>
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                Hello, User
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non iure excepturi doloremque ipsam beatae iusto incidunt ab eum consequuntur in.
            </Typography>
        </Container>
    </>
  )
}

export default Home