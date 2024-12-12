import React from "react";
import { Button } from "../ui/button";

const Institution = () => {
  const contentData = [
    {
      heading: "For Professors & Educators",
      description:
        "Design personalized research journeys, assign relevant papers, and track student progress with AI-driven insights—helping your students master the latest in their field.",
      points: [
        {
          title: "Curate Personalized Learning Paths",
          content:
            "Use Cleverank’s AI to design tailored learning journeys for each student, aligning research papers with their academic background, career goals, and interests.",
        },
        {
          title: "Assign Research Papers and Assessments",
          content:
            "Easily assign research papers, quizzes, and assessments from Cleverank’s extensive global database, ensuring students engage with high-impact content relevant to their field.",
        },
        {
          title: "Track Progress and Provide Feedback",
          content:
            "Monitor student progress with real-time analytics, assess understanding through automated tests, and offer personalized feedback for continuous improvement.",
        },
        {
          title: "Enhance Career Opportunities",
          content:
            "Students build personalized portfolios showcasing their research, earning badges, karma points, and unlocking scholarships, PhD placements, and job opportunities.",
        },
      ],
    },
    {
      heading: "Enhance Institutional Reputation",
      description:
        "Partner with Cleverank to offer an AI-powered learning experience that attracts top talent and demonstrates your commitment to cutting-edge research and education.",
      points: [
        {
          title: "Foster Global Collaboration",
          content:
            "Connect your students with a worldwide network of researchers and professionals, enabling them to share ideas, collaborate, and contribute to global research initiatives.",
        },
        {
          title: "Accelerate Research Impact",
          content:
            "Empower your students and faculty to engage with high-impact research, fostering innovation and enhancing your institution's contribution to global academic and industry advancements.",
        },
        {
          title: "Data-Driven Insights",
          content:
            "Gain valuable insights into student performance and engagement through real-time analytics, helping to identify strengths, address challenges, and improve learning outcomes.",
        },
        {
          title: "Customized Faculty Tools",
          content:
            "Provide professors with intuitive tools to easily create assignments, track student progress, and give personalized feedback, all while maintaining alignment with academic goals and standards.",
        },
        {
          title: "Prepare Students for Future Careers",
          content:
            "Help students build a strong academic and professional portfolio with personalized research achievements, badges, and recognition that open doors to scholarships, internships, and career opportunities.",
        },
      ],
    },
  ];
  return (
    <div className="mx-48 mt-12">
      <p className="text-[#686868]">
        Cleverank is transforming how research is taught, learned, and applied.
        Our platform enables institutions to redefine their approach to
        education, helping students engage with cutting-edge research, build
        expertise, and unlock new career opportunities.
      </p>

      {contentData.map((section, index) => (
        <div className="mt-6" key={index}>
          <h1 className="text-2xl font-bold mb-4">{section.heading}</h1>
          <p>{section.description}</p>
          <ul style={{ listStyleType: "disc" }}>
            {section.points.map((point, idx) => (
              <li className="my-2" key={idx}>
                <strong>{point.title}</strong>
                <p className="text-[#686868]">{point.content}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="bg-gray-100 px-4 py-6 rounded-lg mt-8">
        <h1 className="text-2xl font-bold mb-4">
          Empower the Next Generation of Researchers
        </h1>
        <p className="text-[#686868]">
          Cleverank is the platform that empowers institutions, professors, and
          students to take their research and learning to the next level.
          Whether you're looking to enhance the learning experience or provide
          new opportunities for your students, Cleverank offers the tools and
          support to help your institution thrive.
        </p>
        <div className="flex gap-2 mt-4">
          <Button>Request a Demo</Button>
          <Button>Register</Button>
        </div>
      </div>
    </div>
  );
};

export default Institution;
