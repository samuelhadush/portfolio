import Image from 'next/image';
import logo from '../assets/dog.png';

function Header() {
  return (
    <div className="flex h-24 w-screen items-center justify-between bg-slate-900 px-12 text-white ">
      <div className="left flex-1">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Image src={logo} alt="my logo" height={60} width={60} />
          <a className="" href="https://twitter.com/hashtag/TigrayGenocide">
            #TigrayGenocide
          </a>
        </div>
        {/* <img src='/assets/dog.jpeg' height={60} width={60} /> */}
      </div>
      <nav className="flex flex-1 items-center justify-between">
        {/* menus */}
        <ul className="flex flex-row gap-4">
          <li>Home</li>
          <li>Skills</li>
          <li>Experience</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
        <div className="flex gap-4">
          <span>Theme</span>
          <div>Lang</div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
