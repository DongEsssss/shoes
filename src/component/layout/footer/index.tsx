import { ReactComponent as KakaoIcon } from "../../../asset/svg/kakao.svg";
import { ReactComponent as InstagramIcon } from "../../../asset/svg/instagram.svg";
import { ReactComponent as YoutubeIcon } from "../../../asset/svg/youtube.svg";
import './footer.scss'

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-top">
                <p className="footer-slogan">당신의 발걸음을 더 가볍게, 매일이 런웨이처럼.</p>
                <div className="footer-links">
                    <a href="/faq">자주 묻는 질문</a>
                    <a href="/shipping">배송 & 반품 안내</a>
                    <a href="/terms">이용약관</a>
                    <a href="/privacy">개인정보처리방침</a>
                </div>
                <div className="footer-contact">
                    <p>💬 카카오톡 채널: <a href="#">@starshoes</a></p>
                    <p>📞 고객센터: 02-1234-5678</p>
                    <p>운영시간: 평일 10:00 - 17:00</p>
                </div>
                <div className="footer-social">
                    <a href="#">
                        <KakaoIcon />
                    </a>
                    <a href="#">
                        <InstagramIcon />
                    </a>
                    <a href="#">
                        <YoutubeIcon />
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 Star Shoes. All rights reserved.</p>
            </div>
        </footer>

    )
}
