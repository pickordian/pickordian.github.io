import TitleBanner from './TitleBanner'
import CardFrame from '@/public/assets/cardFrame.svg'
import Image from 'next/image'

const DeveloperAvatar = () => {
  return (
    <div className='relative flex flex-column w-[min(100%, 30rem)'>
      <CardFrame className="absolute top-0 left-0 w-full h-full"/>
      <div>
        
        
      </div>
      <TitleBanner className="text-[1.25rem] sm:text-[1.5rem]" title="The Developer" level={2}/>
    </div>
  )}
export default DeveloperAvatar;