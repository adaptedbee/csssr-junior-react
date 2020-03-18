import React from 'react';
import PropTypes from 'prop-types';

import './AddToCartButton.css';

class AddToCartButton extends React.Component {
  handleClick = () => {
    if (this.isProductInCart()) {
      this.props.removeFromCart(this.props.product.id);
    } else {
      this.props.addToCart(this.props.product.id);
    }
  }
  isProductInCart = () => {
    return this.props.cartProducts.includes(this.props.product.id);
  }

  render() {
    return (
      <button onClick={this.handleClick} className="button">
        {!this.isProductInCart() ? (
          <span>Добавить в корзину</span>
        ) : (
          <span>Удалить из корзины</span>
        )}
      </button>
    );
  }
}

AddToCartButton.propTypes = {
  product: PropTypes.object,
  cartProducts: PropTypes.array,
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func
}

export default AddToCartButton;
