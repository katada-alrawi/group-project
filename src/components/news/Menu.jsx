import React from 'react';

function Menu({ active, setActive, setPopularity }) {
  const links = [
    { id: 1, name: 'General', value: 'general' },
    { id: 2, name: 'Technology', value: 'technology' },
    { id: 3, name: 'Science', value: 'science' },
    { id: 4, name: 'Business', value: 'business' },
    { id: 5, name: 'Entertainment', value: 'entertainment' },
    { id: 6, name: 'Health', value: 'health' },
    { id: 7, name: 'Sports', value: 'sports' },
  ];

  function onClick(id, value) {
    setActive(id);
    setPopularity(value);
  }

  return (
    <nav className='menu'>
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={active === link.id ? 'active' : 'inactive'}
            onClick={() => onClick(link.id, link.value)}
          >
            {link.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
