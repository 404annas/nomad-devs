import React from "react";
import { Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#e9e7e3] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-4 gap-10 text-sm">

          {/* Logo */}
          <div>
            <div className="text-3xl font-light tracking-widest">N</div>
          </div>

          {/* Links */}
          <div className="space-y-2 uppercase tracking-wider">
            <p className="cursor-pointer">Home</p>
            <p className="cursor-pointer">Projects</p>
            <p className="cursor-pointer">About</p>
          </div>

          {/* Links 2 */}
          <div className="space-y-2 uppercase tracking-wider">
            <p className="cursor-pointer">Private Clients</p>
            <p className="cursor-pointer">Contact</p>
            <p className="cursor-pointer">Privacy Policy</p>
          </div>

          {/* Contact */}
          <div className="space-y-3 text-xs tracking-wider">
            <p>T: 020 3488 7202</p>
            <p>E: INFO@NOMADDEVELOPMENTS.COM</p>
            <p>
              126 NEW KING'S ROAD <br />
              LONDON, SW6 4LZ
            </p>

            {/* Social */}
            <div className="flex gap-4 pt-2">
              <Instagram size={18} />
              <Youtube size={18} />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 text-xs flex flex-col md:flex-row justify-between gap-4">
          <p>Cookie Preferences</p>

          <p className="uppercase">
            ©2025 Nomad Property Limited <br />
            All Rights Reserved <br />
            Website by Desk.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
