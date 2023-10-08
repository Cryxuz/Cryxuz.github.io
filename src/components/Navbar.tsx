const Navbar = () => {
  return (
    <div>
      <div className="w-screen h-[100px] bg-slate-500 opacity-50 fixed flex items-center justify-center lg:justify-start">
        <ul className="flex space-x-8 md:m-[2%] md:text-2xl">
          <li><a href="">Home</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;