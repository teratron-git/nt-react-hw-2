import React from "react"
import st from "../../Dropdown.module.css"

interface IProps {
  link: string
  activeItem: string
  onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}

const DropdownItem = (props: IProps) => {
  return (
    <li className={props.activeItem === props.link ? st.active : ""}>
      <a href="#" onClick={(e) => props.onClick(e)}>
        {props.link}
      </a>
    </li>
  )
}

export default DropdownItem
