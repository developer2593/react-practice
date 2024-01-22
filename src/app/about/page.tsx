// `app/about/page.tsx` is the UI for the `/about` URL
import './globals.css'
import Image from 'next/image'
export default function Page() {
    return(
      <div className="banner-section">
          <div className="container mx-auto">
            <div className="column w-full">
                <div className="banner-content relative flex justify-center">
                <Image className="w-full " src={'/image1.jpg'} 
                    width={1920}
                    height={500}
                    quality={100}	
                    alt="Banner Image" /> 
                    <div className='banner-content absolute flex justify-center '>
                      <h1 className="text-3xl">About Us</h1>
                  </div>
                </div>
            </div>
          </div>
      </div>
    )
  }