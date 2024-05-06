import { useState, useEffect } from 'react'
import bg from '../assets/bg-cafe.jpg'
import vector from '../assets/vector.svg'
import star from '../assets/Star.svg'
import star_fill from '../assets/Star_fill.svg'


const Card = ({data}) => {
  return (
    <div className='flex flex-col space-y-2 font-DM_Sans font-semibold'>
      <div className='relative'>
        <img src={data.image} className='z-0 rounded-xl' alt="coffee image" />
        {data.popular ? <p className='absolute top-3 left-3 z-10 rounded-full px-2 py-1 text-xs bg-[#F6C768]'>Popular</p> : <></>}
      </div>
      <div className='flex justify-between items-center'>
        <p className='text-[#FEF7EE] text-base'>{data.name}</p>
        <p className='px-2 py-1 bg-[#BEE3CC] text-[#1B1D1F] text-xs rounded-md'>{data.price}</p>
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex items-center space-x-1'>
          <img src={data.rating === null ? star : star_fill} alt="rating star icon" />
          {data.rating === null 
            ? <p className='text-[#6F757C] text-xs'>No ratings</p>
            : <>
                <p className='text-[#FEF7EE] text-sm'>{data.rating}</p>
                <p className='text-[#6F757C] text-xs'>({data.votes} votes)</p>
              </>
          }
        </div>
        <div>
          {data.available ? <></> : <p className='text-[#ED735D] text-xs'>Sold out</p>}
        </div>
      </div>
    </div>
  )
}


const LandingPage = () => {
  // states
  const [selectedButton, setSelectedButton] = useState(1)
  const [data, setData] = useState({})
  const [availableData, setAvailableData] = useState([]);
  
  // button's functions 
  const handleSelectedButton = (button) => {
    setSelectedButton(button)
  }

  const filterAvailableData = (data) => {
    setAvailableData(data.filter(data => data.available))
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
        const data = await response.json()
        setData(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, [])

  return (
    <div className="w-screen h-auto relative pt-40 bg-[#111315] font-DM_Sans">
      <div className={`w-full h-72 bg-contain sm:bg-cover sm:bg-top bg-no-repeat absolute top-0 left-0 z-0`} style={{ backgroundImage: `url(${bg})` }}></div>
      {/* main container */}
      <div className='xl:w-5/6 lg:w-[70%] sm:w-2/3 flex flex-col items-center mx-auto px-28 py-16 sm:px-[3.25rem] rounded-xl bg-[#1B1D1F] relative z-10 overflow-x-hidden'>
        {/* headers */}
        <div className='xl:w-[500px] lg:w-[500px] sm:w-full relative flex flex-col space-y-3 pb-10 text-center font-semibold'>
          <img src={vector} className='absolute -top-10 lg:right-0 sm:-right-24 z-0' alt="vector image" />
          <p className='mt-14 text-[#FEF7EE] text-3xl z-10'>Our Collection</p>
          <p className='text-[#6F757C] text-base z-10'>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
          <div className='flex space-x-4 justify-center	'>
            <button className={`text-[#FEF7EE] px-3 py-2 text-sm ${selectedButton === 1 ? 'bg-[#6F757C] rounded-lg' : ''}`} onClick={() => { handleSelectedButton(1) }}>All Products</button>
            <button className={`text-[#FEF7EE] px-3 py-2 text-sm ${selectedButton === 2 ? 'bg-[#6F757C] rounded-lg' : ''}`} onClick={() => { handleSelectedButton(2); filterAvailableData(data) }}>Available Now</button>
          </div>
        </div>
        {/* cards */}
        <div className='grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-x-8 gap-y-12'>
          {data.length > 0 && selectedButton === 1 ? data.map( data => <Card key={data.id} data={data}/>) : availableData.map( data => <Card key={data.id} data={data}/>)}
        </div>
      </div>
      <br />
    </div>
  )
}

export default LandingPage