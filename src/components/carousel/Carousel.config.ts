export const configurationCarouselSettings = (itemsCount: number) => {
    const slidesToShow = itemsCount < 6 ? 2 : 3;

    return {
        dots: false,
        infinite: false,
        speed: 600,
        slidesToShow,
        slidesToScroll: 1,
        // nextArrow: <NextArrow/>,
        // prevArrow: <PrevArrow/>,
        rows: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: Math.min(slidesToShow, 2),
                    slidesToScroll: 2,
                    rows: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: Math.min(slidesToShow, 2),
                    slidesToScroll: 2,
                    rows: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 2,
                },
            },
        ],
    };
};
