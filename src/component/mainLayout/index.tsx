
import Header from '../layout/header';
import Footer from '../layout/footer';
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
            <div style={{ flex: 1, padding: 0 }}>
                {children}
            </div>
            <Footer />
        </Box>
    );
}
