import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function SelectDuration({onUserSelect} : any) {
  return (
    <div className='mt-10'>
      <h2 className="font-bold text-2xl">Duration</h2>
      <p className="text-gray-500 mt-2 text-sm">Select the duration of your video</p>
      <Select onValueChange={(value) => {
        onUserSelect("duration", value);
      }}>
        <SelectTrigger className="w-[300px] mt-5 p-5">
          <SelectValue placeholder="Duration" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="30 seconds" className="font-semibold">30 seconds</SelectItem>
          <SelectItem value="60 seconds" className="font-semibold">60 seconds</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default SelectDuration