import React from "react";
import {Input} from "@nextui-org/react";

interface InputProps {
    type: string;
    text: string;
}
export default function App({ text, type }: InputProps) {
  return (
      <Input 
        className="custom-input" 
        type={type}
        placeholder={text} 
        maxLength={100}/>
  );
}
  