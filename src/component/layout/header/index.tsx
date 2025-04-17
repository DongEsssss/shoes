import { useRef, useState } from 'react';
import { Box, IconButton, InputAdornment, TextField, Typography } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import './header.scss';

export default function Header() {
    const [searchField, setSearchField] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);

    return (
        <header>
            <div className="header-bar">
                <Typography variant='h5'>
                    Starlight Shoes
                </Typography>
                <div className="header-tool">
                    {!searchField ? (
                        <IconButton onClick={() => setSearchField(true)}
                            style={{ display: searchField ? 'none' : 'inline-flex' }}
                        >
                            <SearchOutlinedIcon />
                        </IconButton>
                    ) : (
                        <Box
                            ref={searchRef}
                            className={`search-field ${searchField ? 'show' : ''}`} // 애니메이션 클래스 적용
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
                </div>
            </div>
        </header>
    )
}
