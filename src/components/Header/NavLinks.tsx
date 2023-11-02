function NavLinks() {
  return (
      <nav>
          <ul className="flex justify-between items-center">
              <li className="px-4 text-lg"><a href="#description" className="hover-underline-animation">Projets</a></li>
              <li className="px-4 text-lg"><a href="#projects" className="hover-underline-animation">Clients</a></li>
              <li className="px-4 text-lg"><a href="#projects" className="hover-underline-animation">Profil</a></li>
              <li className="px-4 text-lg"><a href="#projects" className="hover-underline-animation">Contact</a></li>
          </ul>
      </nav>
  );
}

export default NavLinks;
