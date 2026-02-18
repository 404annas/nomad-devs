import Link from 'next/link';
import logo from "@/assets/logo.webp"
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className="absolute top-0 left-0 w-full z-50 px-6 md:px-12 py-4 text-white">
            <div className="grid grid-cols-3 items-start">

                {/* Left Links */}
                <div className="flex gap-30 items-center pt-10 justify-end">
                    <Link
                        href="/about"
                        className="relative group uppercase tracking-tight text-base font-semibold"
                    >
                        About
                        <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    <Link
                        href="/projects"
                        className="relative group uppercase tracking-tight text-base font-semibold"
                    >
                        Projects
                        <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </div>

                {/* Center Logo */}
                <div className="flex justify-center">
                    <Link href={"/"} className="relative w-40 md:w-64 h-24 md:h-30">
                        <Image
                            src={logo}
                            alt='Nomad Logo'
                            fill
                            priority
                            className='object-contain'
                        />
                    </Link>
                </div>

                {/* Right Links */}
                <div className="flex gap-30 items-center pt-10 justify-start">
                    <Link
                        href="/private-client"
                        className="relative group uppercase tracking-tight text-base font-semibold"
                    >
                        Private Client
                        <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    <Link
                        href="/contact"
                        className="relative group uppercase tracking-tight text-base font-semibold"
                    >
                        Contact
                        <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;