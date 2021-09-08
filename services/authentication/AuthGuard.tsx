import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import useUser from './useUser';

export interface AuthGuardProps {
  reroute?: string;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children, reroute }) => {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user === null && reroute) {
      router.replace(reroute)
    }
  }, [reroute, router, user]);

  if (!user) {
    return null;
  }

  return (
    <>
      {children}
    </>
  );
};

export default AuthGuard;