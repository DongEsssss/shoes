import { Typography } from '@mui/material'

interface headerProps {
    title: string;
    subTitle: string;
}

export default function MainHeader(props: headerProps) {
    const { title, subTitle } = props;
    return (
        <div>
            <Typography fontSize={30} fontWeight={700} color="#000" textAlign="left" marginTop={1} marginBottom={1}>
                {title}
                <Typography fontSize={16} color="#666" marginTop={0}>
                    {subTitle}
                </Typography>
            </Typography>
        </div>
    )
}
