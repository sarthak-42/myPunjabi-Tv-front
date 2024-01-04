import React from "react";
// import termsOne from "../../assets/images/refund/why360-patten.png";
const TermsPage = () => {
  return (
    <section className="py-5 position-relative bglight privacy-section">
      <div className="circle-right circle-left d-none d-lg-block"></div>
      {/* <img src={termsOne} className="absimggCL" width="50" /> */}
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h3 className="mt-0">Terms and Conditions</h3>

            <p className="mb-1">
              last updated:{" "}
              <span className="bluClr" style={{ color: "#337ab7" }}>
                November 2023
              </span>
            </p>
            <p>
              Before you begin your journey with our cloud services, it is
              essential to understand the terms and conditions that govern our
              relationship. This overview provides a brief summary of the key
              points of our terms and conditions.
            </p>
            <ul className="list-style">
              <h4>Acceptance of Terms:</h4>
              <li>
                Before proceeding, carefully read and agree to comply with our
                Terms and Conditions when accessing or using My-Punjabi Tv
                Services.
              </li>
              <h4>Service Description:</h4>
              <li>
               My-Punjabi Tv provides a range of cloud-based services, including cloud
                storage, computing resources, and applications. Our services are
                designed to enhance your digital experience and streamline your
                operations.
              </li>
              <h4>User Responsibilities:</h4>
              <li>
                Users are responsible for maintaining the confidentiality of
                their account credentials and ensuring that their use ofMy-Punjabi Tv
                Cloud complies with applicable laws and regulations. Any
                unauthorized use is strictly prohibited.
              </li>
              <h4>Data Security and Privacy:</h4>
              <li>
                We prioritize the security and privacy of your information.
                My-Punjabi Tv takes industry-standard measures to protect your
                information. However, users should be aware of their
                responsibilities regarding data security and privacy.
              </li>
              <h4>Payments and Billing:</h4>
              <li>
                If you subscribe to Premium Services, you agree to timely pay
                the specified fees. My-Punjabi Tv reserves the right to modify
                prices and payment terms by giving notice to Users.
              </li>
              <h4>Termination of Services:</h4>
              <li>
                My-Punjabi Tv reserves the right to suspend or terminate services
                to users who violate our terms and conditions. Subject to
                applicable cancellation policies, Users may terminate their
                Accounts at any time.
              </li>
              <h4>Intellectual Property:</h4>
              <li>
                All content and materials provided by My-Punjabi Tv are protected
                by intellectual property laws. Users are granted a limited,
                non-exclusive license to use the Services for their intended
                purpose.
              </li>
              <h4>Changes in Terms:</h4>
              <li>
                My-Punjabi Tv may update these Terms and Conditions from time to
                time. Users will be notified of any material changes, and
                continued use of the Services implies acceptance of the revised
                Terms.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsPage;

