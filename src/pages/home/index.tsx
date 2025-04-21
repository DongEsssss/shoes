import React, { useEffect } from "react";

import Mainslider from './mainslider';
import Company from './section/company/company';
import Caterogy from './section/category';
import MonthNewItem from './section/monthnewitem';
import MonthBestItem from './section/monthbest';
import LimitedEdition from "./section/limitedition";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <Mainslider />
            <div data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">
                <Caterogy />
            </div>
            <div data-aos="fade-up"
                data-aos-anchor-placement="center-center">
                <LimitedEdition />
            </div>
            {/* <div data-aos="fade-right"
                data-aos-anchor-placement="center-center">
                <MonthBestItem />
            </div>
            <div data-aos="fade-left"
                data-aos-anchor-placement="center-center">
                <MonthNewItem />
            </div> */}
            <Company />
        </>
    );
}
