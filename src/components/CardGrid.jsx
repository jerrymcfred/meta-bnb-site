import React from 'react'
import Card from './Card'

export default function CardGrid({ size }) {
  const data = [
    { id: 1, image: "grid/grid1.png" },
    { id: 2, image: "grid/grid2.png" },
    { id: 3, image: "grid/grid3.png" },
    { id: 4, image: "grid/grid4.png" },
    { id: 5, image: "grid/grid5.png" },
    { id: 6, image: "grid/grid6.png" },
    { id: 7, image: "grid/grid7.png" },
    { id: 8, image: "grid/grid8.png" },
    { id: 9, image: "grid/grid9.png" },
    { id: 10, image: "grid/grid10.png" },
    { id: 11, image: "grid/grid11.png" },
    { id: 12, image: "grid/grid12.png" },
    { id: 13, image: "grid/grid13.png" },
    { id: 14, image: "grid/grid14.png" },
    { id: 15, image: "grid/grid15.png" },
    { id: 16, image: "grid/grid16.png" },
  ]
  
  return (
    <div className="grid justify-center w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {data.slice(0, size).map((item) => (
        <Card key={item.id} image={item.image} />
      ))}
    </div>
  )
}
