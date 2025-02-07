"use client"
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea"


function SelectTopic({onUserSelect} : any) {

  const options = ['Custom Prompt', 'Random AI Story', 'Scary Story', 'Motivational Story', 'Bed Time Story', 'Historical Story'];

  const [selectedOption, setSelectedOption] = React.useState('');

  return (
    <div>
      <h2 className="font-bold text-2xl">Content</h2>
      <p className="text-gray-500 mt-2 text-sm">Select the context of your video</p>
      <Select onValueChange={(value) => {
        setSelectedOption(value)
        value !== "Custom Prompt" && onUserSelect("topic", value);
      }}>
        <SelectTrigger className="w-full mt-5 p-5">
          <SelectValue  placeholder="Content Type" />
        </SelectTrigger>
        <SelectContent>
          {options.map((item) => (
            <SelectItem key={item} value={item} className="font-semibold">{item}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      {selectedOption == "Custom Prompt" && (
        <div className="mt-5">
          <Textarea onChange={(e) => onUserSelect("topic", e.target.value)} placeholder="Write your own custom prompt to generate a video"/>
        </div>
      )}
    </div>
  );
}

export default SelectTopic;
