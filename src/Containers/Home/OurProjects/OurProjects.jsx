import classes from "./OurProjects.module.css";
import kitchenImg from "../../../assets/HomePage/kitchen.png";
import hallwayImg from "../../../assets/HomePage/hallway.png";
import workspaceImg from "../../../assets/HomePage/workspace.png";
import livingRoomImg from "../../../assets/HomePage/livingRoom.png";
import Project from "./Project";
const OurProjects = () => {
  return (
    <div className={classes.OurProjectsSection}>
      <h1 className={classes.heading}>Follow Our Projects</h1>
      <p className={classes.subheading}>
        It is a long established fact that a reader will be distracted by the of
        readable content of page lookings at its layouts points.
      </p>
      <div className={classes.projectsContainer}>
        <Project
          imgSrc={kitchenImg}
          heading="Modern Kitchen"
          category="Decor / Architecture"
        />
        <Project
          imgSrc={hallwayImg}
          heading="Minimalistic Hallway"
          category="Decor / Architecture"
        />
  
        <Project
          imgSrc={workspaceImg}
          heading="Cozy Workspace"
          category="Decor / Architecture"
        />
        <Project
          imgSrc={livingRoomImg}
          heading="Chic Workspace"
          category="Decor / Architecture"
        />
      </div>
    </div>
  );
};

export default OurProjects;
