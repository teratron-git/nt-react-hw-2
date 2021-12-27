import { IProducts } from "../Store"
import st from "./ListView.module.css"
import ShopItem from "./ShopItem"

interface IProps {
  item: IProducts[]
}

const ListView = (props: IProps) => {
  return (
    <div className={st.container}>
      <div className={st.listView}>
        {props.item.map((item, i) => (
          <ShopItem item={item} key={i} />
        ))}
      </div>
    </div>
  )
}

export default ListView
