import React from 'react'
import {Container, Typography, Button, Grid} from '@material-ui/core'
import UseStyles from './styles'
import CartItem from './CartItem/CartItem';
import {Link} from 'react-router-dom'
const Cart = ({ cart, totalItems, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {

  const classes = UseStyles();

  const isEmpty = !totalItems;
  
  const EmptyCart = () => (
    <Typography variant="subtitle1"> You have no items in your cart,
    <Link to="/" className={classes.link}> start adding some</Link>!
    </Typography>
  )

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">Subtotal : {cart.subtotal.formatted_with_symbol}</Typography>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty Cart</Button>
          <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
        </div>
      </div>
    </>
  )

  console.log(isEmpty)
          
  if (cart && !cart.line_items) return "Loading..."

  return (
    <Container>
      <div className={classes.toolbar}/>
      <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
      { isEmpty ? EmptyCart() : FilledCart()}
    </Container>
  )
}

export default Cart