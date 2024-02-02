import React from 'react'

function TopButtons({setQuery}) {

    const cities = [
        {
            id:1,
            title:'Rohtak'
        },
        {
            id:2,
            title:'Delhi'
        },
        {
            id:3,
            title:'Noida'
        },
        {
            id:4,
            title:'Banglore'
        },
        {
            id:5,
            title:'Paris'
        },
    ]
  return (
    <div className="flex items-center justify-around my-6 ">
        {cities.map((city)=>(
            <button key={city.id} className="text-white text-lg font-medium hover:scale-125"
            onClick={() => setQuery({q : city.title})}
            >{city.title}</button>
        )
        )}
    </div>

  )
}

export default TopButtons
