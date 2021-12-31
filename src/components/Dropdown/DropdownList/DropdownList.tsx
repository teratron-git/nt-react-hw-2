import React, { useState } from "react"
import st from "../Dropdown.module.css"
import DropdownItem from "./DropdownItem"

const links = ["Profile Information", "Change Password", "Become PRO", "Help", "Log Out"]

const DropdownList = () => {
  const [activeItem, setActiveItem] = useState("Profile Information")
  const setActiveHandler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    setActiveItem((e.target as HTMLInputElement).innerText)
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
