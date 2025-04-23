import React from 'react';

interface AosWrapperProps {
    children: React.ReactNode;
    animation?: string;
    offset?: number;
}

export default function AosWrapper({
    children,
    animation = 'fade-up',
    offset = 200,
}: AosWrapperProps) {
    return (
        <div
            data-aos={animation}
            data-aos-anchor-placement="top-bottom"
            data-aos-offset={offset}
        >
            {children}
        </div>
    );
}
