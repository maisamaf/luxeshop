import { View, TextInput, Pressable } from "react-native";
import CustomIcon from "./icon";
import { useRouter } from "expo-router";

type Props = object;

const Search = (props: Props) => {
  const router = useRouter();
  return (
    <Pressable onPress={() => router.push("/search")} className="w-full">
      <TextInput
        placeholder="Search here..."
        className="p-2 border rounded-md border-grey/40 placeholder:text-sm placeholder:px-12 focus:border-primary"
      />
      <View className="absolute left-4 top-4">
        <CustomIcon name="Search" size={18} isGray />
      </View>
      <View className="absolute top-4 right-4">
        <CustomIcon name="ListFilter" size={18} isGray />
      </View>
    </Pressable>
  );
};

export default Search;
