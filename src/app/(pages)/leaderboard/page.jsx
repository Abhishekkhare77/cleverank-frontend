import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

const Page = () => {
  const topLearners = [
    {
      name: "John Doe",
      institute: "Harvard University",
      academicEducation: "Masters",
      intellect: ["AI", "ML", "Data Science"],
      country: "/CountryFlags/usa.png",
      paperCount: 120,
      points: 1200,
    },
    {
      name: "You",
      institute: "National Institute of Technology",
      academicEducation: "Masters",
      intellect: ["Data Science", "AI"],
      country: "/CountryFlags/india.png",
      paperCount: 100,
      points: 1100,
    },

    {
      name: "David Johnson",
      institute: "Massachusetts Institute of Technology",
      academicEducation: "Masters",
      intellect: ["Data Science", "Machine Learning"],
      country: "/CountryFlags/usa.png",
      paperCount: 90,
      points: 1000,
    },
    {
      name: "Emily Brown",
      institute: "University of Cambridge",
      academicEducation: "PhD",
      intellect: ["AI", "Natural Language Processing"],
      country: "/CountryFlags/united-kingdom.png",
      paperCount: 80,
      points: 900,
    },
    {
      name: "Michael Wilson",
      institute: "ETH Zurich",
      academicEducation: "Masters",
      intellect: ["Robotics", "Computer Vision"],
      country: "/CountryFlags/Switzerland.png",
      paperCount: 70,
      points: 800,
    },
    {
      name: "Sophia Taylor",
      institute: "University of Oxford",
      academicEducation: "PhD",
      intellect: ["AI", "Machine Learning"],
      country: "/CountryFlags/united-kingdom.png",
      paperCount: 60,
      points: 700,
    },
    {
      name: "Jane Smith",
      institute: "Stanford University",
      academicEducation: "PhD",
      intellect: ["AI", "Robotics", "Computer Vision"],
      country: "/CountryFlags/usa.png",
      paperCount: 50,
      points: 600,
    },

    {
      name: "Olivia Martinez",
      institute: "University of California, Berkeley",
      academicEducation: "PhD",
      intellect: ["AI", "Robotics"],
      country: "/CountryFlags/usa.png",
      paperCount: 40,
      points: 500,
    },
    {
      name: "Matthew Thomas",
      institute: "University of Toronto",
      academicEducation: "Masters",
      intellect: ["Machine Learning", "Data Science"],
      country: "/CountryFlags/canada.png",
      paperCount: 30,
      points: 400,
    },
    {
      name: "Ava Garcia",
      institute: "University of Melbourne",
      academicEducation: "PhD",
      intellect: ["AI", "Computer Vision"],
      country: "/CountryFlags/australia.png",
      paperCount: 20,
      points: 300,
    },
  ];

  return (
    <div>
      <div className="text-xl font-semibold">Leaderboard</div>
      <div className="text-gray-500 text-sm pb-5">
        Here is the list of all the top users.
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold text-black">Name</TableHead>
            <TableHead className="font-semibold text-black">
              Institute
            </TableHead>
            <TableHead className="font-semibold text-black">
              Education
            </TableHead>
            <TableHead className="font-semibold text-black">
              Intellect
            </TableHead>
            <TableHead className="font-semibold text-black">Country</TableHead>
            <TableHead className="font-semibold text-black">
              Paper Count
            </TableHead>
            <TableHead className="font-semibold text-black">Points</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {topLearners.map((learner, index) => (
            <TableRow
              key={learner.name}
              className={
                index === 1
                  ? "bg-[#8ae18a] hover:bg-[#8ae18a]"
                  : index % 2 === 0
                  ? "bg-gray-50"
                  : ""
              }
            >
              <TableCell className="py-4">{learner.name}</TableCell>
              <TableCell>{learner.institute}</TableCell>
              <TableCell>{learner.academicEducation}</TableCell>
              <TableCell>{learner.intellect.join(", ")}</TableCell>
              <TableCell>
                <Image
                  src={learner.country}
                  height={35}
                  width={35}
                  quality={100}
                />
              </TableCell>
              <TableCell>{learner.paperCount}</TableCell>
              <TableCell>{learner.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Page;
