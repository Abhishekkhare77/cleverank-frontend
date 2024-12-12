import React from "react";

const ResearchDiscovery = () => {
  const sections = [
    {
      title: "Access Roadblocks",
      items: [
        {
          heading: "Limited Access",
          description:
            "According to a 2021 study by Science Advances, over 50% of academic journals are behind paywalls, with average subscription costs for universities exceeding $100,000 per year (Source: Science Advances). This means that researchers and students in lower-resourced institutions and developing countries are often locked out of vital research.",
        },
        {
          heading: "Geographic and Institutional Gaps",
          description:
            "The United Nations Educational, Scientific and Cultural Organization (UNESCO) reports that access to quality education and research is still vastly unequal globally, with low-income countries facing systemic challenges in accessing the latest academic resources (Source: UNESCO).",
        },
        {
          heading: "Complexity of Learning",
          description:
            "Many of today’s academic papers are highly technical and inaccessible to a broader audience. Research by Nature found that over 70% of students and early-career researchers report struggling to fully comprehend complex research papers without additional support or guidance (Source: Nature).",
        },
      ],
    },
    {
      title: "Need for Continuous Learning",
      items: [
        {
          heading: "Pace of Discovery",
          description:
            "With global research doubling every 9 years, staying on top of the latest developments is becoming increasingly difficult. The volume of academic papers is growing at an unprecedented rate. In 2022 alone, more than 2.2 million research papers were published worldwide (Source: Elsevier).",
        },
        {
          heading: "Accelerating Skills Gap",
          description:
            "According to the World Economic Forum, 50% of all employees will need reskilling by 2025 due to the rapid pace of technological change (Source: WEF).",
        },
      ],
    },
    {
      title: "Stagnant Learning Approaches",
      items: [
        {
          heading: "Passive Consumption Habits",
          description:
            "Traditional learning models, which often rely on textbooks or lecture-based formats, are increasingly outdated. A study from McKinsey & Company found that interactive learning methods, such as real-time quizzes and AI-driven explanations, can increase retention rates by 40% compared to traditional methods (Source: McKinsey).",
        },
        {
          heading: "Lack of Engagement",
          description:
            "Research papers, while crucial to innovation, are often dry and difficult to engage with. Over 60% of students report a lack of motivation or engagement with traditional academic texts (Source: National Center for Education Statistics).",
        },
      ],
    },
    {
      title: "Unseen Expertise & Career",
      items: [
        {
          heading: "Roadblocks in Career Advancement",
          description:
            "Traditional learning models, which often rely on textbooks or lecture-based formats, are increasingly outdated. A study from McKinsey & Company found that interactive learning methods, such as real-time quizzes and AI-driven explanations, can increase retention rates by 40% compared to traditional methods (Source: McKinsey).",
        },
        {
          heading: "Lack of Validation for Research Mastery",
          description:
            "Research papers, while crucial to innovation, are often dry and difficult to engage with. Over 60% of students report a lack of motivation or engagement with traditional academic texts (Source: National Center for Education Statistics).",
        },
        {
          heading: "Difficulty in Identifying Top Talent in Niche Domains",
          description:
            "Companies struggle to find top talent in specialized fields like AI and data science. McKinsey found 87% of executives face challenges recruiting experts for rapidly evolving roles.",
        },
        {
          heading: "Lack of Visibility for Highly Specialized Research",
          description:
            "Niche research often lacks exposure, making it difficult for professionals to showcase their expertise. According to LinkedIn, 40% of professionals in specialized fields struggle to gain recognition.",
        },
        {
          heading: "Unrecognized Impact of Independent Researchers",
          description:
            "Independent researchers, especially those outside traditional institutions, often find it hard to get their work recognized. A Nature survey revealed 30% of such researchers face visibility challenges.",
        },
        {
          heading: "Fragmented Talent Pools and Missed Opportunities",
          description:
            "As industries evolve, companies face difficulty accessing specialized talent in emerging technologies like blockchain and AI. Deloitte found 68% of organizations struggle to tap into fragmented talent pools.",
        },
      ],
    },
  ];

  return (
    <div className="mx-48 mt-16">
      <h1 className="text-2xl font-bold mb-4">
        Progress is built on the Pillars <br /> of Research and Discovery
      </h1>
      <div className="text-[#686868]">
        Accessing the latest research remains a challenge due to costly
        journals, traditional academic barriers, and outdated learning models.
        This creates a knowledge divide, preventing many, especially those
        outside top institutions, from staying current with advancements. This
        inequity not only limits individual growth but also hinders global
        innovation and economic progress.
      </div>
      {sections.map((section, index) => (
        <div key={index} className="mt-6">
          <h1 className="text-2xl font-bold mb-4">{section.title}</h1>
          <ul style={{ listStyleType: "disc" }}>
            {section.items.map((item, idx) => (
              <li key={idx} className="my-2">
                <strong>{item.heading}</strong>
                <p className="text-[#686868]">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="mt-6">
        <h1 className="text-2xl font-bold mb-4">The Clear Need for Change</h1>
        <div className="text-[#686868]">
          To bridge the gap in access to research, support continuous learning,
          and create a level playing field for all learners, we need to
          restructure the way research is accessed and how individuals engage
          with it. The existing system of academic research, with its siloed
          access and passive learning methods, is not sufficient for a world
          where knowledge evolves rapidly, and career success depends on
          continuous, dynamic learning.
        </div>
      </div>
    </div>
  );
};

export default ResearchDiscovery;
