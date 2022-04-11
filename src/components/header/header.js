import { Component } from "react";
import Links from '../links-block/links'
import './header.css'
import Decor from '../../components/decor/decor'

class Header extends Component {
    render () {
        return (
            <header className="header">
                <nav className="header__nav">
                    <Links color='white'/>
                </nav>
                    <h1>Everything You Love About Coffee</h1>
                    <Decor color='white'/>
                    <h2 className="header__slogan">We makes every day full of energy and taste</h2>
                    <h2 className="header__slogan">Want to try our beans?</h2>
                    <div className="button-wrapper">
                        <a href="/our_coffee" className="header__button">More</a>
                    </div>
            </header>
        )
    }
}

export default Header