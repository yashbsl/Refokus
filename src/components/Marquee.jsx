import React from 'react'
import { ImGift } from 'react-icons/im'

function Marquee({imagesurls}) {
  return (
    <div className='flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden'>
        {imagesurls.map((url,index) =><img key={index} src={url} className='w-[6vw] shrink-0' />)}
        {imagesurls.map((url,index) =><img key={index} src={url} className='shrink-0' />)}

    </div>
  )
}

export default Marquee