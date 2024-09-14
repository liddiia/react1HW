import React, { Component } from 'react'

import {StyledModal} from './Styled'
/* Методи життєвого циклу ========KONSPET!!!==================== */

export default class Modal extends Component {
    state = {
        counter:1,
    }
    componentDidMount(){
        console.log('Modal has successfully been mounted ');
        window.addEventListener('keydown',this.handleKeyDown);
       //зупиняємо скрол сторінки
        document.body.style.overflow ='hidden';
    }
    componentWillUnmount(){
        // прибираємо глобальні слух подій
    window.removeEventListener('keydown',this.handleKeyDown);
        console.log('Modal was successfully deleted ');
        //відновлюємо скрол сторінки
        document.body.style.overflow ='auto';
    }
componentDidUpdate(_,prevState) {
    console.log('Modal was update (Props or State changed) ')
}
handleIncrementProduct=()=>{
    this.setState(prevState => ({counter: prevState.counter + 1}))
}
handleOveryClick=(ev)=>{
// якщо не додати умову if..., 
//модалка закриється при натисканні будь-кути
// так модалка закривається при кліку на оверлей
    if(ev.target === ev.currentTarget) {
    this.props.closeModal();
}
}

handleKeyDown = ev =>{
    if (ev.code === 'Escape') {
        this.props.closeModal();
    }
}
  render() {
    return (
      <StyledModal onClick={this.handleOveryClick}>
        <div className='modal'>
            <button onClick={this.props.closeModal} className='closeBtn'>&#10060;</button>
<h2>Prodact detais</h2>
<div>
    <h3> Titel:{this.props.modalData.titel}</h3>
    <p>Price:{this.props.modalData.price}$ </p>
    <p>Discount:{this.props.modalData.discount}%</p>
    <button onClick={this.handleIncrementProduct}>
        Add product: {this.state.counter}
    </button>
</div>
        </div>
      </StyledModal>
    )
  }
}

