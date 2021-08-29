import React from 'react';

import { WithClass } from '../types';

interface FooterProps extends WithClass {}

const Footer: React.VFC<FooterProps> = ({ className }) => (
  <footer className={className}>
  </footer>
)

export default Footer