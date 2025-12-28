import Image from 'next/image'
import React from 'react'
import { LogoType } from '../lib/types'

type LogoScrollProps = {
  data: LogoType[];
  className?: string;
};

const LogoScroll = ({ data , className=''} : LogoScrollProps) => {
  return (
    <div className={`logo-scroll-container ${className}`}>
        { data.map( icon => (
            <div className='tech-logo' key={icon.name}>
                <Image
                    src={icon.path}
                    width={60}
                    height={50}
                    style={{ objectFit : 'contain'}}
                    alt={icon.name}
                    
                />
            </div>
        )) }
    </div>
  )
}

export default LogoScroll