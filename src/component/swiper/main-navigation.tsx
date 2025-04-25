import React from 'react'
interface CustomNavigationProps {
    classPrefix: string;
}
export default function Mainnavigation({ classPrefix }: CustomNavigationProps) {
    const navStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: '12px',
        transform: 'translateY(-50%)',
        zIndex: 10,
        pointerEvents: 'none',
    };

    const wrapperStyle: React.CSSProperties = {
        width: '42px',
        height: '42px',
        backgroundColor: '#f5f5f5',
        borderRadius: '50%',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
        cursor: 'pointer',
        pointerEvents: 'auto',
    };

    const arrowStyle: React.CSSProperties = {
        width: '42px',
        height: '42px',
        fontSize: '32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        color: '#333',
        userSelect: 'none',
    }
    return (
        <div style={{ marginTop: '20px', position: 'relative' }}>
            <div className={`${classPrefix}-nav`} style={navStyle}>
                <div className={`${classPrefix}-nav-wrapper left`} style={{ ...wrapperStyle, marginLeft: 12 }}>
                    <div className={`${classPrefix}-swiper-button-prev`} style={arrowStyle}>‹</div>
                </div>
                <div className={`${classPrefix}-nav-wrapper right`} style={{ ...wrapperStyle, marginRight: 12 }}>
                    <div className={`${classPrefix}-swiper-button-next`} style={arrowStyle}>›</div>
                </div>
            </div>
        </div>
    )
}
