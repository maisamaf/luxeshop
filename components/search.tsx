import { View, Text, TextInput } from 'react-native';
import CustomIcon from './icon';

type Props = object;

const Search = (props: Props) => {
  return (
    <View className='relative w-full'>
      <TextInput placeholder='Search here...' className='p-2 border rounded-md border-grey/40 placeholder:text-sm placeholder:px-12 focus:border-primary' />
      <View className='absolute left-4 top-4'>
        <CustomIcon name='Search' size={18} isGray />
      </View>
        <View className='absolute top-4 right-4'>
        <CustomIcon name='ListFilter' size={18} isGray />
      </View>
    </View>
  );
};

export default Search;
