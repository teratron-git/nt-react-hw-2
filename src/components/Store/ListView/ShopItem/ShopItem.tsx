import { IProducts } from "../../Store"
import st from "../ListView.module.css"

interface IProps {
  item: IProducts
}

const ShopItem = (props: IProps) => {
  return (
    <div className={st.shopItem}>
      <img src={props.item.img} className={st.shopItemImg} alt={props.item.name} />
      <div className={st.shopItemName}>{props.item.name}</div>
      <div className={st.shopItemColor}>{props.item.color}</div>
      <div className={st.shopItemPrice}>${props.item.price}</div>
      <div className={st.button}>ADD TO CARD</div>
    </div>
  )
}

export default ShopItem
