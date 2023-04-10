import Image from 'next/image'
import React from 'react'

export default function SectionInquiry() {
  return (
    <div className="box-container relative flex justify-center mt-6">
        <Image className="rounded-lg" src={"/home-4.png"} width={1190} height={446} alt='' priority />
        <div className="absolute top-0 right-[7%] bottom-0 left-[7%] bg-inquiry">
        </div>
    </div>
  )
}
