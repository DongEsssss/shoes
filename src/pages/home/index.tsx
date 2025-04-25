import React, { useEffect } from "react";

import Mainslider from "./section/slider/mainslider";
import Company from './section/company/company';
import Category from './section/category';
import MonthNewItem from './section/monthnewitem';
import MonthBestItem from './section/monthbest';
import LimitedEdition from "./section/limitedition";
import Specialplus from "./section/plus";

import AOS from "aos";
import "aos/dist/aos.css";
import AosWrapper from "component/Aos";
import HomeNavBar from "./section/homeNav";
import Sale from "./section/sale";

export default function Home() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div style={{ overflowX: 'hidden' }}>
            <Mainslider />
            <HomeNavBar />
            <AosWrapper>
                <Category />
            </AosWrapper>
            <AosWrapper
                animation="fade-left"
                anchor="top-bottom">
                <LimitedEdition />
            </AosWrapper>
            <AosWrapper animation="fade-right">
                <MonthBestItem />
            </AosWrapper>
            <AosWrapper animation="fade-left">
                <MonthNewItem />
            </AosWrapper>
            <AosWrapper animation="fade-right">
                <Specialplus />
            </AosWrapper>
            <AosWrapper animation="fade-up">
                <Sale />
            </AosWrapper>

            <Company />
        </div>
    );
}
