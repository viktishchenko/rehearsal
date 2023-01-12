import Wrapper from "../assets/wrappers/JobInfo";

const Jobinfo = ({ icon, text }) => {
  return (
    <Wrapper>
      <span className="icon">{icon}</span>
      <span className="text">{text}</span>
    </Wrapper>
  );
};

export default Jobinfo;
