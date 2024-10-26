import trash from './assets/6fa3d8ba9cf682482bc307c2d989f88d.png'
import './NoMore.css'


function NoMore() {
    return (
        <section className={"NoMore"}>
            <img src={trash} alt=""/>
            <div className={"NoMoreText"}>
                <div>
                    <p>No more nasty trash</p>
                    <p>Instead of throwing kitchen scraps away, throw them in the bin that comes with your Mill
                        Membership. It dries, shrinks, and de-stinks everything overnight. No weird smells. No drippy
                        bags. No wasted food.</p>
                    <button>Meet the bin</button>
                </div>
            </div>
        </section>
    )
}

export default NoMore
