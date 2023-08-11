import React from "react";
import { Link } from "react-router-dom";

function TermsAndConditions() {
  return (
    <div className="container-fluid">
      <h1>Welcome to Tolo Cart E-ecommerce!</h1>
      <p>
        <strong>1. Acceptance of Terms:</strong> By accessing and using this
        website, you agree to comply with and be bound by these terms and
        conditions.
      </p>
      <p>
        <strong>2. Use of the Website:</strong> You may use this website for
        browsing and purchasing products. You must not use the website for any
        illegal or unauthorized purposes.
      </p>
      <p>
        <strong>3. Products and Orders:</strong> We strive to provide accurate
        product descriptions and pricing. Placing an order signifies your
        acceptance of the order's total price and the product's features.
      </p>
      <p>
        <strong>4. User Accounts:</strong> You can create an account for a
        personalized shopping experience. You're responsible for maintaining the
        confidentiality of your account information.
      </p>
      <p>
        <strong>5. Privacy:</strong> We respect your privacy. Our{" "}
        <Link to="/privacy-policy">Privacy Policy</Link> outlines how we
        collect, use, and protect your information.
      </p>
      <p>
        <strong>6. Intellectual Property:</strong> The content on this website
        is protected by intellectual property laws. You must not reproduce,
        distribute, or modify any content without our permission.
      </p>
      <p>
        <strong>7. Limitation of Liability:</strong> We're not liable for any
        damages resulting from your use of the website. Our liability is limited
        to the extent permitted by law.
      </p>
      <p>
        <strong>8. Governing Law:</strong> These terms are governed by the laws
        of [Your Jurisdiction]. Any disputes will be subject to the exclusive
        jurisdiction of the courts in [Your Jurisdiction].
      </p>
    </div>
  );
}

export default TermsAndConditions;
