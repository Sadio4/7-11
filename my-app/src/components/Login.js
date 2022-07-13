import React from "react";  
//import { Box } from "@mui/system"; 
import Grid from "@mui/material/Grid"; 
import Typography from '@mui/material/Typography';
import {Avatar, Button, Paper, TextField, Link, FormControlLabel, Checkbox} from '@mui/material'; 



const Login=()=> {
     const paperStyle = {
          padding: "20px",
          height: "70vh/",
          width: 280,
          margin: "20px auto"
     };

     const avatarStyle={
          backgroundColor: "green"
     };

     const textfield ={
          margin: '10px'
     };

     const btnstyle = {
          margin: '8px 0'
     };


     return (
          <Grid>
               <Paper elavation={10} style={paperStyle}>
                    <Grid align="center">
                         <Avatar style={avatarStyle}>   </Avatar>
                         <h4>Sign in</h4>
                    </Grid>

                    <TextField
                         label='Username'
                         style={textfield}
                         placeholder='Enter Username'
                         fullWidth
                         required>
                    </TextField>

                    <TextField
                         label='Password'
                         style={textfield}
                         placeholder='Enter Password'
                         type = 'password'
                         fullWidth
                         required>
                    </TextField>

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
                         <Link href="https://www.youtube.com/watch?v=2ZIpFytCSVc">
                              Forgot Password?
                         </Link>

                    </Typography>

                    <Typography
                         style = {textfield}>
                         <Link href="https://www.google.com/search?q=quandale+dingle&sxsrf=ALiCzsYJX38mKUbU4geT3OLvFXDscZ0CSQ:1657726666318&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiQ99GImfb4AhX0pIkEHYleBnIQ_AUoAXoECAMQAw&biw=1920&bih=1011&dpr=1#imgrc=5ahCPAS73LJ-nM">
                              Don't have an account? Sign up!
                         </Link>
                    </Typography>
               </Paper>
          </Grid>
     
     )
}


     



export default Login; 