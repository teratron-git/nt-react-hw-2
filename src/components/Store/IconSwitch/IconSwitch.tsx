interface IProps {
  icon: string
  onSwitch: (icon: string) => void
}

const IconSwitch = (props: IProps) => {
  return (
    <div style={{ position: "absolute", top: "20px", right: "100px" }}>
      <span
        className="material-icons"
        style={{ color: "grey", fontSize: "48px" }}
        onClick={(e) => props.onSwitch((e.target as HTMLInputElement).innerText)}
      >
        {props.icon == "view_list" ? "view_list" : "view_module"}
      </span>
    </div>
  )
}

export default IconSwitch
