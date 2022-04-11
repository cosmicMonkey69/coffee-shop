import Decor from '../decor/decor'
import Links from '../links-block/links'
import './footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <Links color={'black'}/>
            <div className='footer__decor'>
                <Decor color={'black'}/>
            </div>
        </footer>
    )
}

export default Footer