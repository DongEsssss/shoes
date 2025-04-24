import React, { useEffect } from "react";

import Mainslider from './mainslider';
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

export default function Home() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <Mainslider />
            <HomeNavBar />
            <AosWrapper>
                <Category />
            </AosWrapper>
            <AosWrapper animation="fade-left">
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
            <Company />
        </>
    );
}
