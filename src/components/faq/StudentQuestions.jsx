import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Card } from "../ui/card";

const StudentFAQ = [
  {
    question: "How do I get started with Cleverank?",
    answer:
      "Simply register with your academic details, areas of interest, and career goals. Our AI will tailor research paper recommendations and guide you through a personalized learning path.",
  },
  {
    question: "What kind of research papers does Cleverank recommend?",
    answer:
      "Cleverank curates research papers based on your interests, career goals, and academic level. We recommend high-impact papers, focusing on the latest trends and breakthroughs in your field.",
  },
  {
    question: "How does Cleverank personalize my learning experience?",
    answer:
      "Cleverank’s AI analyzes your profile, including your academic background and career aspirations, to recommend research papers, quizzes, and assessments tailored to your needs.",
  },
  {
    question: "Can I access research papers from any field?",
    answer:
      "Yes, Cleverank offers research papers across a wide range of disciplines, including technology, healthcare, business, and social sciences, ensuring there's something for everyone.",
  },
  {
    question: "How does the AI help me understand research papers?",
    answer:
      "Cleverank provides AI-powered tools like concept explanations, interactive chats with the paper, quizzes, and real-time support to make complex research easier to understand.",
  },
  {
    question: "Do I need any prior knowledge to use Cleverank?",
    answer:
      "No prior expertise is required. Cleverank is designed to meet you at your level, offering tools and explanations to help you grasp even advanced concepts.",
  },
  {
    question: "What are Karma points, and how do I earn them?",
    answer:
      "Karma points are earned by completing research papers, quizzes, and assessments. These points reflect your progress and mastery of the content, and can be used to unlock rewards and recognition.",
  },
  {
    question: "Can I compete with others on the platform?",
    answer:
      "Yes, you can compete with classmates and learners worldwide by earning Karma points and badges based on your research achievements. It’s a great way to stay motivated and see how you stack up!",
  },
  {
    question: "How does the automated assessment work?",
    answer:
      "After completing a paper, you can take an automated assessment that tests your understanding of the material. The AI evaluates your performance and provides personalized feedback to help you improve.",
  },
  {
    question: "What are research bounties, and how do they work?",
    answer:
      "Some research papers come with bounties, offering monetary rewards for completing specific tasks or assignments. This allows you to earn passive income while you learn.",
  },
  {
    question: "How do I build a research portfolio?",
    answer:
      "As you complete research papers and assessments, your achievements are added to your profile, helping you build a portfolio that showcases your expertise and progress over time.",
  },
  {
    question: "Can Cleverank help me with job opportunities?",
    answer:
      "Yes, Cleverank allows you to showcase your research achievements, skills, and portfolio to potential employers, helping you unlock job opportunities and career advancement.",
  },
  {
    question: "How do I earn badges, and what do they mean?",
    answer:
      "Badges are awarded for completing certain milestones, such as mastering specific topics or excelling in assessments. They serve as recognition of your expertise and progress.",
  },
  {
    question: "Can I interact with professors or other students on Cleverank?",
    answer:
      "Yes, Cleverank allows you to connect with peers and professors for collaborative learning and discussions, creating a dynamic academic community.",
  },
  {
    question:
      "How do I get scholarships or PhD opportunities through Cleverank?",
    answer:
      "By completing research papers and earning recognition on the platform, you can unlock access to scholarships, PhD placements, and other academic opportunities.",
  },
  {
    question: "How is my progress tracked on Cleverank?",
    answer:
      "Your progress is tracked through real-time analytics, including Karma points, badges, quiz scores, and research completion. You can monitor how well you're mastering content and where to improve.",
  },
  {
    question: "Is Cleverank free to use?",
    answer:
      "Cleverank offers both free and premium plans. The free plan provides access to basic features, while the premium plan offers additional benefits like advanced research tools, exclusive content, and bounties.",
  },
  {
    question: "How can I contact support if I have issues with the platform?",
    answer:
      "If you need help, you can reach out to our support team through the “Contact Us” page, or access the help center for FAQs and troubleshooting guides.",
  },
  {
    question: "What types of research papers are available on Cleverank?",
    answer:
      "Cleverank offers a diverse range of academic papers, including peer-reviewed journal articles, conference papers, white papers, and more, across multiple disciplines like science, technology, engineering, healthcare, and social sciences.",
  },
  {
    question: "How do I know which research papers to start with?",
    answer:
      "Cleverank’s AI analyzes your interests and career goals to recommend research papers suited to your level and needs. You can start with papers recommended based on your profile and learning preferences.",
  },
  {
    question: "Can I download the research papers from Cleverank?",
    answer:
      "Depending on licensing and availability, you may be able to access and download research papers. Some papers are available directly through Cleverank, while others may require access through external academic platforms.",
  },
  {
    question:
      "Is Cleverank suitable for undergraduate, graduate, and PhD students?",
    answer:
      "Yes, Cleverank caters to learners at all academic levels. Whether you're an undergraduate, graduate student, or PhD researcher, Cleverank offers tailored resources to match your expertise and learning goals.",
  },
  {
    question: "How do quizzes and assessments help me understand research?",
    answer:
      "Quizzes and assessments are designed to test your comprehension of the research content. By completing these, you reinforce your understanding, fill knowledge gaps, and receive targeted feedback to improve.",
  },
  {
    question: "Can I review my past research papers and assessments?",
    answer:
      "Yes, you can view your past research papers, assessments, and the feedback provided on your Cleverank profile. This allows you to track your learning progress and revisit any content you want to review.",
  },
  {
    question: "What is the Viva Voce assessment, and how does it work?",
    answer:
      "The Viva Voce is an interactive oral assessment that tests your knowledge of research papers. The AI evaluates your understanding by asking questions based on the material, offering a more engaging and dynamic form of evaluation.",
  },
  {
    question: "Can I track my progress against other learners globally?",
    answer:
      "Yes, Cleverank allows you to compare your Karma points and achievements with learners worldwide. This feature fosters healthy competition and encourages you to stay motivated.",
  },
  {
    question: "How do I know if I’ve truly understood the research paper?",
    answer:
      "After reading a research paper, you can take a quiz or complete the Viva Voce assessment to test your understanding. These assessments provide immediate feedback, allowing you to evaluate and improve your comprehension.",
  },
  {
    question: "How are badges awarded?",
    answer:
      "Badges are awarded for completing key milestones, such as finishing a research paper, excelling in assessments, or mastering a specific research area. These badges are displayed on your portfolio, showcasing your achievements.",
  },
  {
    question:
      "Can I share my research achievements with employers or universities?",
    answer:
      "Yes, your Cleverank portfolio allows you to share your research achievements, Karma points, and badges with potential employers or academic institutions, helping you stand out in applications for jobs, scholarships, or PhD placements.",
  },
  {
    question:
      "Can I use Cleverank for non-academic purposes or personal learning?",
    answer:
      "Yes, Cleverank can be used for personal learning and professional development, allowing you to explore research in areas that align with your personal interests or career advancement, even if they are outside formal academic requirements.",
  },
];

const StudentQuestions = () => (
  <Card className=" w-full  px-6">
    <div className="w-full text-2xl font-semibold text-center my-8">
      Students
    </div>
    <Accordion type="single" collapsible>
      {StudentFAQ.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </Card>
);

export default StudentQuestions;
