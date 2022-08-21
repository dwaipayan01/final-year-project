import React from 'react';
import Contact from '../Contact/Contact';
import Country from '../Country/Country';
import Header from '../Navbar/Header';
import Package from '../Package/Package';
import Property from '../Property/Property';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Package></Package>
            <Country></Country>
            <Property></Property>
            <Contact></Contact>
            <Footer></Footer>

        </div>
    );
};

export default Home;