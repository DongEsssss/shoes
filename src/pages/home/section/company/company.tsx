import * as React from "react"
import "./style.scss"
import companydata from '../../../../asset/data/company.json';

export default function Company() {
    const items = companydata.distributors

    return (
        <div className="carousel-wrapper">
            <div className="carousel-track">
                {items.concat(items).map((item, i) => (
                    <div key={i} className="carousel-slide">
                        <img src={item.logo} alt={item.name} style={{ width: '180px' }} />
                    </div>
                ))}
            </div>
        </div>
    )
}
