import React, { useState } from "react";
import "./style.css";

const CollapsibleView = ({
  index = 0,
  heading = "Frequently Asked Questions",
  content = "here is content",
}) => {
  // useState to manage the collapse state
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading${index}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#flush-collapseOne${index}`}
          aria-expanded="false"
          aria-controls={`flush-collapseOne${index}`}
        >
          {heading}
        </button>
      </h2>
      <div
        id={`flush-collapseOne${index}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading${index}`}
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body">{content}</div>
      </div>
    </div>
    // <div className="accordion-item">
    //   <h2 className="accordion-header" id={`heading${index}`}>
    //     <button
    //       className="accordion-button d-flex flex-row align-items-center justify-content-between border-bottom"
    //       type="button"
    //       onClick={() => setIsCollapsed(!isCollapsed)} // Toggle the collapse state on button click
    //       aria-expanded={!isCollapsed} // Set the aria-expanded attribute based on the collapse state
    //       aria-controls={`collapse${index}`}
    //     >
    //       {/* <span class="accordion-icon">+</span> Accordion Item #1 */}
    //       <p className="">{heading}</p>
    //     </button>
    //   </h2>
    //   <div
    //     id={`collapse${index}`}
    //     className={
    //       isCollapsed
    //         ? "accordion-collapse collapse"
    //         : "accordion-collapse collapse show"
    //     } // Use ternary operator to conditionally set the class
    //     aria-labelledby={`heading${index}`}
    //     data-bs-parent="#accordionExp"
    //   >
    //     <div className="accordion-body">{content}</div>
    //   </div>
    // </div>
  );
};

export default CollapsibleView;
