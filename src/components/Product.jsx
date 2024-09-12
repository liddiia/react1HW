//  export const productsData = [
//     { id: '1', titel: 'Taco1', price: 5, discount: null},
//     { id: '2', titel: 'Taco2', price: 10, discount: 5 , } ,
//     { id: '3', titel: 'Taco3', price: 15, discount: 10 , },
//   ];

import css from './Product.module.css';

export const Product = ({
  id,
  titel,
  price,
  discount,
  hendelDeleteProduct,
  openModal,
}) => {
  const productBg = discount ? '#73b86e' : '#f5834f';

  const productStyles = {
    backgroundColor: productBg,
  };

  return (
    <div className={css.product} style={productStyles}>
      <h2>{titel}</h2>

      <img
        src="<https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640>"
        alt="Tacos With Lime"
        width="640"
      />

      {discount && <h3>Discount:{discount}%</h3>}

      {/* {discount ? ( <h3>Discount:{discount}%</h3>) :<p> Discount 0% </p>} */}

      <p>Price:{price}</p>
      <button type="button" className={css.buttonAddToCard}>
        Add to cart
      </button>
      <button
        onClick={() => openModal({ titel, price, discount })}
        type="button"
        className={css.buttonAddToCard}
      >
        See the details
      </button>
      <button
        onClick={() => hendelDeleteProduct(id)}
        type="button"
        className={css.buttonDeleteProduct}
      >
        &#10060;
      </button>
    </div>
  );
};
