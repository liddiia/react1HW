import React, { Component } from 'react'

import {StyledModal} from './Styled'

export default class Modal extends Component {
  render() {
    return (
      <StyledModal>
        <div className='modal'>
            <button onClick={this.props.closeModal} className='closeBtn'>&#10060;</button>
<h2>Prodact detais</h2>
<div>
    <h3> Titel:{this.props.modalData.titel}</h3>
    <p>Price:{this.props.modalData.price}$ </p>
    <p>Discount:{this.props.modalData.discount}%</p>
</div>
        </div>
      </StyledModal>
    )
  }
}

