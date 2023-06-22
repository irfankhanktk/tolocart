import React from "react";
export const PrimaryButton = ({
  title = "Read more",
  style,
  onClick,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      class="btn mb-2"
      style={{ background: "#FF5A00", color: "#fff", ...style }}
      {...props}
    >
      {title}
    </button>
  );
};
