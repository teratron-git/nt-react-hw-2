import { IProducts } from "../../Store"
import st from "../CardsView.module.css"

interface IProps {
  card: IProducts
}

const ShopCard = (props: IProps) => {
  return (
    <div className={st.shopCard}>
      <div className={st.shopCardName}>{props.card.name}</div>
      <div className={st.shopCardColor}>{props.card.color}</div>
      <img src={props.card.img} className={st.shopCardImg} alt={props.card.name} />
      <div className={st.shopCardBottom}>
        <div className={st.shopCardPrice}>${props.card.price}</div>
        <div className={st.button}>ADD TO CARD</div>
      </div>
    </div>
  )
}

export default ShopCard
