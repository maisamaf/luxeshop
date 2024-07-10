import { Image, Linking, Text, TouchableOpacity, View } from 'react-native';
import { ImageSourcePropType } from 'react-native';
type Props = {
  image: ImageSourcePropType;
  title: string;
  link: string,
};

const Category = ({image, title, link}: Props) => {
  const handlePress = () => {
    Linking.openURL(link);
  };
  return (
    <TouchableOpacity onPress={handlePress} className='items-center'>
    <View className='p-5 border rounded-full w-fit border-grey/40'>
      <Image source={image} className='w-7 h-7' />
    </View>
    <Text className='mt-2 text-sm'>{title}</Text>
    </TouchableOpacity>
  );
};

export default Category;
