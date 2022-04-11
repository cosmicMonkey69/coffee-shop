import { Component } from "react";
import './coffee-shop-card.css'

class CoffeeShopCard extends Component {
    render () {
        const {name, country, price, onShowCard} = this.props
        return (
            <div className="coffee-shop__card" onClick={onShowCard}>
                <div className="coffee-shop__card__wrapper">
                    <div className="coffee-shop__card__img">
                        <img src="/images/coffee-shop_card.png" alt="coffee" />
                    </div>
                    <h3 className="coffee-shop__card__name">{name}</h3>
                    <p className="coffee-shop__card__country">{country}</p>
                    <p className="coffee-shop__card__price">{price+'$'}</p>
                </div>
            </div>
        )
    }
}
export default CoffeeShopCard