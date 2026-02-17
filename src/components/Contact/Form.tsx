import React from 'react';

const Form = () => {
  return (
    <div className="bg-[#f2f1ee] min-h-screen flex items-center justify-center p-8 md:p-20 font-sans">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        
        {/* Left Column: Contact Info */}
        <div className="flex flex-col justify-start space-y-8 text-[#1a1a1a]">
          <p className="text-lg md:text-xl leading-relaxed max-w-md">
            Please fill out the short contact form below or contact the team directly and we will be in touch.
          </p>
          
          <div className="space-y-6 text-[15px] tracking-wide">
            <div>
              <p>Tel: +44 (0) 20 3488 7202</p>
              <p>
                Email: <a href="mailto:info@nomaddevelopments.com" className="underline underline-offset-4 decoration-1">info@nomaddevelopments.com</a>
              </p>
            </div>

            <div>
              <p className="font-medium">Office address:</p>
              <p>126 New Kings Road</p>
              <p>London</p>
              <p>SW6 4LZ</p>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <form className="space-y-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-[10px] uppercase tracking-[0.2em] mb-1">First Name(Required) *</label>
              <input type="text" className="bg-transparent border-b border-black/30 py-2 focus:outline-none focus:border-black transition-colors" />
            </div>
            <div className="flex flex-col">
              <label className="text-[10px] uppercase tracking-[0.2em] mb-1">Last Name(Required) *</label>
              <input type="text" className="bg-transparent border-b border-black/30 py-2 focus:outline-none focus:border-black transition-colors" />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-[10px] uppercase tracking-[0.2em] mb-1">Email *</label>
            <input type="email" className="bg-transparent border-b border-black/30 py-2 focus:outline-none focus:border-black transition-colors" />
          </div>

          <div className="flex flex-col">
            <label className="text-[10px] uppercase tracking-[0.2em] mb-1">Phone *</label>
            <input type="tel" className="bg-transparent border-b border-black/30 py-2 focus:outline-none focus:border-black transition-colors" />
          </div>

          <div className="flex flex-col">
            <label className="text-[10px] uppercase tracking-[0.2em] mb-1">Enquiry *</label>
            <textarea rows={1} className="bg-transparent border-b border-black/30 py-2 focus:outline-none focus:border-black transition-colors resize-none" />
          </div>

          <div className="flex flex-col relative">
            <select className="bg-transparent border-b border-black/30 py-4 appearance-none text-[12px] uppercase tracking-[0.15em] focus:outline-none focus:border-black cursor-pointer">
              <option>Select an Option</option>
              <option>General Inquiry</option>
              <option>Investment</option>
              <option>Project Management</option>
            </select>
            <div className="absolute right-0 bottom-5 pointer-events-none">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L6 6L11 1" stroke="black" strokeWidth="1"/>
              </svg>
            </div>
          </div>

          <button type="submit" className="text-[12px] uppercase tracking-[0.3em] font-semibold border-b-2 border-black pb-1 hover:opacity-60 transition-opacity w-fit pt-4">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;