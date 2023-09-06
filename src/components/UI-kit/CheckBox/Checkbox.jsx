import React, { useState } from 'react'
import './Checkbox.css'

export default function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const labelStyle = isChecked
    ? "filter-checkbox filter-checkbox_active"
    : "filter-checkbox";

  return (
    <label className={labelStyle}>
      <input
        type={"checkbox"}
        onChange={handleCheckboxChange}
        checked={isChecked}
      />
      <span className='filter-checkbox__mark'></span>
      <span className='filter-checkbox__tag'>Короткометражки</span>
    </label>
  )
}
