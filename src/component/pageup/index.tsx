import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';

import './pageup.scss';
import { useEffect, useState } from 'react';

export default function Pageup() {
    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        const handleShowButton = () => {
            if (window.scrollY > 300) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        }
        window.addEventListener("scroll", handleShowButton)
        return () => {
            window.removeEventListener("scroll", handleShowButton)
        }
    }, [])

    const PageUpButton = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className="pageup">
            {showButton && (
                <ArrowCircleUpOutlinedIcon onClick={PageUpButton} className="pageup-button" />
            )}
        </div>
    )
}
