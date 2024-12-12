"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Card } from "../ui/card";

const InstitutionsQuestions = () => {
  const faqStudent = [
    {
      question: "What is Cleverank?",
      answer:
        "Cleverank is an AI-powered platform that helps educators create personalized learning paths for students by recommending relevant research papers, assignments, and assessments to enhance academic performance.",
    },
    {
      question: "How can Cleverank enhance my teaching?",
      answer:
        "Cleverank allows you to assign research papers, quizzes, and interactive assessments that align with your curriculum. The platform helps students understand complex research through AI-driven support, allowing you to track their progress efficiently.",
    },
    {
      question: "How does Cleverank help me monitor student progress?",
      answer:
        "Cleverank provides real-time analytics on student engagement, quiz scores, and research comprehension. This helps you track individual and group progress, identify areas for improvement, and provide targeted feedback.",
    },
    {
      question: "Can I assign specific research papers to my students?",
      answer:
        "Yes, Cleverank allows you to assign specific papers from a global database, ensuring students work with the most relevant and high-impact research in your field.",
    },
    {
      question: "How does Cleverank support collaborative learning?",
      answer:
        "Cleverank promotes collaboration by connecting students with peers globally, enabling them to engage in discussions, share insights, and work on group research projects.",
    },
    {
      question: "Can I track students’ understanding of research papers?",
      answer:
        "Yes, Cleverank offers automated assessments, including quizzes and Viva Voce, that test students' comprehension of research papers. You can easily track their performance and give feedback.",
    },
    {
      question: "What are Karma points, and how do they help my students?",
      answer:
        "Karma points are earned when students complete research papers and assessments. These points reflect their engagement and mastery of content and help keep them motivated and on track.",
    },
    {
      question: "Can I provide feedback on student assessments?",
      answer:
        "Yes, you can provide personalized feedback on student quizzes and assignments through the platform. This allows you to guide students in areas where they may need additional support.",
    },
    {
      question: "How can Cleverank help prepare students for future careers?",
      answer:
        "By completing research papers, earning badges, and showcasing their expertise, students can build a strong academic portfolio that can lead to career opportunities, scholarships, and PhD placements.",
    },
    {
      question: "How does Cleverank enhance research literacy for my students?",
      answer:
        "Cleverank provides interactive tools like concept explanations, chatbots, and quizzes to help students understand complex research papers and develop critical thinking and research skills.",
    },
    {
      question: "Can I assign a series of papers as a course or module?",
      answer:
        "Yes, you can group papers into modules or courses and assign them to your students, ensuring they follow a structured learning path with relevant assessments and feedback.",
    },
    {
      question: "What kind of support is available for professors?",
      answer:
        "Cleverank offers dedicated support for educators, including personalized onboarding, help with assigning papers, and guidance on using analytics to track student progress.",
    },
    {
      question: "Can I use Cleverank for my research?",
      answer:
        "Yes, Cleverank is designed to help both students and educators stay up to date with the latest research in their field. Professors can access and engage with high-quality, global research papers to stay ahead in their academic areas.",
    },
    {
      question: "How does Cleverank help with time management?",
      answer:
        "Cleverank’s AI handles much of the research recommendation and assessment tasks, allowing you to save time and focus on providing meaningful interactions with your students.",
    },
    {
      question: "Can I assign papers from different disciplines?",
      answer:
        "Yes, Cleverank offers papers from a wide range of academic fields, so you can assign interdisciplinary research to students or integrate papers from various domains into your curriculum.",
    },
    {
      question:
        "How can I encourage students to actively participate in Cleverank?",
      answer:
        "You can motivate students by setting clear learning goals, assigning rewarding research papers, and leveraging Cleverank’s competitive features like Karma points, badges, and global rankings to drive engagement.",
    },
    {
      question: "Can I create custom assessments for my students?",
      answer:
        "Yes, Cleverank allows you to design custom quizzes and assignments tailored to specific research papers or topics, giving you flexibility to assess students' understanding in various formats.",
    },
    {
      question: "How can I track student progress in real-time?",
      answer:
        "Cleverank provides real-time analytics on student engagement, quiz performance, and research comprehension. You can monitor individual student progress, identify knowledge gaps, and offer personalized guidance.",
    },
    {
      question: "How does Cleverank support interdisciplinary learning?",
      answer:
        "Cleverank allows you to assign research papers from multiple disciplines, encouraging interdisciplinary learning. Students can explore research across different fields, fostering a broader understanding of complex topics.",
    },
    {
      question: "How do I manage multiple students on Cleverank?",
      answer:
        "Cleverank’s educator dashboard allows you to manage all your students in one place, track their progress, assign papers, and give feedback easily. You can also group students by specific learning goals or projects.",
    },
    {
      question: "How does Cleverank enhance student engagement with research?",
      answer:
        "Cleverank includes interactive features such as quizzes, discussions, concept explanations, and AI chatbots that make learning research more engaging and accessible for students.",
    },
    {
      question:
        "Can I assign different papers to different students within the same class?",
      answer:
        "Yes, you can customize assignments for individual students based on their learning needs, allowing you to offer a personalized experience even within a large class.",
    },
    {
      question:
        "What types of research papers are most beneficial for students?",
      answer:
        "Depending on the student’s field of study, Cleverank recommends papers with high impact factors, peer citations, and relevance to emerging trends in the discipline. Professors can also suggest papers based on specific course objectives.",
    },
    {
      question:
        "Is there a limit to how many students can join my course on Cleverank?",
      answer:
        "No, Cleverank can scale to accommodate as many students as needed. You can manage large classes or smaller, more focused groups without restrictions on the number of students.",
    },
  ];
  return (
    <Card className="mx-44 px-8 ">
      <div className="w-full text-2xl font-semibold text-center my-8">
        Frequently Asked Questions (FAQ) for Institutions
      </div>
      <Accordion type="single" collapsible>
        {faqStudent.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Card>
  );
};

export default InstitutionsQuestions;
