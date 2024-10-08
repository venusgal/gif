
import { FC } from "react"
import {  Card } from "react-bootstrap"


interface Igift{
    urlGift:string,
    title:string
   }
interface IPropsCardGift{
    gift:Igift
}
export const CardGift:FC<IPropsCardGift> = ({gift}) => {
  return (

    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={gift.urlGift} />
      <Card.Body>
        <Card.Title>{gift.title}</Card.Title>
      </Card.Body>
    </Card>

  )
}
