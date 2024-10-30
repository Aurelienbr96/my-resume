import fidmeImg from "../../../assets/img/fidme.png";
import dokkiImg from "../../../assets/img/dokki.png";
import priumImg from "../../../assets/img/prium.png";
import ffrImg from "../../../assets/img/ffr.png";
import { ImgProject } from "./components/ImgProject";
import { PopupButton } from "react-calendly";

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
      <div className="flex justify-center">
        <PopupButton
          className="my-5 mb-10 text-white bg-calendly-color rounded-lg w-fit px-5 py-2"
          url="https://calendly.com/aurelienbrachet123"
          /*
           * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
           * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
           */
          rootElement={document.getElementById("root") as HTMLElement}
          text="Click here to schedule a call !"
        />
      </div>
    </div>
  );
};
