import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
      <div className='card px-4 w-full flex justify-between py-4 text-cyan-900'>
            <div className="font-bold text-2xl ">
                  <h3><span className='italic'>Manou's</span> Portfolio</h3>
            </div>
            <div className="flex space-x-4">
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