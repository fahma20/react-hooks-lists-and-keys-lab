import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {[
        { id: 1, href: '#home', text: 'home' },
        { id: 2, href: '#about', text: 'about' },
        { id: 3, href: '#projects', text: 'projects' },
      ].map(link => (
        <a key={link.id} href={link.href}>
          {link.text}
        </a>
      ))}
    </nav>
  );
};

export default NavBar;
