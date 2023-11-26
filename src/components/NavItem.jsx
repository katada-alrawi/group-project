const NavItem = ({ label, subItems }) => {
    return (
      <div className='relative text-white cursor-pointer hover:underline'>
        {label}
        {subItems && subItems.length > 0 && (
          <div className='absolute top-full left-0 mt-2 bg-white text-black rounded-md p-2 space-y-2'>
            {subItems.map((subItem, index) => (
              <div key={index}>{subItem}</div>
            ))}
          </div>
        )}
      </div>
    );
  }
  
  export default Navbar;