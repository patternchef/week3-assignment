import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Hotel extends Component {
    static propTypes = {
        hotel: PropTypes.shape({
            title: PropTypes.string.isRequired,
            houseType: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            location: PropTypes.shape({
                city: PropTypes.string.isRequired,
                country: PropTypes.string.isRequired,
            }).isRequired,
            payment: PropTypes.shape({
                cost: PropTypes.number.isRequired,
                description: PropTypes.string.isRequired,
            }).isRequired,
            host: PropTypes.shape({
                name: PropTypes.string.isRequired,
                isSuperhost: PropTypes.bool.isRequired,
            }).isRequired,
            rating: PropTypes.shape({
                stars: PropTypes.number.isRequired,
                reviews: PropTypes.number.isRequired,
            }).isRequired
        }).isRequired
    }

    constructor(props) {
      super(props);
      this.state = {
          list: [],
      };
    }

    add(info) {
        this.setState({
            list: [ ...this.state.list, info]
        }, () => {
            console.log(this.state.list);
        });
    }

    render() {
        const { title, image, payment } = this.props.hotel;
        const info = {title: title, image: image, payment: payment.cost};
        return (
            <div className="box">
                <h2>{title}</h2>
                <img src={image} alt="" />
                <h3>${payment.cost}</h3>
                <button onClick={() => this.add(info)}>add</button>
            </div>
        )
    }
}

export default Hotel;