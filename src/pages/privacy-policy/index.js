import React from "react";
import { Link } from "react-router-dom";

function PrivacyPolicy() {
  return (
    <div className="container-fluid">
      <h1>Privacy Policy</h1>
      <p>
        <strong>1. Information We Collect:</strong> We collect personal and
        non-personal information when you interact with our website. This
        includes your name, email, shipping address, and browsing data.
      </p>
      <p>
        <strong>2. How We Use Your Information:</strong> We use your information
        to process orders, improve our services, and communicate with you about
        promotions and updates.
      </p>
      <p>
        <strong>3. Data Security:</strong> We implement security measures to
        protect your data from unauthorized access and use.
      </p>
      <p>
        <strong>4. Cookies:</strong> We use cookies to enhance your browsing
        experience. You can adjust your browser settings to control cookie
        usage.
      </p>
      <p>
        <strong>5. Third-Party Services:</strong> We may use third-party
        services to process payments and analyze website performance. These
        services have their own privacy policies.
      </p>
      <p>
        <strong>6. Your Choices:</strong> You can update your account
        information and communication preferences. You can also request access
        or deletion of your data.
      </p>
      <p>
        <strong>7. Updates to the Privacy Policy:</strong> We may update this
        policy to reflect changes in our practices. We'll notify you of any
        significant updates.
      </p>
      <p>
        <strong>8. Contact Us:</strong> If you have questions about your privacy
        or this policy, please <Link to="/about">contact us</Link> through the
        provided channels.
      </p>
    </div>
  );
}

export default PrivacyPolicy;
