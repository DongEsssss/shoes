import { Button, Typography } from "@mui/material";
import SmartToyIcon from '@mui/icons-material/SmartToy';

import { ReactComponent as KakaoIcon } from "../../../asset/svg/kakao.svg";
import { ReactComponent as InstagramIcon } from "../../../asset/svg/instagram.svg";
import { ReactComponent as YoutubeIcon } from "../../../asset/svg/youtube.svg";

import './footer.scss'
export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-top">
                <div className="footer-top-slogan">
                    <Typography variant="body2">
                        통합고객센터
                        1588-9667
                        월~금 09:00 ~ 12:00 / 13:00 ~ 18:00
                        (공휴일 휴무)
                    </Typography>
                    <Button sx={{
                        display: 'flex',
                        gap: '5px',
                        backgroundColor: 'white',
                        border: '1px solid #ececec',
                        color: "black",
                        marginLeft: '20px'
                    }}>
                        챗봇 상담  <SmartToyIcon sx={{ color: 'black' }} />
                    </Button>
                </div>
            </div>
            <div className="footer-middle">
                <Typography variant="h4" className="footer-slogan">당신의 발걸음을 더 가볍게, 매일이 런웨이처럼.</Typography>
                <div className="footer-links">
                    <a href="/faq">자주 묻는 질문</a>
                    <a href="/shipping">배송 & 반품 안내</a>
                    <a href="/terms">이용약관</a>
                    <a href="/privacy">개인정보처리방침</a>
                </div>
                <div className="footer-contact">
                    <p>💬 카카오톡 채널: <a href="#">@Starlightshoes</a></p>
                    <p>운영시간: 평일 10:00 - 17:00</p>
                </div>
                <div className="footer-social">
                    <a href="#" className="social-text">
                        <KakaoIcon /> Kakao Talk
                    </a>
                    <a href="#" className="social-text">
                        <InstagramIcon /> Instagram
                    </a>
                    <a href="#" className="social-text">
                        <YoutubeIcon /> Youtube
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <Typography variant="body2">
                    © 2025 Starlight Shoes. All rights reserved.
                </Typography>
                <Typography variant="body2">
                    본 웹사이트의 디자인, 코드, 이미지 등의 모든 콘텐츠는 Star Shoes의 자산이며, 사전 허가 없이 무단 복제, 배포, 사용을 금합니다.
                </Typography>
            </div>
        </footer>

    )
}
