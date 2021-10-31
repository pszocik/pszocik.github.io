const Project = ({ project }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={project.url}>
      {project.name}
    </a>
  );
};

export default Project;
