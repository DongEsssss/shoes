// src/components/swiper/CustomNavigation.tsx
import React from 'react';
import './custom-navigation.scss';

interface CustomNavigationProps {
  uniqueClass: string; // 고유 클래스 이름 (예: 'category', 'limited')
}

const CustomNavigation: React.FC<CustomNavigationProps> = ({ uniqueClass }) => {
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
};

export default CustomNavigation;
