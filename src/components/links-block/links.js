import { Component } from "react";
import Link from './link/link'
import './links.css'
import Logo from './logo/logo'

class Links extends Component {
    
    render() {
        const {color} = this.props
        const links = [{label: 'Coffee house', href: '', id: 1},
                    {label: 'Our coffee', href: 'our_coffee', id: 2},
                    {label: 'For your pleasure', href: 'for_your_pleasure', id: 3},
                ]
        const elements = links.map(item => {
            const {id, ...itemProps} = item
            return (
                <Link key={id} {...itemProps} color={color}/>
            )
        })

        return (
            <div className="links-block">
                <Logo color={color}></Logo>
                {elements}
            </div>
        )
    }
}

export default Links