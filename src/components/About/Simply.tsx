import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const Simply = () => {
    return (
        <div className="flex flex-col md:flex-row-reverse w-full max-w-[1400px] mx-auto gap-8 pb-10 bg-white px-6 md:px-12 items-stretch">

            {/* Left Box: Large Image Slider */}
            <div className="w-3/4 relative md:min-h-[550px]">
                <Image
                    src="https://images.squarespace-cdn.com/content/v1/63f8a91775cbc4414ec45764/1740126778729-QJPYOF2L60H6JRG17BI5/NomadPenthouse_0198.jpg"
                    alt="Luxury Interior"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Right Box: Content Box */}
            <div className="w-full md:w-[35%] bg-[#F7F6F2] p-10 md:p-12 flex flex-col justify-center relative min-h-[400px]">
                <div className="max-w-lg">
                    <p className="text-sm md:text-base text-black leading-tight font-medium mb-8">
                        Put simply, we’re boldly reimagining what it means to create a modern home. Elegant dwellings equipped with a sense of identity and place. Sophisticated, intuitively designed spaces to fall in love with.
                    </p>
                </div>

                {/* Bottom Navigation Arrows (Exact same as screenshot) */}
                <div className="absolute bottom-10 left-10 md:left-16 flex gap-6 text-[#1a1a1a]/30">
                    <ArrowLeft size={20} className="cursor-pointer hover:text-black transition-all duration-300" strokeWidth={1.5} />
                    <ArrowRight size={20} className="cursor-pointer hover:text-black transition-all duration-300" strokeWidth={1.5} />
                </div>
            </div>
        </div>
    )
}

export default Simply