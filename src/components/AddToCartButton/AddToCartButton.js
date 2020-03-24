import React from 'react';
import PropTypes from 'prop-types';

import './AddToCartButton.css';

class AddToCartButton extends React.Component {
  handleClick = () => {
    if (this.isProductInCart()) {
      this.props.removeFromCart(this.props.product);
    } else {
      this.props.addToCart(this.props.product);
    }
  }
  isProductInCart = () => {
    return this.props.cartProducts.find(item => item.id === this.props.product.id);
  }

  render() {
    return (
      <button 
        onClick={this.handleClick} 
        disabled={this.props.isSaving} 
        className="button"
      >
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
  removeFromCart: PropTypes.func,
  isSaving: PropTypes.bool,
}

export default AddToCartButton;
