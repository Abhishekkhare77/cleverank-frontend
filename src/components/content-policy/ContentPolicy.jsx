import Link from "next/link";
import React from "react";

const ContentPolicy = () => {
  return (
    <div className="mx-48 mt-12">
      <div className="text-4xl font-bold text-center mb-10  ">
        Content Policy
      </div>
      <div>
        <p className="text-[#686868]">
          At Cleverank, we are committed to providing a platform that empowers
          learners, educators, and researchers with access to the latest global
          research while respecting intellectual property rights. We make every
          effort to ensure compliance with copyright laws and prioritize the use
          of materials that are legally available for sharing, distribution, and
          modification. However, as a startup with limited resources, our
          ability to monitor and enforce copyright policies is dependent on the
          tools and systems available to us. We are continuously working to
          improve and develop more advanced systems to support this effort.
        </p>
      </div>
      <div className="mt-6">
        <h1 className=" text-2xl  font-semibold  mb-4">1. Content Sourcing</h1>
        <p className="text-[#686868]">
          Cleverank primarily uploads and shares content that falls within the
          following categories:
        </p>
        <ul
          style={{ listStyleType: "disc", color: "black" }}
          className="ml-14 mt-4 text-[#686868]"
        >
          <li className="mt-2">
            <strong className="text-black">
              {" "}
              Creative Commons (CC) Licensed Content:{" "}
            </strong>{" "}
            <span className="text-[#686868]">
              We prioritize sourcing research papers, journals, and articles
              that are freely available under Creative Commons licenses. These
              licenses allow for legal distribution, modification, and sharing,
              with certain conditions specified by the original author or
              publisher.
            </span>
          </li>
          <li className="mt-2">
            <strong className="text-black"> Public Domain Content: </strong>
            <span className="text-[#686868]">
              In addition to Creative Commons, we also make available content
              that is in the public domain and free for use without any
              copyright restrictions.
            </span>
          </li>
        </ul>
        <p className="text-[#686868] mt-2">
          We understand the importance of respecting intellectual property
          rights, and while we make every effort to avoid violating copyright
          laws, our ability to screen every piece of content is limited due to
          our size and resources. We plan to implement more robust systems and
          tools to better address these concerns over time.
        </p>
      </div>
      <div className="mt-6">
        <h1 className=" text-2xl  font-semibold  mb-4">
          2. Reporting Copyright Infringement
        </h1>
        <p className="text-[#686868]">
          If you believe that copyrighted material has been inadvertently
          uploaded to our platform, we kindly request that you notify us
          immediately. To facilitate the removal process, please send an email
          to{" "}
          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&to=support@cleverank.org"
            className="text-blue-700 mr-1"
            target="_blank"
          >
            support@cleverank.org
          </Link>
          with the following information:
        </p>
        <ul
          style={{ listStyleType: "disc", color: "black" }}
          className="ml-14 mt-4 "
        >
          <li className="mt-2">Title of the Research Paper or Content</li>
          <li className="mt-2">Author(s) Name</li>
          <li className="mt-2">Link to the Content (if available)</li>
          <li className="mt-2">Reason for the Removal Request</li>
        </ul>
        <p className="text-[#686868] mt-4">
          Once we receive your request, our team will promptly review it and
          take the necessary action, which may include removing or replacing the
          material in question.
        </p>
      </div>
      <div className="mt-6">
        <h1 className=" text-2xl  font-semibold  mb-4">
          3. Personal Libraries
        </h1>
        <p className="text-[#686868]">
          Cleverank allows students, faculty members, and researchers to build
          their own personal libraries by curating research papers, articles,
          and other resources. These personal libraries are private and managed
          by the individual user. Cleverank does not have any control or
          oversight over the content added to personal libraries by users, and
          therefore, we are not liable for any potential copyright infringement
          associated with these private collections.
        </p>
        <p className="text-[#686868]">
          It is the responsibility of each user to ensure that the materials
          they add to their personal libraries are in compliance with copyright
          laws. Cleverank cannot be held accountable for content that is
          uploaded or shared by users in their personal libraries, as we do not
          own, host, or control these materials.
        </p>
      </div>

      <div className="mt-6">
        <h1 className=" text-2xl  font-semibold  mb-4">4. Usage of Content</h1>
        <p className="text-[#686868]">
          Users of Cleverank are allowed to access, read, and share research
          materials for personal and educational purposes, provided they comply
          with the licensing terms set by the content’s authors or publishers.
          It is strictly prohibited to:
        </p>
        <p className="mt-4">Types of Cookies We Use:</p>
        <ul
          style={{ listStyleType: "disc", color: "black" }}
          className="ml-14 mt-4 text-[#686868]"
        >
          <li className="mt-2">
            <span className="text-[#686868]">
              Reproduce, distribute, or sell any copyrighted content from
              Cleverank without proper authorization.
            </span>
          </li>
          <li className="mt-2">
            <span className="text-[#686868]">
              Use Cleverank&apos;s platform to host or share content that
              violates copyright laws.
            </span>
          </li>
          <li className="mt-2">
            <span className="text-[#686868]">
              Download content from Cleverank for redistribution or commercial
              use unless the content is explicitly licensed for such purposes.
            </span>
          </li>
        </ul>
      </div>

      <div className="mt-6">
        <h1 className=" text-2xl  font-semibold  mb-4">
          5. Copyright Disclaimer
        </h1>

        <p className="text-[#686868]">
          Cleverank is committed to complying with applicable copyright laws and
          will take reasonable steps to ensure that all materials shared on our
          platform are legally available. However, due to the nature of the
          platform and the volume of content uploaded, we cannot guarantee that
          every research paper or article is free from copyright restrictions.
          We encourage users to be mindful of copyright laws and to contact us
          immediately if they encounter any content that may violate these laws.
        </p>
      </div>
      <div className="mt-6">
        <h1 className=" text-2xl  font-semibold  mb-4">
          6. Ongoing Improvements
        </h1>
        <p className="text-[#686868]">
          As a growing startup, we recognize the importance of building robust
          systems to better manage copyright compliance and enhance the user
          experience. We are continuously working on improving our
          platform&apos;s ability to monitor and manage content, and we plan to
          implement more advanced features in the future to ensure that
          copyright violations are minimized.
        </p>
      </div>

      <div className="mt-6">
        <h1 className=" text-2xl  font-semibold  mb-4">7. Legal Disclaimer</h1>
        <p className="text-[#686868]">
          This copyright policy is intended to ensure that all users of the
          Cleverank platform understand their rights and responsibilities in
          relation to the content available on the platform. By using Cleverank,
          users agree to comply with all applicable copyright laws and policies.
          Cleverank reserves the right to update or modify this policy as
          necessary and will provide users with notice of any significant
          changes.
        </p>
        <p className="text-[#686868] mt-2">
          If you have any questions or concerns regarding our copyright policy,
          please don’t hesitate to contact us at{" "}
          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&to=support@cleverank.org"
            className="text-blue-700 mr-1"
            target="_blank"
          >
            support@cleverank.org
          </Link>
          . We are committed to maintaining a platform that respects
          intellectual property and encourages responsible use of research
          content.
        </p>
      </div>
    </div>
  );
};

export default ContentPolicy;
