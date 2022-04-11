import {Component} from 'react'
import Links from '../links-block/links'
import Decor from '../decor/decor'
import CoffeeShopCard from '../coffee-shop-card/coffee-shop-card'
import './our-coffee.css'

class OurCoffee extends Component {

    constructor(props) {
        super(props)
        this.state = {
            typingFilter: '',
            buttonsFilter: [], 
            clickedCardId: 1
        }
    }

    onTypingFilter = (e) => {
        this.setState(() => {
            return {
                typingFilter: e.target.value
            }
        })
    }

    searchUpdate = (items, filter) => {
        if(filter === '') {
            return items
        } else {
            return items.filter(item => item.name.indexOf(filter) > -1)
        }
    }

    toggleActive = (e) => {
        e.target.classList.toggle('active')
        const country = e.target.dataset.country
        if(e.target.classList.contains('active')) {
            this.setState(() => {
                return {
                    buttonsFilter: [...this.state.buttonsFilter, country]
                }
            })
        } else {
            this.setState(({buttonsFilter}) => {
                const i = buttonsFilter.indexOf(country)
                return {
                    buttonsFilter: buttonsFilter.filter((item, index) => index !== i)
                }
            })
        }
    }

    filterUpdate = (items) => {
        if(this.state.buttonsFilter.length === 0) {
            return items
        }
        const newArr = []
            for (const item of items) {
                for (const el of this.state.buttonsFilter) {
                    if(item.country === el) {
                        newArr.push(item)
                    }
                }
            }
        return newArr
    }

    onShowCard = (id) => {
        this.setState({
            clickedCardId: id
        });
    }

    backToCoffeeShop = () => {
        this.setState({
            clickedCardId: null
        })
    }

    render () {

        const {typingFilter, clickedCardId} = this.state
        const {data} = this.props
        const cards = this.searchUpdate(this.filterUpdate(data), typingFilter).map(item => {
            const {id, ...itemProps} = item
            return <CoffeeShopCard key={id} {...itemProps} onShowCard={() => this.onShowCard(id)}/>
        })

        const clickedCard = this.props.data.find(item => item.id === clickedCardId)

        return (
            <>
                <header className='our-coffee__header' >
                    <div className='our-coffee__header__links'>
                        <Links color={'white'}/>
                    </div>
                    <h1 className='our-coffee__header__title'>Our Coffee</h1>
                </header>
                {clickedCardId ? 
                <main>
                    <section className='coffee-card__info'>
                        <div className='coffee-card__info__wrapper'>
                            <div className='coffee-card__info__img'>
                                <img src="./images/coffee-card.png" alt="coffee" />
                            </div>
                            <div className='coffee-card__info__data'>
                                <h2 className='coffee-card__info__name'>About it</h2>
                                <Decor color={'black'}/>
                                <p className='coffee-card__info__country'><b>Country:</b> {clickedCard.country}</p>
                                <p className='coffee-card__info__description'><b>Description: </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <p className='coffee-card__info__price'>Price: {clickedCard.price}$</p>
                            </div>
                        </div>
                    </section>
                    <div className='coffee-card__backBtn' onClick={this.backToCoffeeShop}>Back</div>
                </main> : 
                <main>
                    <section className='our-coffee__info'>
                        <div className="our-coffee__info__img">
                            <img src="/images/about-coffee_girl.png" alt="girl" />
                        </div>
                        <div className='our-coffee__info__block'>
                            <h2 className='our-coffee__info__title'>About our beans</h2>
                            <Decor color={'black'}/>
                            <p className='our-coffee__info__description'>Extremity sweetness difficult behaviour he of. On <br /> disposal of as landlord horrible.</p>
                            <p className='our-coffee__info__description'>Afraid at highly months do things on at. Situation <br /> recommend objection do intention <br /> so questions. <br /> As greatly removed calling pleased improve an. <br /> Last ask him cold feel <br /> met spot shy want. Children me laughing we <br /> prospect answered followed. At it went <br /> is song that held help face.</p>
                        </div>
                    </section>
                    <div className="line-block"></div>
                    <section className='coffee-shop'>
                        <div className="coffee-shop__search">
                            <div className='coffee-shop__search__text'>
                                <label>Looking for</label>
                                <input type="text" placeholder='start typing here...' onChange={this.onTypingFilter}/>
                            </div>
                            <div className="coffee-shop__search__filters-block">
                                <label>Or filter</label>
                                <div className='coffee-shop__search__filters'>
                                    <button className='coffee-shop__search__filter' onClick={this.toggleActive} data-country='Brazil'>Brazil</button>
                                    <button className='coffee-shop__search__filter' onClick={this.toggleActive} data-country='Kenya'>Kenya</button>
                                    <button className='coffee-shop__search__filter' onClick={this.toggleActive} data-country='Columbia'>Columbia</button>
                                </div>
                            </div>
                        </div>
                        <div className='coffee-shop__cards'>
                            {cards}
                        </div>
                    </section>
                </main>
                }
                <footer className='our-coffee__footer'>
                    <div className='our-coffee__footer__links'>
                        <Links color={'black'}/>
                    </div>
                    <Decor color={'black'}/>
                </footer>
            </>
        )
    }
}

export default OurCoffee