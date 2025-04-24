import React, { useEffect, useState } from 'react';

export default function CountdownTimer({ endTime }: { endTime: string }) {
    const calculateTimeLeft = (): { hours: number; minutes: number; seconds: number } => {
        const difference = +new Date(endTime) - +new Date();
        let timeLeft = { hours: 0, minutes: 0, seconds: 0 };

        if (difference > 0) {
            timeLeft = {
                hours: Math.floor(difference / (1000 * 60 * 60)),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number }>(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    if (Object.keys(timeLeft).length === 0) {
        return <span style={{ color: 'red', fontWeight: 'bold' }}>세일 종료</span>;
    }

    return (
        <span style={{ color: 'green', fontWeight: 'bold' }}>
            {timeLeft.hours}시간 {timeLeft.minutes}분 {timeLeft.seconds}초 남음
        </span>
    );
}
