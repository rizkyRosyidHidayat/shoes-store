import React from 'react'

type Props = {}

const PhotoProduct = (props: Props) => {
  const photos = [1,2,3,4,5]
  return (
    <div className='grid col-span-2 col-gap-3 row-gap-3'>
      {photos.map(item => (
        <div key={item}>
          <img src="/img-detail.png" alt="product" className='w-full' />
        </div>
      ))}
    </div>
  )
}

export default PhotoProduct