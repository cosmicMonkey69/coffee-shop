import { Component } from "react";

import Header from "../header/header";
import AboutUs from "../section-about-us/about-us"
import OurBest from "../section-our-best/our-best"
import Footer from "../footer/footer"

class Home extends Component {
    render() {
        return (
        <>
            <Header/>
            <main>
                <AboutUs/>
                <OurBest/>
            </main>
            <Footer/>
        </>
        )
    }
}

export default Home