"use client"
 import React from "react";  
import styles from "./page.module.css";  
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'; 
import Typography from '@mui/material/Typography'; 
import FormLayout from "./components/Form";
import Image from 'next/image' 
import Button from "@mui/material/Button";
import Link from "next/link";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; 
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Header from "./components/Header";
import useMediaQuery from '@mui/material/useMediaQuery';
import Input from "./components/Input";


export default function Home() {
  const matches = useMediaQuery('(min-width:600px)'); 
  const [isOpen, setIsOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");

    function toggleOffers() {
    setIsOpen((isOpen) => !isOpen);
  }
  const onEmailChange = (emailValue: string) => {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!emailValue) {
      setEmailError("Required");
    } else if (!emailValue.match(validRegex)) {
      setEmailError("not a valid email address");
    }
     else  {
      setEmailError("");
    }
    setEmail(emailValue);
  }
  return (
    <main className={styles.main}> 
     <div style={{ display: matches ? "none" : "block", width:'100%' }}>
      <Header/>
    </div> 
      <Grid container component="main" sx={{ height: '100vh' }}> 
        <Grid item xs={false} sm={4} md={6}  >
          <div className={styles.qulitycareleft}> 
<img alt="Wecare - Claim $25 in Vacation Spending" src="/bg.png"  />
                 
          </div>  
        </Grid> 
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={0} square>  
           <span style={{ display: matches ? "block" : "none" }}>
      <Header/>
    </span> 
    <Paper className={styles.formwrap} elevation={0}>
       <Box className={styles.formcontainer}>
            <Typography component="h1" variant="h5" sx={{color:'#006658', fontFamily:'none', fontSize:'48px', mb:'20px'}}>
             Sign up
            </Typography>  
            <FormLayout/> 
            <Input
                label={emailError ? emailError : "Email"} 
                name="Email" 
                type="text" 
                value={email}
                onchange={(e)=> onEmailChange(e.target.value)}  
                  error={!!emailError}
              />
            <Button sx={{textTransform:'none', background:'#2B3649', my:2, padding:'8px', fontSize:'16px'}} variant="contained" disableElevation fullWidth><MailOutlineIcon sx={{marginRight:'10px'}}/> Continue with email</Button>
            
           
            <p style={{fontSize:'14px', verticalAlign:'middle'}}>By signing up, I agree to the  <Link href="#" onClick={toggleOffers} style={{color:'#006658'}}>Offer Terms <ExpandMoreIcon style={{fontSize:'16px'}}/></Link>
            </p>
             {isOpen && <>
              <div className="termsandconditions" style={{fontSize:'10px', textAlign:'center', paddingTop:'10px'}}>
              <p>
                I agree to the Offer Terms and understand I am creating a Sharecare account. I agree to the Sharecare Privacy Policy, Terms, and, if applicable to me, the Privacy Notice for California Residents. I consent to Sharecare's processing of any health information I may provide, for the purposes listed in the Privacy Policy. I agree to receive emails, offers, alerts, and other notices. I understand that I can opt-out of marketing communications at any time.
              </p>
            </div>
            </>}  
          </Box>
</Paper>
         
        </Grid>
      </Grid> 
     </main>
  );
}
