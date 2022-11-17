import React from 'react'
import CardGrid from '../components/CardGrid'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='mt-16 sm:mt-32 '>
      <section className="hero sm:px-[100px] px-4 sm:mb-16 mb-8">
        <div className="flex flex-col justify-between w-full p-0 gap-y-8 lg:flex-row-reverse gap-x-28">
          <img src="hero-img.png" className="self-start w-full max-w-md" alt='hero'/>
          <div className='flex flex-col max-w-3xl lg:pt-10 gap-y-8'>
            <h1 className="text-4xl sm:text-6xl sm:mt-6">Rent a <span className='text-[#A02279] font-bold'>Place</span> away from <span className='text-[#A02279] font-bold'>Home</span> in the <span className='text-[#A02279] font-bold'>Metaverse</span></h1>
            <p className="text-xl sm:text-2xl">we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
            <div className="form-control">
              <div className="input-group">
                <input type="text" placeholder="Search for location" className="border w-2/3 max-w-sm input border-[#A3A3A3] grow" />
                <button type='button' className="btn bg-[#A02279] text-white sm:btn-wide hover:bg-[#A02279] hover:opacity-90">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='grid grid-cols-2 sm:flex bg-[#A02279] justify-between sm:px-[100px] px-4 sm:flex-nowrap py-2 gap-6 items-center mb-7'>
        <img src="mb-token.png" alt="mb token" />
        <img src="metamask.png" alt="metamask" />
        <img src="opensea.png" alt="opensea"/>
      </section>
      <section className="hero sm:px-[100px] px-4 sm:pt-10 pt-5 sm:pb-14 pb-8">
        <div className="flex flex-col w-full">
          <div>
            <h2 className="mb-8 text-4xl font-bold text-center text-black sm:text-6xl sm:mb-16">Inspiration for your next adventure</h2>
          </div>
          <div>
            <CardGrid size={8} />
          </div>
        </div>
      </section>
      <section>
        <div className="hero bg-[#A02279] text-white sm:p-[100px] p-4">
          <div className="flex flex-col items-center w-full gap-8 p-0 lg:flex-row-reverse lg:justify-between">
            <img src="hero-2.png" className="self-start w-full sm:max-w-md xl:max-w-max" alt='hero2'/>
            <div className='max-w-md'>
              <h3 className="text-4xl font-bold sm:text-6xl">Metabnb NFTs</h3>
              <p className="py-6">Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
              <button type='button' className="btn bg-white text-[#A02279] hover:bg-white hover:opacity-90 px-10 mt-10">Learn more</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  )
}
