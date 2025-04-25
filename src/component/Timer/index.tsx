import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

type TimeLeft = {
    hours: number;
    minutes: number;
    seconds: number;
    isExpired: boolean;
};

export default function CountdownTimer({ endTime }: { endTime: string }) {
    const calculateTimeLeft = (): TimeLeft => {
        const difference = +new Date(endTime) - +new Date();

        if (difference <= 0) {
            return { hours: 0, minutes: 0, seconds: 0, isExpired: true };
        }

        return {
            hours: Math.floor(difference / (1000 * 60 * 60)),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
            isExpired: false,
        };
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    }, [timeLeft]);

    if (timeLeft.isExpired) {
        return (
            <Typography color="error" fontWeight="bold">
                세일 종료
            </Typography>
        );
    }

    return (
        <>
            <Typography
                sx={{
                    backgroundColor: '#ff6f61',
                    color: '#fff',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    display: 'inline-block',
                    fontSize: '0.875rem',
                    fontWeight: 'bold',
                }}
            >
                {timeLeft.hours < 24 && (
                    <Typography variant="body2" fontWeight="bold" sx={{ mt: 0.5, display: 'block' }}>
                        ⏰ 한정판 아이템의 기간 하루도 남지 않았습니다!
                    </Typography>
                )}
                {timeLeft.hours > 24 && (
                    <Typography variant="body2" fontWeight="bold" sx={{ mt: 0.5, display: 'block' }}>
                        ⏰ {timeLeft.hours}시간 {timeLeft.minutes}분 {timeLeft.seconds}초 남음
                    </Typography>
                )}
            </Typography>
        </>
    );
}
