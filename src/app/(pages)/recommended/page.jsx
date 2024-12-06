import NavBar from "@/components/NavBar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const Page = () => {
  const researchPapers = [
    {
      title: "Advanced Techniques in Quantum Computing",
      impact_factor: 90,
      h_index: 3,
      cover_picture:
        "https://www.investopedia.com/thmb/mL2a2GAnrskc-ebuq-UT-GM_bwU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/quantum-computing.asp-FINAL-1-68635090f7534414b9173598fe0ad95c.png",
    },
    {
      title: "Machine Learning Applications in Bioinformatics",
      impact_factor: 90,
      h_index: 3,
      cover_picture:
        "https://mdpi-res.com/bookfiles/book/3940/Bioinformatics_Applications_Based_On_Machine_Learning.jpg?v=1731117754",
    },
    {
      title: "Nanotechnology in Sustainable Energy",
      impact_factor: 90,
      h_index: 3,
      cover_picture:
        "https://media.springernature.com/full/springer-static/cover-hires/book/978-3-030-33774-2",
    },
    {
      title: "Blockchain Technology for Secure Transactions",
      impact_factor: 90,
      h_index: 3,
      cover_picture:
        "https://media.licdn.com/dms/image/v2/D4D12AQHFEnzhJpvL5A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1655635596144?e=2147483647&v=beta&t=YzkUX5n7SGmtMQDum_uQXeseiVjj2fH56yTHPZO1p4Y",
    },
    {
      title: "Artificial Intelligence in Healthcare",
      impact_factor: 90,
      h_index: 3,
      cover_picture:
        "https://media.springernature.com/full/springer-static/cover-hires/book/978-981-16-6265-2",
    },
    {
      title: "Climate Change and Renewable Energy Solutions",
      impact_factor: 90,
      h_index: 3,
      cover_picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4QXOU5kTJVLXB6fMj-0WE6a6Fz88Yh5BIfA&s",
    },
    {
      title: "Innovations in 3D Printing for Medical Applications",
      impact_factor: 90,
      h_index: 3,
      cover_picture:
        "https://m.media-amazon.com/images/I/61+ZSe1uDcL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Cybersecurity Trends in the Era of IoT",
      impact_factor: 90,
      h_index: 3,
      cover_picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSER8Urjdl7uUbUpkfTMj_p4niCy-dNeyGK8iqJ6L7EPlZZM5OvJkGK5f7KT64yTD3YmXw&usqp=CAU",
    },
    {
      title: "Big Data Analytics for Smart Cities",
      impact_factor: 90,
      h_index: 3,
      cover_picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIhA0RoICOY20hFfikcVD9ddslw5BivAfpnA&s",
    },
    {
      title: "Gene Editing Techniques and Ethical Challenges",
      impact_factor: 90,
      h_index: 3,
      cover_picture:
        "https://media.springernature.com/full/springer-static/cover-hires/book/978-981-99-9338-3",
    },
    {
      title: "Climate Change and Renewable Energy Solutions",
      impact_factor: 90,
      h_index: 3,
      cover_picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4QXOU5kTJVLXB6fMj-0WE6a6Fz88Yh5BIfA&s",
    },
    {
      title: "Innovations in 3D Printing for Medical Applications",
      impact_factor: 90,
      h_index: 3,
      cover_picture:
        "https://m.media-amazon.com/images/I/61+ZSe1uDcL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Cybersecurity Trends in the Era of IoT",
      impact_factor: 90,
      h_index: 3,
      cover_picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSER8Urjdl7uUbUpkfTMj_p4niCy-dNeyGK8iqJ6L7EPlZZM5OvJkGK5f7KT64yTD3YmXw&usqp=CAU",
    },
    {
      title: "Big Data Analytics for Smart Cities",
      impact_factor: 90,
      h_index: 3,
      cover_picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIhA0RoICOY20hFfikcVD9ddslw5BivAfpnA&s",
    },
    {
      title: "Gene Editing Techniques and Ethical Challenges",
      impact_factor: 90,
      h_index: 3,
      cover_picture:
        "https://media.springernature.com/full/springer-static/cover-hires/book/978-981-99-9338-3",
    },
  ];

  return (
    <>

      <div className="my-6 text-xl font-semibold">Recommended Papers</div>
      <div className="grid grid-cols-5 gap-6">
        {researchPapers.map((paper, index) => (
          <Link
            key={index}
            href={`recommended/${index}`}
          >

            <Card key={index} className=" shadow-sm  hover:shadow">
              <CardHeader>
                <CardTitle>
                  {" "}
                  <img
                    src={paper.cover_picture}
                    alt={paper.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </CardTitle>
              </CardHeader>
              <CardContent className="  text-gray-500">
                IF: {paper.impact_factor} | H-Index: {paper.h_index}
              </CardContent>
              <CardContent className=" -mt-4 ">{paper.title}</CardContent>
            </Card>
          </Link>
        ))}
      </div>

    </>
  );
};

export default Page;
