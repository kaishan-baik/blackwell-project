import Image from 'next/image';
import Timer from './Timer';
import Login from './Login';

export default function Navbar() {
  return (
    <nav
      className="w-full h-20  text-white flex items-center justify-between px-8 md:px-12 font-thin font-stretch-condensed pt-2"
      style={{ backgroundColor: '#112A4D' }}
    >
      <div className="flex items-center">
        {/* Logo */}
        <div className="mr-8">
          <Image
            src="/images/blackwell-logo.png"
            alt="Blackwell logo"
            width={100}
            height={60}
          />
        </div>
      </div>
      {/* Countdown Timer */}
      <Timer />
      {/* Register Now & Login*/}
      <Login />
    </nav>
  );
}
