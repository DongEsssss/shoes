import { Box, Typography } from '@mui/material'

interface headerProps {
    title: string;
    subTitle: string;
}

export default function MainHeader(props: headerProps) {
    const { title, subTitle } = props;
    return (
        <Box marginBottom={1} >
            <Typography fontSize={30} fontWeight={700} color="#000" textAlign="left" marginTop={1} marginBottom={1} whiteSpace={'pre-line'}>
                {title}
            </Typography>
            <Typography fontSize={16} color="#666" component={'span'}>
                {subTitle}
            </Typography>
        </Box>
    )
}
