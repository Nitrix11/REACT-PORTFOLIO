import "../components/SCSS/Navbar.css"
const Footer = () => {
  $(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Front end developer","Fresher","Technician", "Blogger", "Designer", "Freelancer","Manager"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-3", {
        strings: ["Connect with me on :)"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Front end developer","Fresher" ,"Technician", "Blogger", "Designer", "Freelancer","Manager"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
}
function Navbar(){
    return(
        <>
        
        <nav className="navbar">
    <div className="max-width">
      <div className="logo"><a href="#"><span>NYASHA</span><span>PETRO</span></a></div>
      <ul className="menu">
        <li><a href="#home" className="menu-btn"><strong>Home</strong></a></li>
        <li><a href="#about"className="menu-btn"><strong>About</strong></a></li>
        <li><a href="#services" className="menu-btn"><strong>Services</strong></a></li>
        <li><a href="#skills" className="menu-btn"><strong>Skills</strong></a></li>
        <li><a href="#projects" className="menu-btn"><strong>Projects</strong></a></li>
        <li><a href="#contact" className="menu-btn"><strong>Contact</strong></a></li>
      </ul>

    </div>
  </nav> 
        </>
    )
}
export default Navbar;