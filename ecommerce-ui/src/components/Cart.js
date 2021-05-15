import React, { Component } from 'react';

class Cart extends Component {

    render() {
        console.log(this.props);
        let total = [];
        return (
            <div>
                {this.props.list.map((a, index) => {
                    total.push(a.payment);
                    return (
                    <div>
                        <p>{index+1}. {a.title}</p>
                        <h3>${a.payment}</h3>
                        <button>Remove</button>
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