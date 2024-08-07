import { ImageSourcePropType } from "react-native";
import uuid from "react-native-uuid";

// for the sake of example
const images = [
  require("@/assets/images/blue-t-shirt.jpeg"),
  require("@/assets/images/shirt-1.jpg"),
  require("@/assets/images/shirt-2.jpg"),
];

export const productList = [
  {
    slug: "blue-t-shirt",
    id: uuid.v4(),
    title: "Uniqlo Basic T-shirt Oversized White",
    description: "Table with air Purifier, stained veneer/black",
    price: 2390,
    color: "black",
    discount: 10,
    quantity: 1,
    rating: 4.9,
    soldItems: 344,
    location: "Sydney",
    images: images, // just to have a slider
  },
  {
    slug: "freedom-band-collar-green-t-shirt",
    id: uuid.v4(),
    title: "Freedom Band Collar P. Green T-shirt",
    description:
      "Add contemporary style to your casual wear collection with this elegant Band collar T-shirt. This Band collar T-shirt is made using the latest dying techniques that resists color fading and staining. The superior stitching gives it durability against pilling and wrinkles to give you a decent look for a much longer time.",
    price: 3595,
    color: "green",
    quantity: 1,
    rating: 4.9,
    soldItems: 344,
    location: "Sydney",
    images: [
      require("@/assets/images/shirt-1.jpg"),
      require("@/assets/images/blue-t-shirt.jpeg"),
      require("@/assets/images/shirt-2.jpg"),
    ], // just to have a slider
  },
  {
    slug: "navy-printed-band-collar-cotton-t-shirt",
    id: uuid.v4(),
    title: "Navy Printed Band Collar Cotton T-shirt",
    description:
      "This shirt features a sleek and minimalistic collar band, typically measuring two to five centimeters in height, running seamlessly around the neckline without any folding or turndown. It’s perfect for pairing with denim jeans or chinos, and you’ll love the way it gives a smart sophisticated look.",
    price: 3595,
    color: "navy",
    quantity: 1,
    rating: 4.9,
    soldItems: 344,
    location: "Sydney",
    images: [
      require("@/assets/images/shirt-2.jpg"),
      require("@/assets/images/blue-t-shirt.jpeg"),
      require("@/assets/images/shirt-1.jpg"),
    ],
  },
  {
    slug: "black-plain-crew-neck-t-shirt",
    id: uuid.v4(),
    title: "Black Plain Crew Neck T-shirt",
    description:
      "This crew neck shirt is a casual everyday wear and a super comfortable choice. Made from high-quality fabric, this shirt is extremely lightweight and has a natural stretch. You can get this shirt to elevate your wardrobe with comfort, style, and versatility.",
    price: 4275,
    color: "black",
    quantity: 1,
    rating: 4.9,
    soldItems: 344,
    location: "Sydney",
    images: [require("@/assets/images/shirt-3.jpg"), ...images],
  },
  {
    slug: "teal-texture-cotton-short",
    id: uuid.v4(),
    title: "Teal Texture Cotton Short",
    description:
      "Experience the comfort and softness of our cotton shorts. These shorts provide exceptional comfort in the summer season. Our customers love the versatility of these shorts, especially the easy-to-wear style and side pockets that display a contemporary style. You can pair these shorts with our premium or basic tee or use them as your comfy sleepwear.",
    price: 2695,
    color: "teal",
    discount: 30,
    quantity: 1,
    rating: 4.9,
    soldItems: 344,
    location: "Sydney",
    images: [require("@/assets/images/short.jpg"), ...images],
  },
  {
    slug: "1947-grey-crew-t-shirt",
    id: uuid.v4(),
    title: "1947 Grey Crew Neck T-shirt",
    description:
      "This special shirt is designed to celebrate history and independence in style. Crafted from premium cotton, this crew neck t-shirt offers ultimate comfort and durability. The bold and distinctive '1947' graphic print pays homage to the year of Pakistan’s independence, making it a perfect blend of fashion and heritage. Its light grey color is versatile and easy to match with any trousers or pants.",
    price: 2295,
    color: "grey",
    quantity: 1,
    rating: 4.9,
    soldItems: 344,
    location: "Sydney",
    images: [require("@/assets/images/shirt-5.jpg"), ...images],
  },
  {
    slug: "e-blue-printed-crew-neck-t-shirt",
    id: uuid.v4(),
    title: "E Blue Printed Crew Neck T-shirt",
    description:
      "This crew neck shirt is a casual everyday wear and a super comfortable choice. Made from high-quality fabric, this shirt is extremely lightweight and has a natural stretch. You can get this shirt to elevate your wardrobe with comfort, style, and versatility.",
    price: 2295,
    color: "blue",
    discount: 12,
    quantity: 1,
    rating: 4.9,
    soldItems: 344,
    location: "Sydney",
    images: [require("@/assets/images/shirt-6.jpg"), ...images],
  },
  {
    slug: "legendary-navy-crew-neck-t-shirt",
    id: uuid.v4(),
    title: "Legendaddy Navy Crew Neck T-shirt",
    description:
      "This crew neck shirt is a casual everyday wear and a super comfortable choice. Made from high-quality fabric, this shirt is extremely lightweight and has a natural stretch. You can get this shirt to elevate your wardrobe with comfort, style, and versatility.",
    price: 2295,
    color: "navy",
    quantity: 1,
    rating: 4.9,
    soldItems: 344,
    location: "Sydney",
    images: [require("@/assets/images/shirt-4.jpg"), ...images],
  },
  {
    slug: "uniqlo-basic-shirt-oversized-white",
    id: uuid.v4(),
    title: "Uniqlo Basic T-shirt Oversized White",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    price: 1200,
    color: "white",
    quantity: 1,
    rating: 4.9,
    soldItems: 564,
    location: "Pakistan",
    images: [require("@/assets/images/white-tshirt.png"), ...images],
  },
  {
    slug: "new-balance-550-mens-sneakers-shoes",
    id: uuid.v4(),
    title: "New Balance 550 Men's Sneakers Shoes - Beige",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop.",
    price: 430,
    color: "beige",
    discount: 12,
    quantity: 1,
    rating: 4.9,
    soldItems: 246,
    location: "Sydney",
    images: [require("@/assets/images/shoe.png")],
  },
];

export const categoriesList = [
  {
    id: "electronic",
    title: "Electronic",
    image: require("@/assets/images/electronics.png"),
  },
  {
    id: "food-drink",
    title: "Food & Drink",
    image: require("@/assets/images/fast-food.png"),
  },
  {
    id: "accessories",
    title: "Accessories",
    image: require("@/assets/images/watch.png"),
  },
  {
    id: "beauty",
    title: "Beauty",
    image: require("@/assets/images/makeup-pouch.png"),
  },
  {
    id: "furniture",
    title: "Furniture",
    image: require("@/assets/images/sofa.png"),
  },
  {
    id: "fashion",
    title: "Fashion",
    image: require("@/assets/images/consumption.png"),
  },
  {
    id: "health",
    title: "Health",
    image: require("@/assets/images/healthcare.png"),
  },
  {
    id: "stationery",
    title: "Stationery",
    image: require("@/assets/images/stationery.png"),
  },
];
export const allData = [productList, categoriesList];

export type DataFormat = {
  [x: string]: any;
  slug: string;
  id: string;
  images: ImageSourcePropType[];
  title: string;
  description: string;
  price: number;
  rating: number;
  soldItems: number;
  discount?: number;
  location: string;
  color?: string;
};
