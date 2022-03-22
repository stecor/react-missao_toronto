import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getCategories } from '../services'

const Header = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div className="container mx-auto mb-8 px-10 ">
      <div className="inline-block w-full border-b border-white py-8 ">
        <div className="text-center  lg:float-left  lg:flex lg:justify-center">
          <Image
            src="/logo.jpg"
            alt="Igreja Missão Toronto"
            width="80px"
            height="80px"
            className=" h-80 w-full rounded-full object-top    shadow-lg lg:rounded-full"
          />
          <Link href="/">
            <span className=" float-left mt-5 ml-7 cursor-pointer  text-5xl font-bold text-white">
              Igreja Missão Toronto
            </span>
          </Link>
        </div>

        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="mt-2 ml-4 cursor-pointer align-middle font-semibold text-white md:float-right">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
