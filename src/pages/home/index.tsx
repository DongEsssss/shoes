import React, { useEffect } from "react";

// aos 라이브러리 추가

import Mainslider from './mainslider'
import Company from './section/company/company'
import Caterogy from './section/category'
import MonthNewItem from './section/monthnewitem'
import MonthBestItem from './section/monthbest'

import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <Mainslider />
            <div data-aos="fade-up">
                <Caterogy />
            </div>
            <div data-aos="fade-left">
                <MonthBestItem />
            </div>
            <div data-aos="fade-right">
                <MonthNewItem />
            </div>
            <Company />
        </>
    )
}
