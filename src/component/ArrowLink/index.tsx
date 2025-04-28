import { Link } from 'react-router-dom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

interface ArrowLinkProps {
    classPrefix?: string;
}

export default function ArrowLink({ classPrefix }: ArrowLinkProps) {
    return (
        <Link
            to={`/${classPrefix}`}
            style={{
                float: 'right',
                color: '#5c5c5c',
                borderRadius: '8px',
                padding: '8px 16px',
                display: 'flex',
                alignItems: 'center',
                fontFamily: 'math'
            }}
        >
            More <ArrowRightAltIcon />
        </Link>
    )
}
