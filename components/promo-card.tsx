import { Image, TouchableOpacity } from "react-native";

const PromoCard = ({ image, url }: { image?: string; url?: string }) => {
  return (
    <TouchableOpacity
      onPress={() => {}}
      className="h-48 overflow-hidden rounded-lg"
    >
      <Image
        source={require("@/assets/images/one.webp")}
        className="object-cover object-center w-full h-full"
      />
    </TouchableOpacity>
  );
};

export default PromoCard;
