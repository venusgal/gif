
import { useAppSelector } from "../../hooks/redux"
import { CardGift } from "../ui/CardGift/CardGift"



export const GiftList = () => {

    const gift= useAppSelector(state => state.gift.gift)

    return (
    <div
        style={{
            display:'grid',
            gridTemplateColumns:"repeat(3,.6fr)",
            gap: "2vh",
        }}
    >
        {gift.map((el,i)=>(
            <CardGift gift={el} key={i} />
        ))
        }
    </div>
    )
}
