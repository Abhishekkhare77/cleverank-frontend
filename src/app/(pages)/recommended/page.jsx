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

const Page = () => {
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPapers = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/papers/get-papers-recommendation/1?limit=50"
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
      <div className="my-6 text-xl font-semibold">Recommended Papers</div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {papers.map((paper) => (
          <Link key={paper._id} href={`/recommended/${paper._id}`}>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-200 w-64 h-96 flex flex-col">
              <CardHeader className="relative flex-shrink-0">
                <CardTitle>
                  <img
                    src={paper.image_url || "/fallback-image.png"}
                    alt={`Cover for ${paper.paper_title}`}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/fallback-image.png"; // Fallback image
                    }}
                  />
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 p-2 overflow-hidden">
                <div className="font-semibold text-gray-800 text-base px-1 line-clamp-2">
                  {paper.paper_title}
                </div>
                <div className="mt-2 text-sm text-gray-500 px-1">
                  <strong>Authors:</strong>{" "}
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
              </CardContent>
              <CardFooter className="flex justify-between p-2 text-xs text-gray-500">
                <div>{paper.paper_type}</div>
                <div>Year: {paper.year || "N/A"}</div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Page;
