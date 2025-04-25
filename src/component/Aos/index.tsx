import React from 'react';

interface AosWrapperProps {
    children: React.ReactNode;
    animation?: string;
    anchor?: string;
    offset?: number;
}

export default function AosWrapper({
    children,
    animation = 'fade-up',
    offset = 200,
    anchor = 'top-bottom',

}: AosWrapperProps) {
    return (
        <div
            data-aos={animation}
            data-aos-anchor-placement={anchor}
            data-aos-offset={offset}
        >
            {children}
        </div>
    );
}
