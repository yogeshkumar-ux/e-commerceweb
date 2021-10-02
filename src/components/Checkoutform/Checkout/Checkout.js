import React, {useState} from 'react';
import {Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button} from '@material-ui/core'
import useStyles from './styles'
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';

const steps =['shipping address', 'paymentdetails']

const Checkout = () => {

    const [activeStep, setActiveStep] = useState(0)
    const classes = useStyles()

  const Form = () => activeStep === 0
   ? <AddressForm/>
   : <PaymentForm/>

   const Confirmation = () => {
       <div>
           conform
       </div>
   }
    
    return (
        <>
        <div className = {classes.toolbar}/>
        <main>
            <Paper className = {classes.paper}>
                <Typography variant = "h4" align = "center"> checkout</Typography>
             <Stepper activeStep={activeStep} className = {classes.stepper}>
            {steps.map((step)=>(
              <Step key = {step}>
               <StepLabel>{step}</StepLabel>  
               </Step>
            ))}
            </Stepper>
            {activeStep === steps.length ? <Confirmation/> : <Form/>}
            </Paper>
        </main>

        

        </>
    )
}

export default Checkout