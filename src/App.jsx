import {Product} from "./components/Product"
import {Component} from "react"
import {ProductForm} from "./components/ProductForm/ProductForm"
import css from "./App.module.css"
import { nanoid } from "nanoid";

const productsData = [
  { id: '1', titel: 'Taco1', price: 5, discount: null},
  { id: '2', titel: 'Taco2', price: 10, discount: 5 , } ,
  { id: '3', titel: 'Taco3', price: 15, discount: 12 , },
  { id: '4', titel: 'Taco4', price: 20, discount: null , },
  { id: '5', titel: 'Taco5', price: 25, discount: 25 , },
  { id: '6', titel: 'Taco6', price: 27, discount: 20 , },
];

export class App extends Component {
state ={
  counterValue: 0,
  products: productsData,
};

  hendelIncrement =()=> {
 this.setState({counterValue: this.state.counterValue +1})

 // 2 спосіб зміни стану за допомогою кол-бек функції
// this.setState(prevState => {
// return {
//   counterValue: prevState.counterValue + 1,
// };
//  } );

  }
  hendelDecrement =(event)=> {
    if (this.state.counterValue ===0 ) {
      alert("Please, stop! Counter value is already decremented!")
      return
    }
    this.setState({counterValue: this.state.counterValue - 1})
  }
  hendelDeleteProduct =(productId)=> {
this.setState({products: this.state.products.filter((product)=>product.id!==productId),

});
  };
handleAppProduct = (productData)=> {
  const hasDuplicates = this.state.products.some((product) => product.titel === productData.titel);
  if (hasDuplicates){
    alert('Oops, product already exist');
    return;
  }

  // ========== var 1 ==========================
const finalProduct = { ...productData, id: nanoid()}

 // ==================== va2 =======================
//Object/assign({id: nanoid()}, productData)
//================================================

 this.setState({
  products: [...this.state.products, finalProduct]
})
}

  render(){

    // sortuemo za znigkoj
const sortedProducts = [ ...this.state.products].sort(
  (a,b)=> b.discount - a.discount
);

  return (
    <>
    <h1>Hello</h1>
   
<button onClick={this.hendelDecrement}>Decrement</button>
<b>Counter value: {this.state.counterValue} </b>
<button onClick={this.hendelIncrement}>Increment</button>
{this.state.counterValue > 4 && 
  (<div>
  Congratulations! You won the discount promocode 20% OFF - 45##61&
</div>)}

<section className={css.formsSection} >
  <h2> Add prouct Form </h2>
<ProductForm  handleAppProduct={this.handleAppProduct}/>
</section>
    <section className ={css.productList}>
     
     {/* виведення розмітки вар 1 */}
     {/* {productsData.map(product => { 
      return(
        <Product 
        key={product.id} 
        id={product.id}
        titel = {product.titel} 
        price={product.price} 
        discount = {product.discount}
        hendelDeleteProduct={this.hendelDeleteProduct}
        />
      )
     })} */}
{/* виведення розмітки вар 2 (зі стейту) */}

{/* {this.state.products.map(product => { 
      return(
        <Product 
        key={product.id} 
        id={product.id}
        titel = {product.titel} 
        price={product.price} 
        discount = {product.discount}
        hendelDeleteProduct={this.hendelDeleteProduct}
        />
      )
     })} */}
{/*сортуємо: замість масиву продуктів використовуємо масив відсортованих продуктів */}
{sortedProducts.map(product => { 
      return(
        <Product 
        key={product.id} 
        id={product.id}
        titel = {product.titel} 
        price={product.price} 
        discount = {product.discount}
        hendelDeleteProduct={this.hendelDeleteProduct}
        />
      )
     })}


    </section>
    </>
  );
};}
// const Product = ({titel, price, discount }) =>{
// const productBg = 
//   discount ? 'green'  :'red'

//   const productStyles = {
//     border: '1px solid black',
//     padding: 15,
//     margin: 15,
//     backgroundColor: productBg,
//     borderRadius: '15px',
//   } 

//   return (

// <div style={productStyles}> 
//   <h2>{titel}</h2>
  
//   <img
//       src="<https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640>"
//       alt="Tacos With Lime"
//       width="640"
//     />
   
//    {discount && <h3>Discount:{discount}%</h3>}

//      {/* {discount ? ( <h3>Discount:{discount}%</h3>) :<p> Discount 0% </p>} */}

//     <p>Price:{price}</p>
//     <button type="button">Add to cart</button>
//   </div>
//   )
// }