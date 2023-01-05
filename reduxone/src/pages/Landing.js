import { Logo } from "../components";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
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
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job app" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
