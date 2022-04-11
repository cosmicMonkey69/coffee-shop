import {Component} from 'react'
import './our-best.css'

class OurBest extends Component {
    render() {

        const cards = [{imgName: 'solimo', description: 'Solimo Coffee Beans 2 kg', price: '10.73', id: 1},
                        {imgName: 'presto', description: 'Presto Coffee Beans 1 kg', price: '15.99', id: 2},
                        {imgName: 'aromistico', description: 'AROMISTICO Coffee 1 kg', price: '6.99', id: 3},
                    ]

        const elements = cards.map(item => {
            let imgSrc = './images/cards/' + item.imgName + '.png'
            return (<div className='our-best__card' key={item.id}>
                <div className="our-best__card__wrapper">
                    <div className='our-best__card__img'>
                        <img src={imgSrc} alt={item.imgName}/>
                    </div>
                    <p className='our-best__card__description'>{item.description}</p>
                    <p className='our-best__card__price'>{item.price + '$'}</p>
                </div>
            </div>)
        })
        return (
            <section className='our-best'>
                <h2 className='our-best__title'>Our best</h2>
                <div className='our-best__cards'>
                    {elements}
                </div>
            </section>
        )
    }
}

export default OurBest