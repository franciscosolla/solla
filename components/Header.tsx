import React from 'react';
import Link from 'next/link';
import ClassNameProp from '../types/props/ClassNameProp';

const Header: React.VFC<ClassNameProp> = ({ className }) => (
  <header>
    <h1>
      Solla
    </h1>
    <div className="list">
      {['about', 'carreer', 'lifestyle', 'blog', 'projects'].map(name => 
        <Link href={`/${name}`} key={`header-list-item-${name}`} passHref>
          <button className="card">
            <h1>
              {name}
            </h1>
          </button>
        </Link>
      )}
    </div>
  </header>
)

export default Header