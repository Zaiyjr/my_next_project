import { useState } from "react";

import React from 'react'

const counter_item = () => {

const [count, setCount] = useState(0)

const hadleIncrease = () => {
     setCount(count+1)
}

const handleDecrease= () => {
    return count <= 0 ? alert('Can not be less than zero') : setCount(count-1)
}
  return {count, hadleIncrease, handleDecrease}
}

export default counter_item
