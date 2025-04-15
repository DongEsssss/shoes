
import Header from '../header';
import Footer from '../footer';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <Header />
            <Container component="main" sx={{ flex: 1, py: 4 }}>
                {children}
            </Container>
            <Footer />
        </Box>
    );
}
