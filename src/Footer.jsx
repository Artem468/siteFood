import './Footer.css'
import inImg from './assets/in.png'
import facebook from './assets/facebook.png'
import inst from './assets/inst.png'
import tiktok from './assets/tiktok.png'
import coin from './assets/coin.png'

function Footer() {
    return (
        <footer>
            <div className={"footerContainer"}>
                <div className={"categoriesFooter"}>
                    <div>
                        <p>COMPANY</p>
                        <a href="">Team</a>
                        <a href="">Careers</a>
                        <a href="">Pressroom</a>
                    </div>
                    <div>
                        <p>HELP</p>
                        <a href="">FAQ</a>
                        <a href="">Help center</a>
                        <a href="">Contact us</a>
                    </div>
                    <div>
                        <p>FOR PARTNERS</p>
                        <a href="">Organizations</a>
                        <a href="">Municipalities</a>
                        <a href="">Communities</a>
                    </div>
                </div>
                <div className={"footerSocialNetworks"}>
                    <img src={inst} alt=""/>
                    <img src={inImg} alt=""/>
                    <img src={tiktok} alt=""/>
                    <img src={facebook} alt=""/>
                </div>
            </div>
            <div className={"footerTerms"}>
                <div>
                    <p>Terms of service</p>
                    <p>Trademarks</p>
                    <p>Privacy policy</p>
                </div>
                <p>Copyright © 2023 Mill Industries Inc. Mill, Mill Membership, Food Grounds, <img src={coin} alt=""/>, and related marks are trademarks of Mill.</p>
            </div>
        </footer>
    )
}

export default Footer
