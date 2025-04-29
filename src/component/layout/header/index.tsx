import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { Box, IconButton, InputAdornment, TextField, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuIcon from '@mui/icons-material/Menu';

import './header.scss';

const pages = ['Limited', 'New', 'Event', 'Hot', 'Shoes', 'Brand', 'Men', 'Woman', 'Kids', 'Sale'];

export default function Header() {
    const [searchField, setSearchField] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    return (
        <header>
            <div className="header-bar">
                <Typography variant='h5' onClick={() => navigate('/#')}>Starlight Shoes</Typography>

                <div className="header-tool">
                    {!searchField ? (
                        <IconButton onClick={() => setSearchField(true)}>
                            <SearchOutlinedIcon />
                        </IconButton>
                    ) : (
                        <Box
                            ref={searchRef}
                            className={`search-field ${searchField ? 'show' : ''}`}
                        >
                            <TextField
                                fullWidth
                                size="small"
                                placeholder="검색어를 입력하세요"
                                variant="outlined"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={() => setSearchField(false)}>
                                                <CloseIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Box>
                    )}
                    <Box sx={{ display: { xs: 'inline-flex', md: 'none' } }}>
                        <IconButton onClick={() => setDrawerOpen(true)}>
                            <MenuIcon />
                        </IconButton>
                    </Box>

                    <Drawer
                        anchor="right"
                        open={drawerOpen}
                        onClose={() => setDrawerOpen(false)}
                        sx={{
                            '& .MuiDrawer-paper': {
                                width: '200px',
                                animation: 'slideIn 0.3s ease-out',
                            }
                        }}
                    >
                        <Box sx={{ padding: 2 }}>
                            <IconButton onClick={() => setDrawerOpen(false)}>
                                <CloseIcon />
                            </IconButton>
                        </Box>
                        <List>
                            {pages.map((page) => (
                                <ListItem key={page} onClick={() => {
                                    // navigate(`/${page.toLowerCase()}`);
                                    navigate(`/#`);
                                    setDrawerOpen(false);
                                }}>
                                    <ListItemText primary={page} />
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>
                </div>
            </div>
        </header>
    );
}
