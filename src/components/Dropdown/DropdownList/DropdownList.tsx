import React, { useState } from "react"
import st from "../Dropdown.module.css"
import DropdownItem from "./DropdownItem"

const links = ["Profile Information", "Change Password", "Become PRO", "Help", "Log Out"]

interface IProps {
  toggleHandler: () => void
}

const DropdownList = (props: IProps) => {
  const [activeItem, setActiveItem] = useState("Profile Information")
  const setActiveHandler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    setActiveItem((e.target as HTMLInputElement).innerText)

    // if you don't need to hide menu after select item please comment next string
    props.toggleHandler()
  }

  return (
    <ul data-id="dropdown" className={st.dropdown}>
      {links.map((link) => (
        <DropdownItem key={link} link={link} activeItem={activeItem} onClick={setActiveHandler} />
      ))}
    </ul>
  )
}

export default DropdownList
