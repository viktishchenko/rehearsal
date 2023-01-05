import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="logo" className="logo" />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            dicta cumque, dolores error sapiente aliquid. Voluptates consectetur
            nostrum unde beatae?
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job app" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
