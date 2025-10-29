import React from "react";
import { Avatar as MUIAvatar, AvatarGroup } from "@mui/material";

function Avatar({ src, alt, className, children, ...props }) {
  return (
    <MUIAvatar
      src={src}
      alt={alt}
      className={className}
      {...props}
    >
      {children}
    </MUIAvatar>
  );
}

// Avatar Image (if you want to force an image fallback)
function AvatarImage({ src, alt, className, ...props }) {
  return <MUIAvatar src={src} alt={alt} className={className} {...props} />;
}

function AvatarFallback({ children, className, ...props }) {
  return (
    <MUIAvatar className={className} {...props}>
      {children}
    </MUIAvatar>
  );
}

// Example usage
export default function ExampleAvatars() {
  return (
    <div className="flex gap-4">
      {/* Image Avatar */}
      <AvatarImage src="https://i.pravatar.cc/150?img=3" alt="User" />

      {/* Fallback Avatar */}
      <AvatarFallback>AB</AvatarFallback>

      {/* Regular Avatar (auto fallback) */}
      <Avatar src="https://i.pravatar.cc/150?img=99">CD</Avatar>
    </div>
  );
}

export { Avatar, AvatarImage, AvatarFallback };
