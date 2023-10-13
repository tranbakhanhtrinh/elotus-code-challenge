import React from 'react'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import placeholder from '@/assets/images/placeholder.png'

type ImageProps = {
  alt: string,
  src: string
}

const Image = ({ alt, src }: ImageProps) => {
  return (
    <LazyLoadImage
      alt={alt}
      src={src} // use normal <img> attributes as props
      effect="blur"
      threshold={0}
      placeholderSrc={placeholder}
    />
  )
}

export default Image