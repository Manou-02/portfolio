import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
      <div className='card px-4 w-full flex bg-inherit justify-between py-4 text-cyan-900'>
            <div className="font-extrabold text-2xl ">
                  <h3><span className=''>Manou&apos;s</span> Portfolio</h3>
            </div>
            <div className="md:flex space-x-4 hidden ">
                  <div className="cursor-pointer">
                        <Link href="/">
                              <a>Accueil</a>
                        </Link>
                  </div>
                  <div className="cursor-pointer">
                        <Link href="/competences">
                              <a>Competences</a>
                        </Link>
                  </div>
                  <div className="cursor-pointer">
                        <Link href="/experiences">
                              <a>Experiences</a>
                        </Link>
                  </div>
                  <div className="cursor-pointer">
                        <Link href="/apropos">
                              <a>A-propos</a>
                        </Link>
                  </div>
                  <div className="cursor-pointer">
                        <Link href="/contact">
                              <a>Contact</a>
                        </Link>
                  </div>
            </div>
      </div>
  )
}

export default Header