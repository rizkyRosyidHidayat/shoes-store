import React from 'react'

type Props = {
  photos: string[]
}

const PhotoProduct = (props: Props) => {
  return (
    <div className='grid col-span-md-1 col-span-lg-2 col-gap-3 row-gap-3'>
      {props.photos.map((item, index) => (
        <div key={index}>
          <img src={item} alt="product" className='w-full' />
        </div>
      ))}
    </div>
  )
}

export default PhotoProduct