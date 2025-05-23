import companydata from '../../../../asset/data/company.json';
import "./style.scss"

export default function Company() {
    const items = companydata.distributors
    return (
        <div className="carousel-wrapper">
            <div className="carousel-track">
                {items.concat(items).map((item: any, i: number) => (
                    <div key={i} className="carousel-slide">
                        <img src={item.logo} alt={item.name} style={{ width: '150px' }} />
                    </div>
                ))}
            </div>
        </div>
    )
}
