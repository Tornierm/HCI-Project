import { ICafe, IFilterConfig, Price, Rating } from "../../types"

export const openCafeProfile = (cafe: ICafe, navigation) => {
    navigation.navigate( 
      "CafeProfile",
      { cafe: cafe }
    )
}



  export const openBooking = (cafe: ICafe, navigation) => {
    navigation.navigate( 
      "Booking",
      { cafe: cafe }
}
export const openActivity = (navigation) => {
    navigation.navigate( 
      "Activity",
    )
}


  export const openActivity = (navigation) => {
    navigation.navigate( 
      "Activity",
    )
}


  export function enumToNumber(rating: Rating): number {
    switch (rating) {
        case Rating.worst:
            return 1;
        case Rating.bad:
            return 2;
        case Rating.neutral:
            return 3;
        case Rating.good:
            return 4;
        case Rating.best:
            return 5;
        default:
          return 1;
        }
}

export function priceIsSmaller(filterConfig: IFilterConfig, price: Price): boolean {
    let returnVal = true;
    if(filterConfig.price === Price.cheap && (price === Price.medium || price === Price.expensive)){
      returnVal = false;
    } else if(filterConfig.price === Price.medium && price === Price.expensive){
      returnVal = false;
    }
    return returnVal;
}

export function determinePriceText(price: Price){
    if(price == Price.cheap){
        return "€"
    } else if(price == Price.medium){
        return "€€"
    } else if(price == Price.expensive){
        return "€€€"
    }
}
