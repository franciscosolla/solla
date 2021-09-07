import React from 'react';
import Link from 'next/link';

import pages from '../../constants/pages';

const Drawer: React.VFC = () => (
  <nav>
    {pages.map(name => 
      <Link href={`/portal/${name}`} key={`drawer-nav-item-${name}`} passHref>
        <button>
          {name}
        </button>
      </Link>
    )}
  </nav>
)

export default Drawer;