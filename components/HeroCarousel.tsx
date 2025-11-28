
'use client'

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";


const HeroCarousel = () => {

    // Autoplay for image slides ONLY
    const autoplay = useRef(
        Autoplay({ 
            delay: 3500, 
            stopOnInteraction: false,
            stopOnMouseEnter: false
         })
    )

    // IMPORTANT: do NOT load autoplay plugin initially
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [plugins, setPlugins] = useState<any[]>([])

    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: "start" },
        plugins
    )

    // After video ends → Enable autoplay → Go to next slide
    const handleVideoEnd = useCallback(() => {
        if (!emblaApi) return

        // Re-enable Autoplay only after video ends
        setPlugins([autoplay.current])     

        // Move to next slide immediately
        emblaApi.scrollNext()

        // Start autoplay
        autoplay.current.reset()

    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            const index = emblaApi.selectedScrollSnap();

            // If we're back on the first slide (the video)
            if (index === 0) {
                
                // Completely disable autoplay while video is active
                setPlugins([])

                const video = document.getElementById("hero-video") as HTMLVideoElement

                if (video) {
                    video.currentTime = 0
                    video.play()
                }
            }

        };

        emblaApi.on("select", onSelect);
        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi]);


    
    return ( 
        <div className="overflow-hidden max-w-7xl mx-auto" ref={emblaRef}>
            <div className="flex">

                {/* Slide 1 - VIDEO */}
                <div className="relative min-w-full h-[570px]">
                    <video 
                        id="hero-video"
                        src={'/videos/Carousel-Video.mp4'}
                        autoPlay
                        muted
                        playsInline
                        onEnded={handleVideoEnd}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Slide 2 */}
                <div className="relative min-w-full h-[570px]">
                    <Image src={'/images/agency-carousel/Dashboard.png'} alt="slide 2" fill className="object-cover" />
                </div>

                {/* Slide 3 */}
                <div className="relative min-w-full h-[570px]">
                    <Image src={'/images/agency-carousel/EditProduct.png'} alt="slide 3" fill className="object-cover" />
                </div>

                {/* Slide 4 */}
                <div className="relative min-w-full h-[570px]">
                    <Image src={'/images/agency-carousel/Product-Details-1.png'} alt="slide 4" fill className="object-cover" />
                </div>

                {/* Slide 5 */}
                <div className="relative min-w-full h-[570px]">
                    <Image src={'/images/agency-carousel/Product-Details-2.png'} alt="slide 5" fill className="object-cover" />
                </div>

                {/* Slide 6 */}
                <div className="relative min-w-full h-[570px]">
                    <Image src={'/images/agency-carousel/Product-Details-3.png'} alt="slide 6" fill className="object-cover" />
                </div>

                {/* Slide 7 */}
                <div className="relative min-w-full h-[570px]">
                    <Image src={'/images/agency-carousel/Dashboard-Categories.png'} alt="slide 7" fill className="object-cover" />
                </div>

                {/* Slide 8 */}
                <div className="relative min-w-full h-[570px]">
                    <Image src={'/images/agency-carousel/gemnest-1.png'} alt="slide 8" fill className="object-cover" />
                </div>

                {/* Slide 9 */}
                <div className="relative min-w-full h-[570px]">
                    <Image src={'/images/agency-carousel/gemnest-2.png'} alt="slide 9" fill className="object-cover" />
                </div>

                {/* Slide 10 */}
                <div className="relative min-w-full h-[570px]">
                    <Image src={'/images/agency-carousel/gemnest-3.png'} alt="slide 10" fill className="object-cover" />
                </div>
            </div>
        </div>
     );
}
 
export default HeroCarousel;