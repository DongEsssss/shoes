import './custom-navigation.scss';
interface CustomNavigationProps {
  uniqueClass: string;
}

export default function CustomNavigation({ uniqueClass }: CustomNavigationProps) {
  {
    return (
      <>
        <div className={`custom-nav-wrapper left ${uniqueClass}-nav`}>
          <div className={`swiper-button-prev ${uniqueClass}-prev`}></div>
        </div>
        <div className={`custom-nav-wrapper right ${uniqueClass}-nav`}>
          <div className={`swiper-button-next ${uniqueClass}-next`}></div>
        </div>
      </>
    );
  }
}