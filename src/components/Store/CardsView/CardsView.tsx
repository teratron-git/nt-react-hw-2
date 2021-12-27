import { IProducts } from "../Store"
import st from "./CardsView.module.css"
import ShopCard from "./ShopCard"

interface IProps {
  cards: IProducts[]
}

const CardsView = (props: IProps) => {
  return (
    <div className={st.container}>
      <div className={st.cardView}>
        {props.cards.map((card) => (
          <ShopCard card={card} key={`${card.name}-${card.color}`} />
        ))}
      </div>
    </div>
  )
}

export default CardsView
