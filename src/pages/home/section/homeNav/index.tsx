
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function HomeNavBar() {
    const navigate = useNavigate();

    const pages = ['Limited', 'New', 'Event', 'Hot', 'Shoes', 'Brand', 'Sale'];
    // 페이지 이동시 쓰는 함수
    // const handlePageChange = (page: string) => {
    //     navigate(`/${page}`);
    // };

    // 임시 
    const handlePageChange = () => {
        navigate(`/#`);
    };
    return (
        <div
            className='homeNav'
            style={{
                display: 'flex',
                alignItems: 'center',
                borderBottom: '1px solid #ccc',
                padding: '0 16px',
                height: '50px'
            }}>
            <main style={{ padding: 0 }}>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                        <Button
                            key={page}
                            sx={{
                                color: 'black', display: 'block', width: '100%', maxWidth: '70Px',
                                minWidth: '100px', fontSize: '14px', fontWeight: 'bold',
                            }}
                            onClick={() => handlePageChange()}
                        >
                            {page}
                        </Button>
                    ))}
                </Box>
            </main>
        </div>
    );
}
