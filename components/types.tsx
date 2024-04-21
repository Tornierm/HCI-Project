/* In TypeScript, interfaces are like contracts that define the structure of an object. 
They specify what properties and methods an object should have, but they don't provide the actual implementation. 
Think of interfaces as a blueprint for creating objects. */

//to-do: add all information that might be specified in the filters screen
export interface IFilterConfig {
    restrictions: Restrictions[];
}

//to-do: add all information that might be specified in the profile screen
export interface ICafe {
    name: String;
    restrictions: Restrictions[];
    offers: IOffer[];
    reviews: IReview[];
    location: {
        left: number,
        top: number,
    }
}

//to-do: add all information that might be specified in the offer screen
export interface IOffer {
    name: String;
    description: string;
    price: number;
}

export interface IReview {
    userId: number;
    comment: String;
    imageSrc: String;
}

export interface IUser {
    id: number;
    name: String;
    imageSrc: String;
}

export enum Restrictions {
    Vegan = "Vegan",
    Vegitarian = "Vegitarian",
    Halal = "Halal"
}