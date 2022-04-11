import { Component } from "react";
import CoffeeBeans from './coffee-beans/coffee-beans'
import './decor.css'

class Decor extends Component {
    render() {
        const {color} = this.props
        return (
            <div className="decor">
                <div className="line" style={{backgroundColor: color}}></div>
                <CoffeeBeans color={color}/>
                <div className="line" style={{backgroundColor: color}}></div>
            </div>
        )
    }
}

export default Decor