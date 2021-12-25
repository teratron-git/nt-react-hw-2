import { IData } from "../Portfolio"
import st from "../Portfolio.module.css"

interface IProps {
  projects: IData[]
}

const ProjectList = (props: IProps) => {
  return (
    <div className={st.projectList}>
      {props.projects.map((project, i) => (
        <img src={project.img} alt="" key={i} />
      ))}
    </div>
  )
}

export default ProjectList
