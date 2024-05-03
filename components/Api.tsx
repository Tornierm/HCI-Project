import { Features, ICafe, IUser, Price, Rating, Restrictions } from "./types";
const CoffeeShops: ICafe[] = [
    {
        name: "Stevens",
        address: "Calle de Berenguela, 19",
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
                comment: "Thsi was the best food ever!",
                imageSrc: "img/review1.jpg"
            }
        ],
        features: [
            Features.Laptop,
        ],
        location: {
            left: 100,
            top: 200,
        },
        rating: Rating.worst,
        price: Price.cheap,
        image: '../assets/CafèProfileImages/Steven2.jpeg'
    },
    /*
        add more cafes here
    */
        {
            name: "Sukis cafè",
            address: "Calle de Berenguela, 19",
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
                    comment: "I love this place!",
                    imageSrc: "img/review1.jpg"
                }
            ],
            features: [
                Features.Laptop,
            ],
            location: {
                left: 100,
                top: 400,
            },
            rating: Rating.worst,
            price: Price.cheap,
            image: '../assets/CafèProfileImages/Steven3.jpg'
        },
        {
            name: "The Green Spoon",
            restrictions: [
                Restrictions.Vegan,
                Restrictions.Vegetarian
            ],
            offers: [
                {
                    name: "Lunch Combo",
                    description: "A delicious plant-based burger with fries and a drink.",
                    price: 15,
                }
            ],
            reviews: [
                {
                    userId: 1,
                    comment: "Great atmosphere and friendly staff.",
                    imageSrc: "img/review1.jpg"
                }
            ],
            features: [
                Features.Laptop,
                Features.Outlet
            ],
            location: {
                left: 100,
                top: 500,
            },
            rating: Rating.good,
            image: '../assets/CafèProfileImages/Steven1.jpeg',
            price: Price.medium,
            address: "Calle de la Palma, 15, Madrid, Spain"
        },
        {
            name: "Java Halal",
            address: "Calle de Berenguela, 19",
            restrictions: [
                Restrictions.Halal
            ],
            offers: [
                {
                    name: "Morning Delight",
                    description: "A fresh croissant with a cup of our finest coffee.",
                    price: 8,
                }
            ],
            reviews: [
                {
                    userId: 2,
                    comment: "Perfect place for a morning coffee!",
                    imageSrc: "img/review2.jpg"
                }
            ],
            features: [
                Features.Booth
            ],
            location: {
                left: 0,
                top: 700,
            },
            rating: Rating.best,
            price: Price.cheap,
            image: '../assets/CafèProfileImages/Steven4.jpg'
        },
        {
            name: "Caffeine Hub",
            address: "Calle de Berenguela, 19",
            restrictions: [
                Restrictions.Vegan
            ],
            offers: [
                {
                    name: "Energy Boost",
                    description: "Espresso shot with vegan chocolate.",
                    price: 5,
                }
            ],
            reviews: [
                {
                    userId: 3,
                    comment: "Quick service and excellent coffee.",
                    imageSrc: "img/review3.jpg"
                }
            ],
            features: [
                Features.Outlet,
                Features.Laptop
            ],
            location: {
                left: 100,
                top: 500,
            },
            rating: Rating.neutral,
            price: Price.cheap,
            image: '../assets/CafèProfileImages/Steven2.jpeg'
        },
        {
            name: "Booth Café",
            address: "Calle de Berenguela, 19",
            restrictions: [
                Restrictions.Halal,
                Restrictions.Vegan
            ],
            offers: [
                {
                    name: "Booth Special",
                    description: "Special tea blend with homemade cookies.",
                    price: 12,
                }
            ],
            reviews: [
                {
                    userId: 4,
                    comment: "Cozy place, perfect for reading or working.",
                    imageSrc: "img/review4.jpg"
                }
            ],
            features: [
                Features.Booth
            ],
            location: {
                left: 0,
                top: 150,
            },
            rating: Rating.good,
            image: '../assets/CafèProfileImages/Steven4.jpg',
            price: Price.medium,
        },
        {
            name: "Outlet Oasis",
            address: "Calle de Berenguela, 19",
            restrictions: [
                Restrictions.Vegan
            ],
            offers: [
                {
                    name: "Work Day Deal",
                    description: "Unlimited coffee with access to a power outlet.",
                    price: 18,
                }
            ],
            reviews: [
                {
                    userId: 5,
                    comment: "Perfect for remote work!",
                    imageSrc: "img/review5.jpg"
                }
            ],
            features: [
                Features.Outlet,
                Features.Laptop
            ],
            location: {
                left: 50,
                top: 250,
            },
            rating: Rating.best,
            price: Price.expensive,
            image: '../assets/CafèProfileImages/Steven3.jpg'
        },
        {
            name: "Quiet Corner",
            address: "Calle de Berenguela, 19",
            restrictions: [
                Restrictions.Vegetarian,
                Restrictions.Halal
            ],
            offers: [
                {
                    name: "Tea Time",
                    description: "An assortment of fine teas and biscuits.",
                    price: 10,
                }
            ],
            reviews: [
                {
                    userId: 6,
                    comment: "Quiet and peaceful, ideal for studying.",
                    imageSrc: "img/review6.jpg"
                }
            ],
            features: [
                Features.Booth
            ],
            location: {
                left: 0,
                top: 500,
            },
            rating: Rating.neutral,
            price: Price.middle,
            image: '../assets/CafèProfileImages/Steven2.jpeg'
        },
        {
            name: "Veggie Vista",
            address: "Calle de Berenguela, 19",
            restrictions: [
                Restrictions.Vegan,
                Restrictions.Vegetarian
            ],
            offers: [
                {
                    name: "Vegan Feast",
                    description: "A full vegan meal for a healthy lunch.",
                    price: 20,
                }
            ],
            reviews: [
                {
                    userId: 7,
                    comment: "Delicious vegan options and great coffee.",
                    imageSrc: "img/review7.jpg"
                }
            ],
            features: [
                Features.Laptop,
                Features.Outlet
            ],
            location: {
                left: 50,
                top: 150,
            },
            rating: Rating.best,

            image: '../assets/CafèProfileImages/Steven1.jpeg',
            price: Price.cheap
        },
        {
            name: "Halal House",
            address: "Calle de Berenguela, 19",
            restrictions: [
                Restrictions.Halal
            ],
            offers: [
                {
                    name: "Halal Breakfast",
                    description: "Traditional halal breakfast with a modern twist.",
                    price: 15,
                }
            ],
            reviews: [
                {
                    userId: 8,
                    comment: "Authentic halal food with excellent service.",
                    imageSrc: "img/review8.jpg"
                }
            ],
            features: [
                Features.Outlet
            ],
            location: {
                left: 100,
                top: 300,
            },
            rating: Rating.good,

            image: '../assets/CafèProfileImages/Steven2.jpeg',
            price: Price.cheap
        }
]   

const Friends: IUser[] = [
    {
        id: 0,
        name: "Matteo",
        imageSrc: "../../assets/Matteo",
        reviews: [
            {
                userId: 0,
                comment: "Amazing experience with artisan coffee",
                imageSrc: "",
            }
        ]
    },
    {
        id: 1,
        name: "Francesco",
        imageSrc: "../../assets/FRANCESCO.jpg",
        reviews: [
            {
                userId: 1,
                comment: "Loved the ambiance and the espresso was top-notch!",
                imageSrc: "../../assets/review_Francesco.jpg"
            }
        ]
    },
    {
        id: 2,
        name: "Milan",
        imageSrc: "../../assets/MILAN.jpg",
        reviews: [
            {
                userId: 2,
                comment: "Perfect spot for catching up with friends, great service.",
                imageSrc: "../../assets/review_Milan.jpg"
            }
        ]
    },
    {
        id: 3,
        name: "Caro",
        imageSrc: "../../assets/CARO.jpg",
        reviews: [
            {
                userId: 3,
                comment: "A quiet, cozy place for reading and enjoying a good cup of coffee.",
                imageSrc: "../../assets/review_Caro.jpg"
            }
        ]
    },
    {
        id: 4,
        name: "Alex",
        imageSrc: "../../assets/ALEX.jpg",
        reviews: [
            {
                userId: 4,
                comment: "The coffee is excellent and the pastries are to die for!",
                imageSrc: "../../assets/review_Alex.jpg"
            }
        ]
    },
    {
        id: 5,
        name: "Manu",
        imageSrc: "../../assets/MANU.jpg",
        reviews: [
            {
                userId: 5,
                comment: "Great location, friendly staff, and the cold brew is refreshing!",
                imageSrc: "../../assets/review_Manu.jpg"
            }
        ]
    }
];


export const getCaffees = () => {
    return CoffeeShops;
}

export const getFriends = () => {
    return Friends;
}