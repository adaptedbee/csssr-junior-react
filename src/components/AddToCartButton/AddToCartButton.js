import React from 'react';

import './AddToCartButton.css';

const AddToCartButton = () => {
  return (
    <button className="button">
      {true ? (
        <span>Добавить в корзину</span>
      ) : (
        <span>Удалить из корзины</span>
      )}
    </button>
  );
}

export default AddToCartButton;
