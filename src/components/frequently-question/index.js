import React from "react";
import { laptop_home } from "../../assets/images";
import { fr_plus } from "../../assets/svgs";
import CollapsibleView from "../collapsible-view";
import { FAQS } from "../../constants";
const FrequentlyQuestion = ({}) => {
  return (
    <div className="mt-5 p-3" style={{ background: "#1F9F0C0F" }}>
      <p className="text-center" style={{ fontSize: "20px" }}>
        Frequently Asked Questions
      </p>
      <div class="accordion accordion-flush" id="accordionFlushExample">
        {FAQS?.map((item, index) => (
          <CollapsibleView
            index={index}
            key={index}
            heading={item?.question}
            content={item?.answer}
          />
        ))}
      </div>
    </div>
  );
};
export default FrequentlyQuestion;
