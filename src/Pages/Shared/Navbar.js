import {
  Button,
  IconButton,
  MobileNav,
  Navbar,
  Typography
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
 

export default function Example() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col text-blue-gray-800 gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" className="p-1 font-normal">
         <Link to="/">HOME</Link>
      </Typography>
      
       
      <Typography as="li"   className="p-1 font-normal">
        <a href="Services" className="flex items-center">
          EXPLORE
        </a>
      </Typography>
      <Typography as="li"   className="p-1 font-normal">
        <a href="About" className="flex items-center">
          ABOUT
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="sticky top-0 rounded-none max-w-full ">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          className="mr-4 cursor-pointer py-1.5 font-normal "
        >
          <span>Material Tailwind</span>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
       <Link to="/Login">
         
       <Button
            variant="gradient"
            size="xl"
            className="hidden lg:inline-block"
          >
            LOGIN
      
          
          </Button>
       </Link>
     
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <Button variant="gradient" size="sm" className="mb-2">
          <a href="Login">
            <span>Login</span>
          </a>
        </Button>
      </MobileNav>
    </Navbar>
  );
}
