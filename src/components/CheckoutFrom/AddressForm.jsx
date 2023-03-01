import React, {useState, useEffect} from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core'
import {Link} from 'react-router-dom'
import { useForm, FormProvider } from 'react-hook-form'

import FormInput from './CustomTextField'
import { commerce } from '../lib/commerce'
const AddressForm = ({ checkoutToken, next }) => {
  const [shippingCountries, setShippingCountries] = useState([])
  const [shippingCountry, setShippingCountry] = useState('')
  const [shippingSubdivisions, setShippingSubdivisions] = useState([])
  const [shippingSubdivision, setShippingSubdivision] = useState('')
  const [shippingOptions, setShippingOptions] = useState([])
  const [shippingOption, setShippingOption] = useState('')
  
  const methods = useForm();

  console.log(checkoutToken.live.line_items)

  // const fetchShippingCountries = async (checkoutTokenId) => {
  //   const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);

  //   setShippingCountries(countries);
  //   setShippingCountry(Object.keys(countries)[0]);
  // };

  // const fetchSubdivisions = async (countryCode) => {
  //   const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);

  //   setShippingSubdivisions(subdivisions);
  //   setShippingSubdivision(Object.keys(subdivisions)[0]);
  // };

  // const fetchShippingOptions = async (checkoutTokenId, country, stateProvince = null) => {
  //   const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region: stateProvince });

  //   setShippingOptions(options);
  //   setShippingOption(options[0].id);
  // };

  // useEffect(() => {
  //   fetchShippingCountries(checkoutToken.id);
  // }, []);

  // useEffect(() => {
  //   if (shippingCountry) fetchSubdivisions(shippingCountry);
  // }, [shippingCountry]);

  // useEffect(() => {
  //   if (shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
  // }, [shippingSubdivision]);


  return (
    <>
      <Typography variant='h6' gutterBottom>Shipping Address</Typography>
      <FormProvider {...methods}>
          <form onSubmit={(data) => next({ ...data })}>
            <Grid container spacing={3}>
              <FormInput required name='firstName' label='First name'/>
              <FormInput required name='lastName' label='Last name'/>
              <FormInput required name='address1' label='Address'/>
              <FormInput required name='email' label='Email'/>
              <FormInput required name='city' label='City'/>
              <FormInput required name='zip' label='ZIP / Postal Code'/>
              {/* <Grid item xs={12} sm={6}>
                <InputLabel>Shipping Country</InputLabel>
                <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                  <MenuItem>
                    Select Me
                  </MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel>Shipping Subdivisions</InputLabel>
                <Select value='' fullWidth onChange=''>
                  <MenuItem>
                    Select Me
                  </MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel>Shipping Options</InputLabel>
                <Select value='' fullWidth onChange=''>
                  <MenuItem>
                    Select Me
                  </MenuItem>
                </Select>
              </Grid> */}
            </Grid>
            <br/>
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
              <Button component={Link} to='/cart' variant="outlined">Back to cart</Button>
              <Button type='submit' variant="contained" color="primary">Next</Button>
            </div>
          </form>
      </FormProvider>
    </>
  )
}

export default AddressForm