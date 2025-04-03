// AuthProvider.jsx
"use client";

import { api } from '@/convex/_generated/api';
import { useUser } from '@stackframe/stack';
import { useMutation } from 'convex/react';
import React, { useEffect, useState } from 'react';
import { UserContext } from './_context/UserContext';

function AuthProvider({ children }) {
  const user = useUser();
  const createUser = useMutation(api.users.CreateUser);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (user) {
      createNewUser();
    }
  }, [user]);

  const createNewUser = async () => {
    try {
      const result = await createUser({
        name: user?.displayName || "Anonymous",
        email: user?.primaryEmail || "unknown@example.com",
      });
      console.log("User created:", result);
      setUserData(result);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}

export default AuthProvider;