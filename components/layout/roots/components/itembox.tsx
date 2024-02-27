import React from 'react'
import Image from 'next/image'

const ItemContainer : React.FC = () => {
 
  return (
    <section className='w-full h-[300px] overflow-hidden bg-zinc-800 flex items-center justify-center text-white'>
        <Image
          loading = "lazy"
          src={"https://staticg.sportskeeda.com/editor/2022/12/dd983-16699179979799-1920.jpg"}
          width={200}
          height={160}
          alt={"src"}
          quality={100}
          sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 50vw,
               33vw"
          style={{ height: 'auto', width: '100%' , objectFit : "cover" }}
        />
    </section>
  )
}

export default ItemContainer;
