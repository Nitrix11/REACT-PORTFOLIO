import Nitrix from"../assets/Nitrix.png"
import Bag from"../assets/bag.png"
import no from"../assets/no.png"
import peacock from"../assets/peacock.png"
import baker from"../assets/baker.png"
import "./SCSS/Project.css"
function Projects(){
    return(
        <>
            <section className="teams" id="teams">
        <div className="max-width">
            <h2 className="title">My Projects</h2>
            <div className="carousel owl-carousel">
                <div className="card">
                    <div className="box">
                    <img src={baker} alt="img"/>
                        <div className="text">BakersINN</div>
                        <p>Bread Lorem ipsum dolor sit amet. . </p>
                        <a href="https://apps.pfcrestaurant.com.np/" className="project" target="_blank">View Project</a>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <img src={no} alt="img"/>
                        <div className="text">Nowalls</div>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <a href="https://ajyotish.com.np/" className="project" target="_blank">View project</a>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                    <img src={peacock} alt="img"/>
                        <div className="text">Peacock</div>
                        <p>Deep Computer is an institution project .</p>
                        <a href="https://deepcomputer.edu.np/" className="project" target="_blank">View Project</a>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                    <img src={Bag} alt="img"/>
                        <p>NRD Computer is an eCommerce project.</p>
                        <a href="https://nrd.com.np/" className="project" target="_blank">View Project</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

        </>
    )
}
export default Projects