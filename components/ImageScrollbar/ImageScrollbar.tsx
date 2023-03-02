import * as React from 'react';
import { Photo } from "../../models/property.model";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// function LeftArrow() {
//     const { scrollPrev } = useContext(VisibilityContext);
//
//     return (
//         <Flex justifyContent={'center'} alignItems={'center'} marginRight={1}>
//             <Icon as={FaArrowCircleLeft} onClick={() => scrollPrev()} fontSize={'2xl'} cursor={'pointer'} />
//         </Flex>
//     )
// }
//
// function RightArrow() {
//     const { scrollNext } = useContext(VisibilityContext);
//
//     return (
//         <Flex justifyContent={'center'} alignItems={'center'} marginRight={1}>
//             <Icon as={FaArrowCircleRight} onClick={() => scrollNext()} fontSize={'2xl'} cursor={'pointer'} />
//         </Flex>
//     )
// }

type Props = {
    data: Photo[];
};

export default function ImageScrollbar(props: Props) {
    return (
        <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} animationHandler={'fade'}>
            {props.data.map(image => (
                <Image
                    key={image.id}
                    src={image.url}
                    placeholder={'blur'}
                    blurDataURL={image.url}
                    width={1000}
                    height={500}
                    alt={`image-${image.id}`}
                    sizes="(max-width:500px) 100px, (max-width:1023px) 400px, 1000px" />
            ))}
        </Carousel>
    );
};