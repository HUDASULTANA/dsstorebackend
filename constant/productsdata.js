const products = [
  {
    id: "product1",
    url: "/mymockup.jpg",
    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70",
    title: {
      shortTitle: "Spaced-theme Book Cover",
      longTitle: "Book Cover inpired from INTESTELLAR of Christopher Nolan",
    },
    price: {
      mrp: 895,
      cost: 325,
      discount: "63%",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ci",
    tagline: "Deal of the day",
  },
  {
    id: "product2",
    url: "/prd1.png",
    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70",
    title: {
      shortTitle: "Colorful book cover",
      longTitle: "Amazing book cover inspired by GANGS OF WASEYPUR ",
    },
    price: {
      mrp: 899,
      cost: 499,
      discount: "44%",
    },
    description:
      'Hazrat_Hazrat_Hazrat Here comes the next one in the series, taking you to the gritty world of Gangs of Wasseypur  Feast your eyes on this epic book cover designed by fiery_ash013 which will make you say "Beta, humse na ho payega as it tells the timeless tale of power and vengeance in Wasseypur if the cult classic was released as a book first',
    tagline: "Politics Drama",
  },
  {
    id: "product3",
    url: "/prd2.png",
    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70",
    title: {
      shortTitle: "Book Cover",
      longTitle:
        "Book Cover inspired by ZINDAGI NA MILEGI DOBARA (FARHAN AKHTAR)",
    },
    price: {
      mrp: 499,
      cost: 166,
      discount: "66%",
    },
    description:
      'Heyaa!!👋Well its that time of year again. Another awesome batch got recruited and this is what bonkers they are dropping in first illustrator task of Design Studio🖌First in this series is "Zindagi Nah Milegi Dobara". This is a book cover designed by @anushakaa_ to give you a feel of what the book cover of ZNMD would look like if it would not have been released in the form of a movie but a book.',
    discount: "Upto 70% Off",
    tagline: "Deal of the Day",
  },
  {
    id: "product4",
    url: "/prd4.jpg",
    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70",
    title: {
      shortTitle: "POSTER",
      longTitle: "OPPEN HIEMER POSTER by Talented designer",
    },
    price: {
      mrp: 2999,
      cost: 1049,
      discount: "65%",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ci",
    discount: "Grab Now",
    tagline: "Best Seller",
  },
  {
    id: "product5",
    url: "/prd3.png",
    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70",
    title: {
      shortTitle: "Book Cover",
      longTitle: "Fantastic book cover inspired by ANDHADHUN (ANURAG KASHYAP)",
    },
    price: {
      mrp: 1899,
      cost: 1124,
      discount: "40%",
    },
    description:
      "Kala aadmi ko bohot kuch deti hai, lekin TDS bhi kaat leti hai Next up in our series is the cover of the tale that the audience couldnt peel their eyes off of- Andhadhun, if it was released as a book first The cover which is just as eye catching as the movie was, is designed by",
    discount: "From ₹499",
    tagline: "Thriller",
  },
  {
    id: "product6",
    url: "/prd5.jpg",
    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70",
    title: {
      shortTitle: "T-SHIRT",
      longTitle: "Customized T-shirt",
    },
    price: {
      mrp: 2999,
      cost: 1049,
      discount: "65%",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ci",
    discount: "Grab Now",
    tagline: "Best Seller",
  },
  {
    id: "product7",
    url: "/Nagpur_sticker.jpg",
    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70",
    title: {
      shortTitle: "STICKER",
      longTitle: "Nagpur stciker",
    },
    price: {
      mrp: 2999,
      cost: 1049,
      discount: "65%",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ci",
    discount: "Grab Now",
    tagline: "Best Seller",
  },
  {
    id: "product8",
    url: "/hp_sticker.jpg",
    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70",
    title: {
      shortTitle: "STICKER",
      longTitle: "Harry-Potter insiper stciker",
    },
    price: {
      mrp: 2999,
      cost: 1049,
      discount: "65%",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ci",
    discount: "Grab Now",
    tagline: "Best Seller",
  },
];
module.exports = products;