import './WastedFood.css'
import plus from './assets/Frame.png'


function WastedFood() {
    return (
        <section className={'wastedFood'}>
            <div className={'wastedFoodTitle'}>
                <p className={"wastedFoodText"}>Wasted food is worse than you think</p>
                <div className={'wastedFoodPlus'}>
                    <p>And most of it comes from</p>
                    <div>
                        <p>our kitchens</p>
                        <img src={plus} alt=""/>
                    </div>
                    <div>
                        <p>airline industry</p>
                        <img src={plus} alt=""/>
                    </div>
                </div>
            </div>
            <div className={'wastedFoodImage'}>
                <div>
                    <p>Greenhouse gas from global food waste does more damage to the planet than the entire</p>
                    <p>We have to stop dumping what we can’t eat into the trash. Don’t worry, we’ve got a plan.</p>
                    <button>See the impact</button>
                </div>
            </div>
        </section>
    )
}

export default WastedFood
