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
                description: "Only 2 hours working session throughout the day.",
                price: 20,
            }
        ],
        reviews: [
            {
                userName: "Steven",
                comment: "Thsi was the best food ever!",
                imageSrc: "review1.jpg"
            }
        ],
        features: [
            Features.Laptop,
        ],
        location: {
            left: 200,
            top: 200,
        },
        rating: Rating.worst,
        price: Price.cheap,
        image: 'steven'
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
                    userName: "Sophia",
                    comment: "I love this place!",
                    imageSrc: "review1.jpg"
                }
            ],
            features: [
                Features.Laptop,
            ],
            location: {
                left: 200,
                top: 800,
            },
            rating: Rating.worst,
            price: Price.cheap,
            image: 'souki'
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
                    userName: "Suki",
                    comment: "Great atmosphere and friendly staff.",
                    imageSrc: "review1.jpg"
                }
            ],
            features: [
                Features.Laptop,
                Features.Outlet
            ],
            location: {
                left: 800,
                top: 200,
            },
            rating: Rating.good,
            image: 'souki',
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
                    userName: "Max",
                    comment: "Perfect place for a morning coffee!",
                    imageSrc: "review2.jpg"
                }
            ],
            features: [
                Features.Booth
            ],
            location: {
                left: 800,
                top: 800,
            },
            rating: Rating.best,
            price: Price.cheap,
            image: 'other'
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
                    userName: "Franz",
                    comment: "Quick service and excellent coffee.",
                    imageSrc: "review3.jpg"
                }
            ],
            features: [
                Features.Outlet,
                Features.Laptop
            ],
            location: {
                left: 600,
                top: 400,
            },
            rating: Rating.neutral,
            price: Price.cheap,
            image: 'other'
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
                    userName: "Milan",
                    comment: "Cozy place, perfect for reading or working.",
                    imageSrc: "review4.jpg"
                }
            ],
            features: [
                Features.Booth
            ],
            location: {
                left: 600,
                top: 700,
            },
            rating: Rating.good,
            image: 'other',
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
                    userName: "Caro",
                    comment: "Perfect for remote work!",
                    imageSrc: "review5.jpg"
                }
            ],
            features: [
                Features.Outlet,
                Features.Laptop
            ],
            location: {
                left: 500,
                top: 500,
            },
            rating: Rating.best,
            price: Price.expensive,
            image: 'other'
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
                    userName: "Marlene",
                    comment: "Quiet and peaceful, ideal for studying.",
                    imageSrc: "review6.jpg"
                }
            ],
            features: [
                Features.Booth
            ],
            location: {
                left: 200,
                top: 540,
            },
            rating: Rating.neutral,
            price: Price.medium,
            image: 'other'
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
                    userName: "Sarah",
                    comment: "Delicious vegan options and great coffee.",
                    imageSrc: "review7.jpg"
                }
            ],
            features: [
                Features.Laptop,
                Features.Outlet
            ],
            location: {
                left: 500,
                top: 200,
            },
            rating: Rating.best,

            image: 'other',
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
                    userName: "Matteo",
                    comment: "Authentic halal food with excellent service.",
                    imageSrc: "review8.jpg"
                }
            ],
            features: [
                Features.Outlet
            ],
            location: {
                left: 300,
                top: 800,
            },
            rating: Rating.good,

            image: 'other',
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
                userName: "Matteo",
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
                userName: "Francesco",
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
                userName: "Milan",
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
                userName: "Caro",
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
                userName: "Alex",
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
                userName: "Manu",
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