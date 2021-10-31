import Project from "./Project.js";

const ProjectList = () => {
  const projects = [{ name: "Quiz", url: "https://pszocik.github.io/quiz/" }];
  return (
    <div>
      {projects.map((el) => {
        return <Project project={el} />;
      })}
    </div>
  );
};

export default ProjectList;
