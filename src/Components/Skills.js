import ProgBar from "./ProgressBar";
import "./skills.css";

function Skills() {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <p>
        My Name is Ahmed Ehab ElkharadlyMy Loriem My Name is Ahmed Ehab
        ElkharadlyMyLoriem My Name is Ahmed Ehab ElkharadlyMyLoriem My Name is
        Ahmed Ehab ElkharadlyMyLoriem My Name is Ahmed Ehab ElkharadlyMyLoriem
        My Name is Ahmed Ehab ElkharadlyMyLoriem My Name is Ahmed Ehab
        ElkharadlyMyLoriem My Name is Ahmed Ehab ElkharadlyMyLoriem My Name is
        
      </p>
      <div className="progBar">
        <div className="skilltext">
            <h3>My Skills</h3>
            <h4>JavaScript</h4>
            <h4>React</h4>
            <h4>DataBase</h4>
            <h4>BackEnd</h4>
        </div>
        <div>
            <h3>Progress Bar</h3>
            <ProgBar/> 
            <ProgBar/>
            <ProgBar/>
            <ProgBar/>
            <ProgBar/>
        </div>  
      </div>
    </div>
  );
}
export default Skills;