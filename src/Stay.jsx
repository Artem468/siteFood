import arrow from "./assets/arrow.png"
import './Stay.css'

function Stay() {
    return (
        <section className={"Stay"}>
            <p className={"StayText"}>Stay in the loop</p>
            <div className={"StayContainer"}>
                <div>
                    <input/>
                    <button>
                        <img src={arrow} alt=""/>
                    </button>
                </div>
                <div>
                    <p>By signing up for updates from Mill, you agree to our</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </section>
    )
}

export default Stay
