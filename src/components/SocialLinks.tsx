import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const links = [
  {
    href: "https://www.linkedin.com/in/han-thai-49777b215/",
    icon: <FaLinkedin />,
    label: "LinkedIn",
  },
  {
    href: "#",
    icon: <FaTwitter />,
    label: "Twitter",
  },
  {
    href: "https://github.com/hgt1811",
    icon: <FaGithub />,
    label: "GitHub",
  },
  {
    href: "#",
    icon: <FaInstagram />,
    label: "Instagram",
  },
];

export default function SocialLinksGroup() {
  return (
    <>
      {/* Desktop: Fixed vertical left-side */}
      <div className="hidden md:flex flex-col gap-4 fixed top-1/2 left-4 transform -translate-y-1/2 z-50">
        {links.map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="flex items-center justify-center w-10 h-10 rounded-md 
                       bg-[#D4C7F2] text-[#F7F7F7] 
                       hover:bg-gradient-to-r from-[#E9A7B1] to-[#B3A1E6] 
                       transition-colors"
          >
            {icon}
          </a>
        ))}
      </div>

      {/* Mobile: Horizontal bottom in-flow */}
      <div className="md:hidden w-full flex justify-center gap-4 mt-16">
        {links.map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="flex items-center justify-center w-10 h-10 rounded-md 
                       bg-[#D4C7F2] text-[#F7F7F7] 
                       hover:bg-gradient-to-r from-[#E9A7B1] to-[#B3A1E6] 
                       transition-colors"
          >
            {icon}
          </a>
        ))}
      </div>
    </>
  );
}
