'use client'
import Image from 'next/image'
import React from 'react'

type MovieCardProps = {
  title: string
  thumbnail: string
  year?: string
  genre?: string
}

export const MovieCard: React.FC<MovieCardProps> = ({ title, thumbnail, year, genre }) => {
  return (
    <div className="w-[150px] sm:w-[180px] md:w-[200px] flex-shrink-0 transition-transform duration-300 hover:scale-105">
      <div className="relative rounded-lg overflow-hidden shadow-md">
        <Image
          src={thumbnail}
          alt={title}
          width={300}
          height={450}
          className="object-cover w-full h-[225px] md:h-[270px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>
      <div className="mt-2 px-1">
        <h3 className="text-sm sm:text-base font-semibold text-gray-800 truncate">{title}</h3>
        {year && <p className="text-xs text-gray-500">{year} {genre ? `• ${genre}` : ''}</p>}
      </div>
    </div>
  )
}