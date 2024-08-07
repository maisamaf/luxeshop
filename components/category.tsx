import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ImageSourcePropType,
} from "react-native";

type Props = {
  image: ImageSourcePropType;
  title: string;
  link: string;
};

const Category = ({ image, title, link }: Props) => {
  return (
    <TouchableOpacity onPress={() => {}} className="items-center">
      <View className="p-4 border rounded-full w-fit border-grey/40">
        <Image source={image} className="w-7 h-7" />
      </View>
      <Text className="mt-2 text-sm">{title}</Text>
    </TouchableOpacity>
  );
};

export default Category;
