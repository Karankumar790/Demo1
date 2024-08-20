import React, { useState } from 'react';
import './App.css'
import Paper from '@mui/material/Paper';
import { Grid, Typography, Box, Button, Card } from '@mui/material';
import Header from './components/Header.jsx'


function App() {

  const [backgroundColor, setBackgroundColor] = useState('white');

  const changeBackgroundColor = () => {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBackgroundColor(randomColor);
  };
  return (

    <>
      <Header />
      <Grid container spacing={2} sx={{ height: '94.88vh', width: 'full', bgcolor:{backgroundColor}, overflowY: 'hidden'}}>
        <Grid item lg={6} md={6} sm={12} xs={12}  sx={{ display: 'flex', justifyContent: 'center', alignItemscen: 'center' }}>
          <Grid item lg={10} md={10} sm={10} xs={10} bgcolor={'yellow'} margin='auto'>
            <Card>
              <Box textAlign='center' mt={6} >
                <Typography variant='h2'>Main page</Typography>
                <Typography variant='h6'>Welcome to our website! We're excited to share our mission and vision with you. Our goal is to provide innovative solutions that make a difference in people's lives. With a team of experts and a passion for excellence, we strive to deliver high-quality products and services that exceed expectations. Explore our website to learn more about our offerings and how we can help you achieve your goals. Discover our story, meet our team, and get in touch with us to start a conversation. We look forward to collaborating with you and creating a brighter future together!</Typography>
                <Typography variant='h6'>
                  "Our mission is to empower individuals and organizations through innovative solutions, exceptional service, and a commitment to excellence. We believe in fostering a culture of creativity, collaboration, and continuous learning.
                  We offer a range of products and services designed to meet the unique needs of our clients. From [specific product/service] to [specific product/service], our solutions are tailored to help you achieve success.
                </Typography>
                <Box p={4}>
                  <Button variant='contained' onClick={changeBackgroundColor}>Change Background Color</Button>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src="https://images.pexels.com/photos/27640119/pexels-photo-27640119/free-photo-of-a-marble-table-with-a-book-and-a-vase.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" style={{ backgroundSize: "cover", backgroundPosition: "right", backgroundRepeat: "no-repeat", borderRadius: '20px' }} alt="" />
        </Grid>

      </Grid>
    </>
  )
}

export default App
