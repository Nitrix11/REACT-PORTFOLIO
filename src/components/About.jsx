import Nitrix from"../assets/Nitrix.png"
import "../components/SCSS/About.css"
function About(){
    return(
    <>
      <section class="about" id="about">
    <div class="max-width">
      <h2 class="title">About Me</h2>
      <div class="about-content">
        <div class="column left">
      <img src={Nitrix} alt="" />
        </div>
        <div class="column right">
          <div class="text">I'm Nyasha and I'm a <span class="typing-2">Developer</span></div>
          <p>Seeking an entry-level opportunity with an esteemed organization where I can utilize my skills & enhance learning in the field of work. Capable of mastering new technologies.</p>
          <br/>
          <div class="text">Why Work With Me</div>
          <p>I'm a great communicator & love to invest the necessary time to understand the customer's problem very well.</p>

          <a href="#link" target="blank">Download CV</a>
        </div>
      </div>
    </div>
  </section>
    </>)
}
export default About;