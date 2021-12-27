import { useState } from "react"
import CardsView from "./CardsView"
import IconSwitch from "./IconSwitch"
import ListView from "./ListView"

export interface IProducts {
  name: string
  price: string
  color: string
  img: string
}

const products: IProducts[] = [
  {
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg",
  },
  {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg",
  },
  {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg",
  },
  {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg",
  },
  {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg",
  },
  {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg",
  },
]

const Store = () => {
  const [view, setView] = useState("view_module")
  const onSwitchHandler = (icon: any) => {
    icon === "view_list" ? setView("view_module") : setView("view_list")
  }

  return (
    <div>
      <IconSwitch icon={view} onSwitch={onSwitchHandler} />
      {view === "view_module" ? <CardsView cards={products} /> : <ListView item={products} />}
    </div>
  )
}

export default Store
