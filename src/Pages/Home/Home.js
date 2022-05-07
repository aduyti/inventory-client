import React from 'react';
import Banner from '../../Components/Banner/Banner';
import ProductsSection from '../../Components/ProductsSection/ProductsSection';
import ChartSection from '../../Components/ChartSection/ChartSection';
import ContactSection from '../../Components/ContactSection/ContactSection';

const Home = () => {
    return (
        <div>
            <Banner />
            <ProductsSection />
            <ChartSection />
            <ContactSection />
        </div>
    );
};

export default Home;