import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const data = useGlobalContext();
  console.log("data>>", data);

  return <div>Hero</div>;
};

export default Hero;
