import './index.css'
import './App.css';

function App() {
  return (
    <div>
        <link rel="stylesheet" href="./style.css"></link>
    <div className="Hero">
        <nav>
        <ul>
            <li><a href="./Cv.html">Home</a></li>
            <li><a href="./Education.html">Education</a></li>
            <li><a href="./Prijects.html">Projects</a></li>
            <li><a href="./certificates.html">Certificates</a></li>
            <li><a href="./About.html">About</a></li>
        </ul>
    </nav>
    </div>
    <div className="Detail">
        <h1>Hello World 👋<span> I'm Vinay Thappetla </span></h1>
        <p>Student of Mallareddy College Of Engineering And Technology</p>
        <p>With Stream Internet Of Things</p>
        <a href="Vinay Resume.pdf">DOWNLOAD CV</a>
    </div>
    <div className="image">
        <img src="./Holding Laptop.png" alt="" className="holding-laptop"/>
    </div>
    
</div>
  );
}

export default App;
