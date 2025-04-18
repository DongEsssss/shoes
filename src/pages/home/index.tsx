import Mainslider from './mainslider'
import Company from './section/company/company'
import Caterogy from './section/category'
import MonthNewItem from './section/monthnewitem'
import MonthBestItem from './section/monthbest'

export default function Home() {
    return (
        <>
            <Mainslider />
            <Caterogy />
            <MonthBestItem />
            <MonthNewItem />
            <Company />
        </>
    )
}
