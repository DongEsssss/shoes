import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Button, Typography } from '@mui/material';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
// import './hot.scss';

interface HotItem {
    id: string;
    title: string;
    content: string;
    category: string;
    image?: string;
    createdAt: string;
    updatedAt: string;
    isPinned: boolean;
    visible: boolean;
    name?: string;
    price?: number;
    promotion?: string;
    productCode?: string;
}

const MonthBestItem: React.FC = () => {
    const [hotitem, setHotItem] = useState<HotItem[]>([]);

    useEffect(() => {
        fetch('/asset/data/hotEdtion.json')
            .then((response) => response.json())
            .then((data: HotItem[]) => {
                setHotItem(data);
            })
            .catch((error) => console.error('데이터 확인 요망 : ', error));
    }, []);

    return (
        <main className="hot-item-section">
            <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography fontSize={30} fontWeight={700} color="#000" textAlign="left" marginTop={3} marginBottom={1}>
                    {`This Month's Must-Haves`}
                </Typography>
                <div className="hot-nav">
                    <Button
                        sx={{
                            backgroundColor: '#000',
                            color: '#fff',
                            borderRadius: '8px',
                            padding: '8px 16px',
                            '&:hover': {
                                backgroundColor: '#333',
                            }
                        }}>
                        More +
                    </Button>
                </div>
            </nav>

        </main >
    );
};

export default MonthBestItem;
