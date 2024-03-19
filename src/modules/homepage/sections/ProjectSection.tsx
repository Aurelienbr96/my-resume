import fidmeImg from "../../../assets/img/fidme.png";
import dokkiImg from "../../../assets/img/dokki.png";
import priumImg from "../../../assets/img/prium.png";
import ffrImg from "../../../assets/img/ffr.png";
import { ImgProject } from "./components/ImgProject";

export const ProjectSection = () => {
  return (
    <div className="flex flex-col">
      <p className="text-3xl dark:text-dark-highlight hidden lg:block">
        Featured projects
      </p>
      <ImgProject
        img={priumImg}
        alt="professionnal experience prium"
        description="Internal and Client Back Office Solutions for Prium One, a Salary Portage Company"
        title="Prium"
      />
      <ImgProject
        img={dokkiImg}
        alt="professionnal experience dokki"
        description="E learning mobile application for companies and organizations"
        title="Dokki"
      />
      <ImgProject
        img={fidmeImg}
        alt="professionnal experience fidme"
        description="Mobile application to handle your loyaulty card with 4 millions users in France"
        title="Fidme"
      />
      <ImgProject
        img={ffrImg}
        alt="professionnal experience ffr"
        description="The website of the french federation rugby"
        title="FFR"
      />
    </div>
  );
};
