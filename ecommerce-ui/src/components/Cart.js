import React, { Component } from 'react';

class Cart extends Component {

    render() {
        return (
            <div className="cart">
                <h1>Cart</h1>
                {console.log("child", this.props.dataFromParent)}
            </div>
        )

    }
  };

  export default Cart;