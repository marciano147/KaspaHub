import React, { FC, useEffect, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ItemCardComponent } from '../item-card/ItemCard';
import { CarouselContainer } from './Carousel.s';
import CustomButtonGroup from '../custom-arrows-carousel/CustomButtonGroup.tsx';

interface CardCarouselProps {
    cards: {
        logo: string;
        name: string;
        description: string;
        link: string;
    }[];
    darkMode?: boolean;
}

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1024 },
        items: 3,
        slidesToSlide: 3,
        rows: 2,
    },
    desktop: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
        slidesToSlide: 3,
        rows: 2,
    },
    tablet: {
        breakpoint: { max: 768, min: 464 },
        items: 2,
        slidesToSlide: 2,
        rows: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
        rows: 1,
    },
};

export const CardCarousel: FC<CardCarouselProps> = ({ cards }) => {
    const carouselRef1 = useRef<Carousel>(null);
    const carouselRef2 = useRef<Carousel>(null);
    const handleNext = () => {
        if (carouselRef1.current) (carouselRef1.current as any).next();
        if (carouselRef2.current) (carouselRef2.current as any).next();
    };

    const handlePrevious = () => {
        if (carouselRef1.current) (carouselRef1.current as any).previous();
        if (carouselRef2.current) (carouselRef2.current as any).previous();
    };

    useEffect(() => {
        if (carouselRef1.current && carouselRef2.current) {
            carouselRef1.current.goToSlide(0, false);
            carouselRef2.current.goToSlide(0, false);
        }
    }, [cards]);

    return (
        <CarouselContainer>
            <Carousel
                ref={carouselRef1}
                responsive={responsive}
                ssr
                infinite={false}
                autoPlay={false}
                keyBoardControl
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={['tablet', 'mobile']}
                itemClass="carousel-item-padding-40-px"
                arrows={false}
            >
                {cards.slice(0, Math.ceil(cards.length / 2)).map((card, index) => (
                    <ItemCardComponent
                        key={index}
                        logo={card.logo}
                        title={card.name}
                        description={card.description}
                        link={card.link}
                    />
                ))}
            </Carousel>
            <Carousel
                ref={carouselRef2}
                responsive={responsive}
                ssr
                infinite={false}
                autoPlay={false}
                keyBoardControl
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={['tablet', 'mobile']}
                itemClass="carousel-item-padding-40-px"
                arrows={false}
            >
                {cards.slice(Math.ceil(cards.length / 2)).map((card, index) => (
                    <ItemCardComponent
                        key={index}
                        logo={card.logo}
                        title={card.name}
                        description={card.description}
                        link={card.link}
                    />
                ))}
            </Carousel>
            <CustomButtonGroup next={handleNext} previous={handlePrevious} />
        </CarouselContainer>
    );
};
