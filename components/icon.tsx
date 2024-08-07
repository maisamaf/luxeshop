import { icons, LucideProps } from "lucide-react-native";
import React from "react";
import { ColorValue } from "react-native";

interface IconProps {
  name: keyof typeof icons;
  color?: ColorValue;
  size?: LucideProps["size"];
  [key: string]: any;
}
const CustomIcon: React.FC<IconProps> = ({
  name,
  color = "#A4A8B5",
  size,
  ...props
}) => {
  const LucideIcon: React.FC<LucideProps & { color?: ColorValue }> =
    icons[name];

  return <LucideIcon color={color} size={size} {...props} />;
};

export default CustomIcon;
