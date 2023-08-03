import React from "react";
import CollapsibleView from "../collapsible-view";
const FrequentlyQuestion = ({ faqs = [] }) => {
  return (
    <div className="mt-5 p-3" style={{ background: "#1F9F0C0F" }}>
      <p className="text-center" style={{ fontSize: "20px" }}>
        Frequently Asked Questions
      </p>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        {faqs?.map((item, index) => (
          <CollapsibleView
            index={index}
            key={index}
            heading={item?.title}
            content={item?.description}
          />
        ))}
      </div>
    </div>
  );
};
export default FrequentlyQuestion;
