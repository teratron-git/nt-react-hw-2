import { useState } from "react"
import st from "./Dropdown.module.css"
import DropdownList from "./DropdownList"

const Dropdown = () => {
  const [open, setOpen] = useState(false)

  const toggleHandler = () => {
    setOpen(!open)
  }

  return (
    <div className={st.container}>
      <div data-id="wrapper" className={open ? `${st.dropdownWrapper} ${st.open}` : `${st.dropdownWrapper}`}>
        <button type="button" data-id="toggle" className={st.btn} onClick={toggleHandler}>
          <span>Account Settings</span>
          <i className="material-icons">public</i>
        </button>
        <DropdownList toggleHandler={toggleHandler} />
      </div>
    </div>
  )
}

export default Dropdown
