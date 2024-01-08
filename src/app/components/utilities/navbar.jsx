// "use client";
import { Button, Navbar } from "keep-react";
import { Heart, GithubLogo, ShoppingCart, User } from "phosphor-react";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { IoDocumentAttach } from "react-icons/io5";
import Image from 'next/image';

export const NavbarComponent = () => {
  return (
    <Navbar fluid={true} className="bg-transparent fixed top-0 left-0 right-0 z-50  backdrop-blur-lg">
      <Navbar.Container className="flex items-center justify-between pt-2">
        <Navbar.Container
          tag="ul"
          className="lg:flex hidden items-center justify-between gap-8 pl-20"
        >
          <Navbar.Link className="text-white opacity-45 hover:opacity-100" linkName="Home"/>
          <Navbar.Link className="text-white opacity-45 hover:opacity-100" linkName="Sobre mi"/>
          <Navbar.Link className="text-white opacity-45 hover:opacity-100" linkName="Experiencia"/>
          <Navbar.Link className="text-white opacity-45 hover:opacity-100" linkName="Proyectos"/>


        </Navbar.Container>
        

        <Navbar.Collapse collapseType="sidebar" className="bg-transparent text-white">
          <Navbar.Container tag="ul" className="flex flex-col gap-5">
          <Navbar.Link className="opacity-50 hover:opacity-100" linkName="Home"/>
          <Navbar.Link className="opacity-50 hover:opacity-100" linkName="Sobre mi"/>
          <Navbar.Link className="opacity-50 hover:opacity-100" linkName="Experiencia"/>
          <Navbar.Link className="opacity-50 hover:opacity-100" linkName="Proyectos"/>
          <Navbar.Container
            tag="ul"
            className="flex items-center justify-around pt-2"
          >
            <Navbar.Link className="opacity-50 hover:opacity-100" href="https://github.com/Abic26"
              icon={<FaGithub size={25} />}
              iconAnimation={false}
            />
            <Navbar.Link className="opacity-50 hover:opacity-100" href="Andres_Felipe_Lopez_S._FULLSTACK.pdf" download
              icon={<IoDocumentAttach  size={25} />}
              iconAnimation={false}
            />
            <Navbar.Link className="opacity-50 hover:opacity-100" href="https://wa.me/3186078770"
              icon={<FaWhatsapp  size={25} />}
              iconAnimation={false}
            />
          </Navbar.Container>
          </Navbar.Container>
        </Navbar.Collapse>

        <Navbar.Container className="flex items-center gap-3 pr-20">
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-5"
          >
            <Navbar.Link className="text-white hover:text-red-300 opacity-50 hover:opacity-100" href="https://github.com/Abic26"
              icon={<FaGithub  size={25}  />}
              iconAnimation={false}
            />
            <Navbar.Link className="text-white hover:text-red-300 opacity-50 hover:opacity-100" href="Andres_Felipe_Lopez_S._FULLSTACK.pdf" download
              icon={<IoDocumentAttach   size={25}  />}
              iconAnimation={false}
            />
            <Navbar.Link className="text-white hover:text-red-300 opacity-50 hover:opacity-100" href="https://wa.me/3186078770"
              icon={<FaWhatsapp  size={25}  />}
              iconAnimation={false}
            />
          </Navbar.Container>
          <Navbar.Toggle className="text-white opacity-100 hover:opacity-40" />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
}
