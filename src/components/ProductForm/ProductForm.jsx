import React, {Component} from "react";
import css from "./ProductForm.module.css"


export class ProductForm extends Component  {

state = {
    titel: '',
    price: '',
    hasDiscount: false,
    discount:'',
};
 
    handleSabmit = event => {
    event.preventDefault();
    // ==================variant 1=================================
    // const titel = event.currentTarget.elements.titel.value;
    // const price = event.currentTarget.elements.price.value;
    // const hasDiscount = event.currentTarget.elements.hasDiscount.checked;
    // const discount = event.currentTarget.elements.discount.value;

    //===============var 2======== zminni beremo zi STATE======================

   
 const hasDiscount = this.state.hasDiscount;
   
const productData = {
    titel: this.state.titel,
    price: Number.parseFloat(this.state.price),

    discount: hasDiscount ? Number.parseFloat(this.state.discount): null,
};
 this.props.handleAppProduct(productData)
};
handleInputChange = (event)=>{
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    const name = event.target.name;

    this.setState({
[name] : value
    })
}
    render (){
        return(
            <div>
                <h2> Form Tiel</h2>
                <form onSubmit={this.handleSabmit} className={css.form}>
                    {this.state.titel === "Spagetty" && <h2>Concrets!!! You won  a promocode - #Yr52Zx</h2>}
                    <label className={css.formLabel}> 
                    <p className={css.labelText}><b>Titel</b></p>
                    <input type ="text" name="titel" onChange={this.handleInputChange} value = {this.state.titel}/>
                    </label> 

                    <label className={css.formLabel}>
                    <p className={css.labelText}><b>Price</b></p>
                    <input type ="text" name="price" onChange={this.handleInputChange} value = {this.state.price}/>
                    </label> 

                    <label className={css.formLabel}>
                    <input type ="checkbox" name="hasDiscount" onChange={this.handleInputChange} checked = {this.state.hasDiscount}/>  
                       <span>
                           <b>Has dicount?</b>
                        </span>
                    </label> 
                
                    {this.state.hasDiscount &&
                    ( <label className={css.formLabel}>
                    <p className={css.labelText}><b>Discount</b></p>
                    <input type ="text" name="discount" onChange={this.handleInputChange} value = {this.state.discount}/>
                    </label>)
                    }
                    <button type ="submit" >
Add Product
                </button>
                </form>
               
            </div>
        )
    }
}