import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";

const Header = () => {
  const [session, loading] = useSession();
  return (
    <nav className="nav-bar">
      <h3>
        Hi,{" "}
        {session &&
          session.user.name[0].toUpperCase() + session.user.name.slice(1)}
        !
      </h3>
      <ul>
        <li>
          <Link href="/">Recipes</Link>
        </li>
        <li>
          <Link href="/recipes/newrecipe">New recipe</Link>
        </li>
      </ul>
      {session && <button onClick={() => signOut()}>Sign out</button>}
      {!session && <button onClick={() => signIn()}>Sign in</button>}
    </nav>
  );
};

export default Header;
