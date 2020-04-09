import React from "react";
import Link from "next/link";

const Index = ({ name }) => {
  return (
    <div>
      <h1>Hello World {name}</h1>
      <div>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
      <div>
        <Link href="/signup">
          <a>Sign Up</a>
        </Link>
      </div>
      <div>
        <Link href="/signup">
          <a>Sign In</a>
        </Link>
      </div>
    </div>
  );
};

export default Index;
