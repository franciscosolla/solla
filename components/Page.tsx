import React from 'react';

import { WithClass } from '../types';

interface PageProps extends WithClass {}

const Page: React.FC<PageProps> = ({ children,  className }) => (
  <div className={className}>
    {children}
  </div>
)

export default Page