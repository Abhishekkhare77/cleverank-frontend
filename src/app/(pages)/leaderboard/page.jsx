import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const Page = () => {

    const topLearners = [
        {
            name: "John Doe",
            institute: "Harvard University",
            academicEducation: "Masters",
            intellect: ["AI", "ML", "Data Science"],
            country: "USA",
            paperCount: 120,
            points: 1200,
        },
        {
            name: "Jane Smith",
            institute: "Stanford University",
            academicEducation: "PhD",
            intellect: ["AI", "Robotics", "Computer Vision"],
            country: "USA",
            paperCount: 100,
            points: 1100,
        },
        {
            name: "David Johnson",
            institute: "Massachusetts Institute of Technology",
            academicEducation: "Masters",
            intellect: ["Data Science", "Machine Learning"],
            country: "USA",
            paperCount: 90,
            points: 1000,
        },
        {
            name: "Emily Brown",
            institute: "University of Cambridge",
            academicEducation: "PhD",
            intellect: ["AI", "Natural Language Processing"],
            country: "UK",
            paperCount: 80,
            points: 900,
        },
        {
            name: "Michael Wilson",
            institute: "ETH Zurich",
            academicEducation: "Masters",
            intellect: ["Robotics", "Computer Vision"],
            country: "Switzerland",
            paperCount: 70,
            points: 800,
        },
        {
            name: "Sophia Taylor",
            institute: "University of Oxford",
            academicEducation: "PhD",
            intellect: ["AI", "Machine Learning"],
            country: "UK",
            paperCount: 60,
            points: 700,
        },
        {
            name: "Daniel Anderson",
            institute: "California Institute of Technology",
            academicEducation: "Masters",
            intellect: ["Data Science", "AI"],
            country: "USA",
            paperCount: 50,
            points: 600,
        },
        {
            name: "Olivia Martinez",
            institute: "University of California, Berkeley",
            academicEducation: "PhD",
            intellect: ["AI", "Robotics"],
            country: "USA",
            paperCount: 40,
            points: 500,
        },
        {
            name: "Matthew Thomas",
            institute: "University of Toronto",
            academicEducation: "Masters",
            intellect: ["Machine Learning", "Data Science"],
            country: "Canada",
            paperCount: 30,
            points: 400,
        },
        {
            name: "Ava Garcia",
            institute: "University of Melbourne",
            academicEducation: "PhD",
            intellect: ["AI", "Computer Vision"],
            country: "Australia",
            paperCount: 20,
            points: 300,
        },
    ];

    return (
        <div>
            <div className="text-xl font-semibold">Leaderboard</div>
            <div className="text-gray-500 text-sm pb-5">Here is the list of all the top users.</div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Institute</TableHead>
                        <TableHead>Education</TableHead>
                        <TableHead>Intellect</TableHead>
                        <TableHead>Country</TableHead>
                        <TableHead>Paper Count</TableHead>
                        <TableHead>Points</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {topLearners.map((learner) => (
                        <TableRow key={learner.name}>
                            <TableCell>{learner.name}</TableCell>
                            <TableCell>{learner.institute}</TableCell>
                            <TableCell>{learner.academicEducation}</TableCell>
                            <TableCell>{learner.intellect.join(", ")}</TableCell>
                            <TableCell>{learner.country}</TableCell>
                            <TableCell>{learner.paperCount}</TableCell>
                            <TableCell>{learner.points}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default Page