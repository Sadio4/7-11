import React from "react";  
import { Box } from "@mui/system"; 
import Grid from "@mui/material/Grid"; 
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper'; 
import Grid from '@mui/material/Grid'; 
import Typography from '@mui/material/Typography';
import {Avatar, Button, Paper, Textfield, Link, FormControlLabel, Checkbox} from '@mui/material'; 



const Login=()=> {
     const paperStyle = {
          padding: "20px",
          height: "70vh\", ",
          width: "280",
          margin: "20px auto"
     };

     const avatarStyle = {
          backgroundColor: "green"
     };

     const textfield = {
          margin: '10px'
     };

     const btnstyle = {
          margin: '8px 0'
     };


     return (
          <Grid>
               <Paper elavationb={10} style={paperStyle}>
                    <Grid align="center">
                         <Avatar style={avatarStyle}>   </Avatar>
                         <h4>Sign in</h4>
                    </Grid>

                    <Textfield
                         label='Username'
                         style={textfield}
                         placeholder='Enter Password'
                         type='Password'
                         fullWidth
                         required>
                    </Textfield>

                    <FormControlLabel
                         control={
                              <Checkbox
                                   name='Checked'
                                   color='primary' 
                              />}
                         label='Remeber Me' 
                         />
                    <Button
                         type="submit"
                         color="primary"
                         variant="contained"
                         style={btnstyle}
                         fullWidth
                    >
                         Sign In
                    </Button>

                    <Typography
                         style={textfield}>
                         <Link href="#">
                              Forgot Password?
                         </Link>

                    </Typography>

                    <Typography>
                         style = {textfield}
                         <Link href="#">
                              Don't have an account? Sign up!
                         </Link>
                    </Typography>
               </Paper>
          </Grid>
     
     )
}


     



export default Login; 