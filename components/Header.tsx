import React from 'react';

import { WithClass } from '../types';

interface HeaderProps extends WithClass {}

const Header: React.VFC<HeaderProps> = ({ className }) => (
  <header className={className}>
  </header>
)

export default Header