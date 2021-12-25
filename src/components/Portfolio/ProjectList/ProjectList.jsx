import st from "../Portfolio.module.css"

const ProjectList = (props) => {
  return (
    <div className={st.projectList}>
      {props.projects.map((project, i) => (
        <img src={project.img} alt="" key={i} />
      ))}
    </div>
  )
}

export default ProjectList
