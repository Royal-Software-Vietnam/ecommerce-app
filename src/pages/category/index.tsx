import React from 'react'
import LeftSide from './LeftSide'
import Content from './Content'

function index() {
  return (
    <div className="flex w-full px-[6.8%]">
        <LeftSide />
        <Content />
    </div>
  )
}

export default index