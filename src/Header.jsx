import vector from './assets/Vector.png';
import './Header.css'

function Header() {
    return (
        <header>
            <nav>
                <div>
                    <a href="">Membership</a>
                    <a href="">Impact</a>
                </div>
                <div>
                    <a href="">Sign in</a>
                    <a href="">Reserve</a>
                </div>
            </nav>
            <section>
                <p>Food isn’t trash</p>
                <p>Mill keeps it from stinking up your kitchen — and the planet.</p>
                <button>
                    <img src={vector} alt=""/>
                    <p>Watch video</p>
                </button>
            </section>
        </header>
    )
}

export default Header
