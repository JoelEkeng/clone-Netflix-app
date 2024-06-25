import React from "react";
import { Button } from "@nextui-org/react";
import IconType from "antd/es/icon";

interface ButtonProps {
  text: string;
  height?: string;
  width?: string;
  icon?: typeof IconType;
}

export default function App({ text, height, width, icon: Icon }: ButtonProps) {
  return (
    <Button
      style={{ height: height, width: width }}
      className="button-cls bg-red-600 rounded-md text-xl flex items-center justify-center gap-4"
    >
      {text}
      {Icon && <Icon />}
    </Button>
  );
}
