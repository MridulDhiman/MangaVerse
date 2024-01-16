import React from 'react'
import { useParams } from 'react-router-dom';
import CheckoutSuccess from '../components/checkout/CheckoutSuccess';
import CheckoutFailure from '../components/checkout/CheckoutFailure';

const CheckoutPage = () => {
const {status} = useParams();


  return (
<>
{status === 'success' && <CheckoutSuccess/>}
{status === 'failure' && <CheckoutFailure/>}
</>
  )
}

export default CheckoutPage;