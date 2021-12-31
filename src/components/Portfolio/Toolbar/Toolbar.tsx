import React from "react"
import st from "../Portfolio.module.css"

interface IProps {
  filters: string[]
  selected: string
  onSelectFilter: (e: string) => void
}

const Toolbar = (props: IProps) => {
  return (
    <div className={st.toolbar}>
      {props.filters.map((filter) => (
        <div
          className={filter == props.selected ? `${st.menuItem} ${st.active}` : st.menuItem}
          key={filter}
          onClick={(e) => props.onSelectFilter((e.target as HTMLInputElement).innerText)}
        >
          {filter}
        </div>
      ))}
    </div>
  )
}

export default Toolbar
