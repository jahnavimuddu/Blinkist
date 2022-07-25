import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const Name=user.name
  console.log(Name)

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        
        
        <p>{user.email}</p>
      </div>
    )
  );
};

