import React from 'react'
import {Typography, Button, Card, CardActions, CardContent, CardMedia} from '@material-ui/core'
import UseStyles from './styles'
const CartItem = ({item, onUpdateCartQty, onRemoveFromCart}) => {
  const classes = UseStyles()
  // console.log(item)
  return (
    <div>
      <Card>
        <CardMedia image={item.image.url} className={classes.media}></CardMedia>
        <CardContent className={classes.cardContent}>
          <Typography variant="h4">{item.name}</Typography>
          <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          {/* <div className={classes.buttons}>
            <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
            <Typography>{item.quantity}</Typography>
            <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
          </div> */}
          <div className={classes.buttons}>
          <Button variant="contained" type="button" color="secondary" onClick={() => onRemoveFromCart(item.id)}>Remove</Button>
          </div>
        </CardActions>
      </Card>
    </div>
  )
}

export default CartItem