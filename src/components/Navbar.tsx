import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-end gap-8 p-6 text-[#A480CF] font-semibold">
      <Link to="/about" className="hover:underline">About</Link>
      <Link to="/projects" className="hover:underline">Projects</Link>
      <Link to="/experience" className="hover:underline">Experience</Link>
      <Link to="/contact" className="hover:underline">Contact</Link>
    </nav>
  );
}
