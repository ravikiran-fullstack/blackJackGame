import React from 'react'

type Component1PropType = {
    func1: () => void;
}

const Component1 = ({func1}: Component1PropType) => {
    func1();
  return (
    <div>Component1</div>
  )
}

export default Component1