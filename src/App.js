import './index.css'
import './App.css';

function App() {
  return (
    <div>
        <link rel="stylesheet" href="./style.css"></link>
    <div className="Hero">
        <nav>
        <ul>
            <li><i><a href="./Cv.html">Home</a></i></li>
            <li><i><a href="./Education.html">Education</a></i></li>
            <li><i><a href="./Projects.html">Projects</a></i></li>
            <li><i><a href="./certificates.html">Certificates</a></i></li>
            <li><i><a href="./About.html">About</a></i></li>
        </ul>
    </nav>
    </div>
    <div className="Detail">
        <h1>Hello World 👋<span> I'm Vinay Thappetla </span></h1>
        <p>Student of Mallareddy College Of Engineering And Technology</p>
        <p>With Stream Internet Of Things</p>
        <a className='Download-cv' href="Certificates.pdf">DOWNLOAD CV</a>
    </div>
    <div className="image">
        <img src="./Holding Laptop.png" alt="" className="holding-laptop"/>
    </div>
    <div className="footer">
    <footer>
    <div class="footerconainer">
        <div class="socialicons">
             <a href="https://instagram.com/_mr.vinnu10_?igshid=MzNlNGNkZWQ4Mg==" target="_blank"><ion-icon name="logo-instagram" ></ion-icon></a>
             <a href="https://twitter.com/v_innu?t=EYqADrU3DW2klTk-BaG0Fw&s=08" target="_blank"><ion-icon name="logo-twitter"></ion-icon></a>
            <a href="https://www.linkedin.com/in/thappetla-vinay-kumar-88778b1bb" target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a>
            <a href="wa.me/919059236500" target="_blank"><ion-icon name="logo-whatsapp"></ion-icon></a>
        </div>
    </div>
    <div class="footerbottom">
        <p>Copyright &copy;2022 Designed By <span class="designer">Thappetla Vinay Kumar</span></p>
    </div>
</footer>
    </div>
</div>
  );
}

export default App;
