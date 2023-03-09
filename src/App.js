
import './stylesheet.css';

function App() {
  return (
    <div>
        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
          <div className="navbar-end">
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
            <div id="example" className="navbar-menu">
              <div className="navbar-start">
                <a className="navbar-item">
                  About me
                </a>
                <a className="navbar-item">
                  Education
                </a>
                <a className="navbar-item">
                  Experience
                </a>
                <a className="navbar-item">
                  Awards
                </a>
                <a className="navbar-item">
                  Projects
                </a>
                <a className="navbar-item">
                  Professional Background
                </a>    
              </div>
            </div>
          </div>
        </nav>
        <img src="photo.jpg" />
        <section className="hero  is-medium ">
          <div className="hero-body">
            <p className="title">
              Hi,I'm Sasini Tennakoon
            </p>
            <p className="subtitle">
              UG of University of Colombo School of Computing
            </p>
          </div>
        </section>
        <div className="columns ">
          <div className="column is-half has-background-grey-light">
            <h1 className="title is-1 is-family-code has-text-centered">About me</h1>
            <p>I am a first year undergraduate.I am a freelancer. Software Engineer and Web Developer.</p>
            <div className="content">
              <ul>
                <li>Sasini Tennakoon</li>
                <li>21 years old</li>
                <li>Colombom 10, Sri Lanka</li>
                <li>06 August 2001</li>
                <li>University of Colombo School of Computing</li>
                <li> Bsc.Information System</li>
                <li>sas2020@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="column">
            <img src="th (1).jfif" height="500px" width="600px" />
          </div>
        </div>
        <div className="columns">
          <div className="column is-half">
            <img src="th (2).jfif" height="500px" width="600px" />
          </div>
          <div className="column has-background-grey-light">
            <h1 className="title is-1 is-family-code has-text-centered">Education</h1>
            <p>Bachelors Degree<br />(2020 to present)<br />Information Sysatem degree at University of Colombo School of Computing</p>
            <p>Secondary Education<br />(2007-2020)<br />Maliyadeva Balika Vidyalaya</p>
            <div className="content">
              <ul>
                <li>Passed G.C.E(A/L) Examination with B,C,S passes in common stream </li>
                <li>Passed G.C.E(O/L) Examionation with 6A s, 2B s and S pass.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-half has-background-grey-light">
            <h1 className="title is-1 is-family-code has-text-centered">Experiences</h1>
            <ul>
              <li>Member of ISACA student chapter of University of Colombo School of Computing</li>
              <li>Member of IEEE organization of University of Colombo School of Computing</li>
              <li>Generala Member of Rotaract Club of UCSC</li>
            </ul>
            <h1 className="title is-1 is-family-code has-text-centered">Awards</h1>
            <ul>
              <li>Golden award of Dialog Hack Competition</li>
              <li>MMS Award Winner</li>
            </ul>
          </div>
          <div className="column">
            <img src="th (3).jfif" height="500px" width="400px" />
          </div>
        </div>
        <div>
        </div>
        <div className="columns ">
          <div className="column is-half">
            <img src="construction-project-background-image-sketches-white-backdrop-43988110.jpg" height="500px" width="500px" />
          </div>
          <div className="column has-background-grey-light">
            <h1 className="title is-1 is-family-code has-text-centered">Projects</h1>
            <p>Developing Website for ABC Group PVT</p>
            <p>Member of DECT project of Ministry of Education</p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-half has-background-grey-light">
            <h1 className="title is-1 is-family-code has-text-centered">Professional Background</h1>
            <p>Part time worker at Arimac Technologies</p>
          </div>
          <div className="column">
            <img src="th (4).jfif" height="500px" width="300px" />
          </div>
        </div>
        <div className="columns">
          <div className="column is-full">
          </div>
        </div>
        <div className="columns">
          <div className="column is-half has-background-grey-light ">
            <h1 className="subtitle is-4">Contact Me</h1>
            <p>colombo,sri lanka</p>
            <p>sas2020@gmail.com</p>
            <p>077-123456</p>
            <p>Part time worker at Arimac Technologies</p>
          </div>
          <div className="column has-background-grey-light">
            <img src="Google-Maps.jpg" height="500px" width="500px" />
          </div>
        </div>
      </div>
  );
}

export default App;
