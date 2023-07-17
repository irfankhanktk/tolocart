import React, { useState } from "react";
import "./style.css";

const CollapsibleView = ({
  index = 0,
  heading = "Frequently Asked Questions",
  content = "here is content",
}) => {
  return (
    <div class="accordion-item">
      <h2 class="accordion-header" id={`heading${index}`}>
        <button
          className="accordion-button d-flex flex-row align-items-center justify-content-between border-bottom"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${index}`}
          aria-expanded="true"
          aria-controls={`collapse${index}`}
        >
          {/* <span class="accordion-icon">+</span> Accordion Item #1 */}
          <p className="">{heading}</p>
        </button>
      </h2>
      <div
        id={`collapse${index}`}
        class="accordion-collapse collapse show"
        aria-labelledby={`heading${index}`}
        data-bs-parent="#accordionExp"
      >
        <div class="accordion-body">{content}</div>
      </div>
    </div>
  );
};

export default CollapsibleView;
