import React from 'react';
import { Carousel, Box, Image } from 'grommet';

const images = [
  'site_portifolio/public/window.svg',
  'site_portifolio/public/vercel.svg',
  'site_portifolio/public/globe.svg',
  'site_portifolio/public/file.svg',
];

const CarouselComponent = () => {
  return (
    <Box align="center" pad="large">
      <Carousel fill>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            fit="cover"
          />
        ))}
      </Carousel>
    </Box>
  );
};

export default CarouselComponent;