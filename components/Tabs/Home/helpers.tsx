import { ICafe } from "../../types"

export const openCafeProfile = (cafe: ICafe, navigation) => {
    navigation.navigate( 
      "CafeProfile",
      { cafe: cafe }
    )
}


export const openActivity = (navigation) => {
    navigation.navigate( 
      "Activity",
    )
}
