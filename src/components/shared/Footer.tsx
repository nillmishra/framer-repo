import {
  Sparkles,
  Mail,
  Phone,
  Youtube,
  Twitter,
  X,
  Instagram,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-white overflow-hidden max-w-6xl mx-auto ">
      {/* Subtle diagonal background texture */}
      <div className="absolute inset-0 b pointer-events-none" />

      <div className="relative container mx-auto px-6 lg:px-10 pt-20 pb-10">
        {/* TOP – Newsletter */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0b3d2e] leading-tight">
              Businesses Need Big Ideas.
              <br />
              Join Our Newletter.
            </h2>

            <div className="mt-6 flex max-w-md items-center gap-3">
              <input
                type="email"
                placeholder="name@email.com"
                className="flex-1 rounded-full border border-[#dfe7e3] px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-[#7CFF4E]"
              />
              <button className="rounded-full bg-[#7CFF4E] px-6 py-3 text-sm font-medium text-[#0b3d2e] hover:brightness-95 transition">
                Subscribe
              </button>
            </div>
          </div>

          {/* Logo */}
          <div className="flex justify-start lg:justify-end items-center gap-2">
            <Sparkles className="w-7 h-7 text-[#7CFF4E]" />
            <span className="text-2xl font-semibold text-[#1f1f1f]">
              Marqo
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="my-14 h-px bg-[#e7eeea]" />

        {/* MIDDLE GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Pages */}
          <div>
            <h4 className="text-sm font-semibold text-[#0b3d2e] mb-4">
              Pages
            </h4>
            <div className="grid grid-cols-2 gap-y-2 text-sm text-[#4b6f63]">
              {[
                'Home',
                'Case Studies',
                'Waitlist',
                'Blog',
                'Updates',
                'Contact',
                'Pricing',
              ].map((item) => (
                <a key={item} href="#" className="hover:text-[#0b3d2e]">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-[#0b3d2e] mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-[#4b6f63]">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                hello@marqo.com
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +33 1 73 83 66 71
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-sm font-semibold text-[#0b3d2e] mb-4">
              Location
            </h4>
            <p className="text-sm text-[#4b6f63]">
              334 avenue des Ternes
              <br />
              75003 Paris, France
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-[#e7eeea]" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[#7b8f86]">
          {/* Socials */}
          <div className="flex gap-3">
            {[Youtube, X, Instagram].map((Icon, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full bg-[#0b3d2e] text-white flex items-center justify-center"
              >
                <Icon className="w-4 h-4" />
              </div>
            ))}
          </div>

          {/* Legal */}
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#0b3d2e]">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#0b3d2e]">
              Terms & Conditions
            </a>
            <span>Made by Gabin B</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
