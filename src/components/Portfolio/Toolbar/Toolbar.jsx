import st from "../Portfolio.module.css"

const Toolbar = (props) => {
  return (
    <div className={st.toolbar}>
      {props.filters.map((filter) => (
        <div
          className={filter == props.selected ? `${st.menuItem} ${st.active}` : st.menuItem}
          key={filter}
          onClick={(e) => props.onSelectFilter(e.target.innerText)}
        >
          {filter}
        </div>
      ))}
    </div>
  )
}

export default Toolbar
