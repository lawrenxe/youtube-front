import React from "react";

interface BProps {
  text: string;
  link: string;
}

function Button({ text, link }: BProps) {
  return (
    <a
      className="hover:shadow-solidShadowButton w-30 border-2 border-black px-2 py-1 text-black hover:text-black"
      href={link}
    >
      {text}
    </a>
  );
}

export default Button;
