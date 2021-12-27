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
        {props.item.map((item) => (
          <ShopItem item={item} key={`${item.name}-${item.color}`} />
        ))}
      </div>
    </div>
  )
}

export default ListView
