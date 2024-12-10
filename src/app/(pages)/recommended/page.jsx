"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Book, Play, ThumbsDown, ThumbsUp } from "lucide-react";

const Page = () => {
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPapers = async () => {
      try {
        const response = await fetch(
          "https://cleverank.adnan-qasim.me/papers/get-papers-recommendation/1?limit=50"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch papers");
        }
        const data = await response.json();
        setPapers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPapers();
  }, []);

  if (loading) return <div>Loading papers...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="text-xl font-semibold">Recommended Papers</div>
      <div className="text-gray-500 text-sm pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia modi soluta nam.</div>
      <div className="flex flex-col gap-3">
        {papers.map((paper) => (
          <Card key={paper._id} className="relative shadow-sm hover:shadow transition-shadow duration-200 w-full flex rounded-sm bg-[#F9F9F9] items-center justify-between pr-3">
            <div className="flex items-center">

              <CardHeader className="relative flex-shrink-0">
                <CardTitle>
                  <img
                    src={paper.image_url || "/fallback-image.png"}
                    alt={`Cover for ${paper.paper_title}`}
                    className="w-full h-28 object-cover border"
                    onError={(e) => {
                      e.currentTarget.src = "/fallback-image.png";
                    }}
                  />
                </CardTitle>
              </CardHeader>
              <CardContent className="py-4 px-1 max-w-4xl">
                <strong className="font-semibold text-gray-800 line-clamp-2">
                  {paper.paper_title}
                </strong>
                <div className="flex items-center gap-4 text-sm pt-1 pb-3">
                  <div><strong> Year : {" "}</strong>{paper.year || "N/A"}</div>
                  <div>
                    <strong>Authors :</strong>{" "}
                    {paper.author.length > 3
                      ? `${paper.author
                        .slice(0, 3)
                        .map(
                          (author) => `${author.first_name} ${author.last_name}`
                        )
                        .join(", ")}...`
                      : paper.author
                        .map(
                          (author) => `${author.first_name} ${author.last_name}`
                        )
                        .join(", ")}
                  </div>
                  <div><strong> Paper Type : {" "}</strong>{paper.paper_type}</div>
                </div>

                <div className="line-clamp-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ab nisi laboriosam expedita dicta unde porro modi necessitatibus quis. Repellendus atque perspiciatis rerum ea nam odit, fuga minus iste laborum temporibus omnis!</div>
              </CardContent>
            </div>
            <div className="flex flex-col items-end justify-end">
              <div className="flex items-center gap-3 my-3 justify-end">
                <div className="text-[#59C009] p-1.5 bg-gray-100 rounded-full"><ThumbsUp className="size-5" /></div>
                <div className="text-gray-500 p-1.5 bg-gray-100 rounded-full"><ThumbsDown className="size-5" /></div>
              </div>
              <div className="flex items-center justify-end">
                <div className="text-[#59C009] p-1.5 border-2 border-[#59C009] rounded-full mr-4"><Play className="size-5" /></div>
                <Link href={`/recommended/${paper._id}`} className="text-base font-semibold bg-[#59C009] text-gray-50 px-5 py-2 flex items-center justify-center gap-1 rounded-full"><Book className="size-5" /> Read</Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Page;
