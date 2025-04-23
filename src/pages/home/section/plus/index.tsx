import MainHeader from 'component/mainHeader'

export default function Specialplus() {
    return (
        <main>
            <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <MainHeader
                    title={'Light Steps, New Season'}
                    subTitle={'가볍게, 산뜻하게. 봄 신상과 함께하는 특별한 하루.'} />
            </nav>
        </main>
    )
}
