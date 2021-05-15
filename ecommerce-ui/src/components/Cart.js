import React, { Component } from 'react';

class Cart extends Component {

    render() {
        console.log(this.props);
        return (
            <div className="cart">
            {this.props.list.map((a, index) => {
                return (
                <div id={index}>
                    <h2>{a.title}</h2>
                    <h3>${a.payment}</h3>
                    <button>Remove</button>
                </div>
                )
            })}
            </div>
        )
    }
  };

  export default Cart;