import { View, Text, Pressable, PressableProps } from "react-native";
import React, { ButtonHTMLAttributes } from "react";

interface CustomButtonProps extends PressableProps {
  children: string;
  color?: "primary" | "secondary" | "tertiary";
  className?: string;
}
const CustomButton = React.forwardRef(
  (
    { children, color = "primary", onPress, onLongPress, className }: CustomButtonProps,
    ref: React.Ref<View>
  ) => {
    const btnColor = {
      primary: "bg-primary ",
      secondary: "bg-primary-200",
      tertiary: "bg-blue-500 ",
    }[color];

    return (
      <Pressable
        className={`p-3 mt-2 rounded-md ${btnColor} active:opacity-90 ${className}`}
        onPress={onPress}
        onLongPress={onLongPress}
        ref={ref}
      >
        <Text className="text-center font-firacode-regular text-white">
          {children}
        </Text>
      </Pressable>
    );
  }
);

export default CustomButton;
