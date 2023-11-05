
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  return (
    <div>
      <div className="h-[100px] bg-transparent flex items-center justify-center ">
        <ul className="flex space-x-20 md:m-[2%] md:text-2xl ">
          <button>
            <ScrollLink
              activeClass="active"
              to="about"
              
              smooth={true}
              offset={-70}
              duration={2000}
            >
              About
            </ScrollLink>
          </button>
          <button>
            <ScrollLink
              activeClass="active"
              to="projects"
              
              smooth={true}
              offset={-70}
              duration={2000}
            >
              Projects
            </ScrollLink>
          </button>
          <button>
            <ScrollLink
              activeClass="active"
              to="contact"
             
              smooth={true}
              offset={-70}
              duration={2000}
            >
              Contact
            </ScrollLink>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;