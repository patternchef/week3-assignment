import React, { Component } from 'react';

class Cart extends Component {

    render() {
        let total = [];
        return (
            <div>
                {this.props.list.map((a, index) => {
                    total.push(a.payment);
                    return (
                    <div key={index}>
                        <p>{index+1}. {a.title}</p>
                        <h3>${a.payment}</h3>
                        <button onClick={ () => this.props.removeItem(index)}>Remove</button>
                    </div>
                    )
                })}
                <hr />
                <h4>total: {total.reduce((a, b) => a + b, 0)}</h4>
                <button>Check out</button>
            </div>
        )
    }
  };

  export default Cart;