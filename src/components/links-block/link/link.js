import { Component } from "react";

class Link extends Component {
    render() {
        const {label, href, color} = this.props
        return (
            <a href={'/'+href} style={{color: color}}>{label}</a>
        )
    }
}

export default Link