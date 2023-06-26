import React from "react";
export const PrimaryButton = ({
  title = "Read more",
  style,
  onClick,
  ...props
}) => {
<<<<<<< HEAD
    return (
        <button onClick={onClick} type="button" class="btn mb-2 read-more-btn" style={{ background: '#FF5A00', color: '#fff', fontSize:'20px', fontFamily:'Gilroy', fontWeight:'600', lineHeight:'29px',  ...style }} {...props}>
            {title}
        </button>
    );
};
=======
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
>>>>>>> c15e5d434456c91b326dff159b2dba86d9bd5e76
