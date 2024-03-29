import React from 'react'
import { iconUrlFromCode } from '../Services/weatherService';

function Forecast({title,items}) {
  return (
    <div>
      <div className='flex item-center justify-start mt-6'>
        <p className='text-white font-medium uppercase'>{title}</p>
      </div>
      <hr className='my-2' />

      { items && items.map(item =>(

      <div className='flex flex-row items-center justify-between text-white'>

        <div className='flex flex-col items-center justify-center'>
          <p className='font-light text-sm'>{item.title}</p>
          <img src={iconUrlFromCode(item.icon)} className='w-12 my-1' alt="" />
          <p className='font-medium'>{`${item.temp}°`}</p>
        </div>
      </div>
      ))};
  
    </div>
  )
}

export default Forecast;
