import { ICafe, Restrictions } from "./types";

const CoffeeShops: ICafe[] = [
    {
        name: "Stevens",
        restrictions: [
            Restrictions.Halal,
            Restrictions.Vegan
        ],
        offers: [
            {
                name: "super offer",
                description: "This describes everything that is offered in this offer.",
                price: 20,
            }
        ],
        reviews: [
            {
                userId: 0,
                comment: undefined,
                imageSrc: undefined
            }
        ],
        location: {
            left: 200,
            top: 200,
        }
    },
]

export const getCaffees = () => {
    return CoffeeShops;
}