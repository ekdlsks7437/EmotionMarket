import { useContext } from 'react';

import EmoItemForm from './EmoItemForm';
import classes from './EmoItem.module.css';
import CartContext from '../../../store/cart-context';

const EmoItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };

  return (
    <li className={classes.emo}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <EmoItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default EmoItem;
