import { Box, Typography, BoxProps } from '@mui/material';
interface EditionCardProps extends BoxProps {
    item: any;
    onCardClick?: (item: any) => void;
}

export default function EditionCard({ item, onCardClick }: EditionCardProps) {
    return (
        <>
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
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    cursor: 'pointer',
                    '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 12px 25px rgba(0, 0, 0, 0.15)',
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
                            fontWeight: 'bold',
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
                        ₩{item.price ? item.price.toLocaleString() : '가격정보 없음'}
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
                {item.limit && (
                    <Box sx={{ mt: 2 }}>
                        <Typography
                            sx={{
                                fontSize: '14px',
                                fontWeight: 500,
                                color: '#d9534f',
                                textAlign: 'left',
                                fontStyle: 'italic',
                            }}
                        >
                            한정판 세일 중! 지금 바로 구입하세요!
                        </Typography>
                    </Box>
                )}
            </Box>
        </>
    );
}
