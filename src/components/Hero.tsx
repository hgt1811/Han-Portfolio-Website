import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-4 py-16 bg-background min-h-screen">
      {/* Floating pastel shapes */}
      <div className="absolute top-10 left-10 w-10 h-10 bg-accent opacity-30 rounded-lg rotate-12"></div>
      <div className="absolute bottom-20 right-20 w-12 h-12 bg-gradient-to-br from-gradientStart to-gradientEnd opacity-30 rounded-full"></div>

      {/* Profile Image */}
      <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-softWhite">
        <img
          src="/assets/profile.jpg"
          alt="Han's profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Intro Text */}
      <p className="text-muted text-lg mb-1">My name is</p>
      <h1 className="text-6xl font-bold text-primary mb-4">Han</h1>
      <p className="text-rose text-2xl mb-4">I build things for the web.</p>
      <p className="max-w-lg text-muted text-center text-lg">
        I’m a <span className="font-semibold text-primary">Software Engineer</span> specializing in building exceptional websites.
      </p>

      {/* Hire Me Button */}
      <button
        className="mt-8 px-8 py-3 bg-gradient-to-r from-gradientStart to-gradientEnd text-softWhite rounded-full shadow hover:scale-105 transition-transform"
        aria-label="Hire me"
      >
        Hire Me
      </button>

      {/* Social Links */}
      <div className="flex flex-col gap-4 mt-10">
        <a
          href="#"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-lilac text-softWhite hover:bg-gradient-to-r from-gradientStart to-gradientEnd transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="#"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-lilac text-softWhite hover:bg-gradient-to-r from-gradientStart to-gradientEnd transition-colors"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
        <a
          href="#"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-lilac text-softWhite hover:bg-gradient-to-r from-gradientStart to-gradientEnd transition-colors"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
}
