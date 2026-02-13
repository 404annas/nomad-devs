import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="absolute top-0 left-0 w-full z-50 px-6 md:px-12 py-8 text-white">
            <div className="grid grid-cols-3 items-start">

                {/* Left Links */}
                <div className="flex gap-40 items-center pt-8 justify-end">
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
                <div className="flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl md:text-5xl tracking-wide leading-none">
                        NOMAD
                    </h1>
                    <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] mt-1 opacity-90">
                        Developments
                    </span>
                </div>

                {/* Right Links */}
                <div className="flex gap-40 items-center pt-8 justify-start">
                    <Link
                        href="/about"
                        className="relative group uppercase tracking-tight text-base font-semibold"
                    >
                        Private Client
                        <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    <Link
                        href="/projects"
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