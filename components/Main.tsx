import React from 'react';

import { WithClass } from '../types';

interface MainProps extends WithClass {}

const Main: React.FC<MainProps> = ({ children,  className }) => (
  <main className={className}>
    {children}
  </main>
)

export default Main