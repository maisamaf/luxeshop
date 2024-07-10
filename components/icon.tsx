import { icons, LucideProps } from 'lucide-react-native';
import React from 'react';
import { ColorValue } from 'react-native';

interface IconProps {
  name: keyof typeof icons;
  color?: ColorValue;
  size?: LucideProps['size'];
  isGray?: boolean;
}

const CustomIcon: React.FC<IconProps> = ({ name, color, size, isGray }) => {
  const LucideIcon: React.FC<LucideProps & { color?: ColorValue }> = icons[name];

  return <LucideIcon color={isGray ? '#A4A8B5' : color} size={size} />;
};

export default CustomIcon;
