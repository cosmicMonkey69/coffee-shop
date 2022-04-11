
import {Component} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/home'
import OurCoffee from '../pages/our-coffee'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99', id: 1},
                {name: 'Arabica Coffee 1 kg', country: 'Kenya', price: '7.99', id: 2},
                {name: 'Supremo Coffee 1 kg', country: 'Columbia', price: '3.99', id: 3},
                {name: 'Kangocho Coffee 1 kg', country: 'Kenya', price: '12.99', id: 4},
                {name: 'Icatu Coffee 1 kg', country: 'Brazil', price: '8.99', id: 5},
                {name: 'Samburu Coffee 1 kg', country: 'Kenya', price: '15.99', id: 6}
            ]
        }
    }
    render() {
        const {data} = this.state
        return (<>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/our_coffee' element={<OurCoffee data={data}/>}/>
            </Routes>
        </BrowserRouter>
        </>
        )
    }
}

export default App