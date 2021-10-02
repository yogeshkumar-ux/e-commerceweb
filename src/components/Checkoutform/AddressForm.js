import React from 'react'
import {InputLabel, Select, MenuItem, Button, Grid, Typography} from '@material-ui/core'
import {useForm, FormProvider} from 'react-hook-form'
import FormInput from './FormInput'
import {Link} from 'react-router-dom'

const AddressForm = () => {

    const methods = useForm();
    return (
        <>
     <Typography variant = "h6" gutterBottom> shipping address</Typography>
     <FormProvider {...methods}>
         <form onSubmit = ''>
         <Grid container spacing = {3}>
              <FormInput required name = 'firstName' label = 'First name' />
              <FormInput required name = 'lastName' label = 'Last Name' />
              <FormInput required name = 'address1' label = 'Address' />
              <FormInput required name = 'email' label = 'Email' />
              <FormInput required name = 'City' label = 'city' />
              <FormInput required name = 'ZIP' label = 'zip' />\
              
         </Grid>
         <div style = {{ display: 'flex', justifyContent: 'space-between' }}>
                  <Button component ={Link} to = "/Cart" variant = 'outlined' color = 'primary'> Back to cart</Button>
                  <Button  variant = 'contained' color = 'primary'>submit  </Button>
              </div>
         </form>
     </FormProvider>
        </>
    )
}

export default AddressForm
