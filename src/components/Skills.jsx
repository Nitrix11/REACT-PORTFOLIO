import "./SCSS/Skills.css"
function Skills (){
    return(
        <>
         <section class="skills" id="skills">
        <div class="max-width">
            <h2 class="title">My skills</h2>
            <div class="skills-content">
                <div class="column left">
                    <div class="text">My creative skills & experiences.</div>
                    <p>Since beginning my journey as a freelance developer nearly 1 month ago, I’ve done remote work for agencies, consulted for startups, and collaborated with talented people to create web products for both business and consumer use.
                        <br/>
                        I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.
                        <br/>
                        I also have full-stack developer experience with popular open-source CMS like WordPress, bubble.io and others .
                        <br/> 
                        Visit my<a href="https://www.facebook.com/heemal.himalpun" target="-blank" id="link">Facebook</a>for more details<a href="#contact" id="link">contact</a>me.

                    </p>
                    <a href="#contact">Learn more</a>
                </div>
                <div class="column right">
                    <div class="bars">
                        <div class="info">
                            <span>HTML</span>
                            <span>90%</span>
                        </div>
                        <div class="line html"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>CSS</span>
                            <span>60%</span>
                        </div>
                        <div class="line css"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>JavaScript</span>
                            <span>50%</span>
                        </div>
                         <div class="line js"></div>
                    </div>
                <div class="bars">
                        <div class="info">
                            <span>Adobe Photoshop</span>
                            <span>50%</span>
                        </div>
                        <div class="line php"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>Corel Draw</span>
                            <span>85%</span>
                        </div>
                        <div class="line mysql"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>WordPress</span>
                            <span>75%</span>
                        </div>
                        <div class="line wordpress"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}
export default Skills