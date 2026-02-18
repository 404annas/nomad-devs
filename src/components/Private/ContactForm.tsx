const ContactForm = () => {
  return (
    <section className="bg-[#f2f1ee] py-20 px-10 lg:px-32 min-h-screen flex flex-col justify-center font-serif">
      
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-[32px] md:text-[50px] text-[#1a1a1a] mb-4 leading-tight">
          Start your journey with Nomad
        </h2>
        <p className="text-[12px] md:text-[13px] text-gray-800 leading-[1.8] max-w-sm mx-auto">
          Please fill out the short contact form below<br />
          or contact the team directly and we will<br />
          be in touch.
        </p>
      </div>

      {/* Form Section */}
      <form className="max-w-4xl mx-auto w-full">
        
      
        <div className="flex flex-wrap items-end gap-x-12 gap-y-6 mb-8">
          
          <div className="border-b border-black w-full md:w-[200px]">
            <label className="block text-[8px] font-bold uppercase tracking-[0.2em] mb-0.5 leading-none">FIRST NAME(REQUIRED) *</label>
            <input type="text" className="w-full bg-transparent outline-none text-xs leading-none py-0" required />
          </div>

          <div className="border-b border-black w-full md:w-[200px]">
            <label className="block text-[8px] font-bold uppercase tracking-[0.2em] mb-0.5 leading-none">LAST NAME(REQUIRED) *</label>
            <input type="text" className="w-full bg-transparent outline-none text-xs leading-none py-0" required />
          </div>

          <div className="flex-1 min-w-[200px]">
            <label className="block text-[8px] font-bold uppercase tracking-[0.2em] mb-0.5 leading-none">PROJECT DESCRIPTION *</label>
            <input type="text" className="w-full bg-transparent outline-none text-xs leading-none py-0" required />
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
          
          <div className="space-y-6">
            <div className="border-b border-black">
              <label className="block text-[8px] font-bold uppercase tracking-[0.2em] mb-0.5 leading-none">EMAIL *</label>
              <input type="email" className="w-full bg-transparent outline-none text-xs py-0 leading-none" required />
            </div>
            <div className="border-b border-black">
              <label className="block text-[8px] font-bold uppercase tracking-[0.2em] mb-0.5 leading-none">PHONE *</label>
              <input type="tel" className="w-full bg-transparent outline-none text-xs py-0 leading-none" required />
            </div>
            <div className="border-b border-black">
              <label className="block text-[8px] font-bold uppercase tracking-[0.2em] mb-0.5 leading-none">LOCATION</label>
              <input type="text" className="w-full bg-transparent outline-none text-xs py-0 leading-none" />
            </div>
          </div>

          <div className="space-y-6">
            
            <div className="h-[28px] border-b border-black hidden md:block"></div> 
            
            <div className="relative border-b border-black">
              <label className="block text-[8px] font-bold uppercase tracking-[0.2em] mb-0.5 leading-none">SELECT A SERVICE (REQUIRED)</label>
              <select className="w-full bg-transparent outline-none appearance-none text-xs py-0 leading-none cursor-pointer" required defaultValue="">
                <option value="" disabled></option>
                <option>NEW BUILD</option>
                <option>HOUSE RENOVATION</option>
                <option>APPARTMANT RENOVATION</option>
                <option>INTERIOR DESIGN</option>
              </select>
              <span className="absolute right-0 bottom-0 text-[10px] pointer-events-none">∨</span>
            </div>

            <div className="relative border-b border-black">
              <label className="block text-[8px] font-bold uppercase tracking-[0.2em] mb-0.5 leading-none">BUDGET ESTIMATE(REQUIRED)</label>
              <select className="w-full bg-transparent outline-none appearance-none text-xs py-0 leading-none cursor-pointer" required defaultValue="">
                <option value="" disabled></option>
                <option>75000000</option>
                <option>200000</option>
                <option>50000000</option>
                <option>60000000</option>
              </select>
              <span className="absolute right-0 bottom-0 text-[10px] pointer-events-none">∨</span>
            </div>
          </div>
        </div>

        {/* SUBMIT Button */}
        <div className="mt-12 text-left">
          <button type="submit" className="text-[9px] font-bold uppercase tracking-[0.2em] border-b border-black pb-0 leading-none hover:opacity-50 transition-all">
            SUBMIT
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
