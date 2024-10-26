import './HowItWork.css'
import photo from './assets/aee9ea67b32537cbbc158a4d472f19b8.jpg'

function HowItWork() {
    return (
        <section className={'HowItWork'}>
            <div className={'textDataWrapper'}>
                <div className={"textData"}>
                    <p>Outsmart waste from your home</p>
                    <p>The Mill Membership is a simple way to keep food out of landfills, send it back to farms, and
                        make your kitchen smell awesome.</p>
                    <ol>
                        <li>Food-shrinking, de-stinking Mill kitchen bin</li>
                        <li>Seamless mail-back pathway to farms</li>
                        <li>Personalized impact tracking</li>
                    </ol>
                    <button>How it works</button>
                </div>
            </div>
            <div className={'imgHolder'}>
                <img src={photo} alt=""/>
            </div>
        </section>
    )
}

export default HowItWork
