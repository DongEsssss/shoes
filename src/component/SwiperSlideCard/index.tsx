import { Box, Typography, BoxProps } from '@mui/material';

interface LimitedItem {
    id: string;
    title: string;
    content: string;
    category: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    isPinned: boolean;
    visible: boolean;
    name: string;
    price: number;
    promotion: string;
    productCode: string;
}

interface EditionCard extends BoxProps {
    item: any;
    onCardClick?: (item: LimitedItem) => void;
}

export default function EditionCard({ item, onCardClick }: EditionCard) {
    return (
        <Box
            onClick={() => onCardClick?.(item)}
            sx={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                p: 2,
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.3s',
                cursor: onCardClick ? 'pointer' : 'default',
                '&:hover': {
                    transform: 'translateY(-5px)',
                }
            }}
        >
            <Box sx={{ position: 'relative' }}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: 10,
                        left: 10,
                        backgroundColor: '#000',
                        color: '#fff',
                        fontSize: 12,
                        px: 1.5,
                        py: 0.5,
                        borderRadius: '8px',
                        textTransform: 'uppercase',
                    }}
                >
                    {item.category}
                </Box>

                <img
                    src={item.image}
                    alt={item.name}
                    style={{
                        width: '100%',
                        height: '180px',
                        objectFit: 'cover',
                        borderRadius: '12px',
                    }}
                />
            </Box>

            <Box sx={{ mt: 2 }}>
                <Typography sx={{ fontSize: '18px', fontWeight: 600, color: '#333', textAlign: 'left' }}>
                    {item.name}
                </Typography>
                <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#888', textAlign: 'left', mt: 0.5 }}>
                    ₩{item.price.toLocaleString()}
                </Typography>
            </Box>

            <Typography
                sx={{
                    fontSize: '13px',
                    color: '#555',
                    mt: 2,
                    textAlign: 'left',
                    fontStyle: 'italic',
                    lineHeight: 1.4,
                }}
            >
                {item.promotion}
            </Typography>
        </Box>
    );
}
