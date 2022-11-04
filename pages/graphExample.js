import { useQuery, gql } from "@apollo/client"

//we will add all of our graphQL stuff here; this is going to be the same as what we use in subGraph UI playground
//graphQL syntax is going to be whats in the subGraph UI playground, as we can write syntax there
//we only want activeItems; we can build it in subGraph UI playground
const GET_ACTIVE_ITEMS = gql`
    {
        activeItems(first: 5, where: { buyer: "0x0000000000000000000000000000000000000000" }) {
            id
            buyer
            seller
            nftAddress
            tokenId
            price
        }
    }
`

export default function GraphExample() {
    const { loading, error, data } = useQuery(GET_ACTIVE_ITEMS)
    console.log(data)
    return <div>hi</div>
}
