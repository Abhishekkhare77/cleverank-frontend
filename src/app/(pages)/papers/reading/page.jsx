"use client";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { CircleCheckBig, RotateCcw } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Page = () => {

    const [papers, setPapers] = useState([]);
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    const extractDateInFomat = (endTime) => {
        const endDate = new Date(endTime);
        const currentDate = new Date();
        const timeDiff = endDate.getTime() - currentDate.getTime();
        const daysLeftCalc = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert time diff to days
        return daysLeftCalc > 0 ? `${daysLeftCalc} days left` : "Time's up"
    }

    useEffect(() => {
        const fetchPapers = async () => {
            setLoading(true);
            try {
                const response = await fetch("https://cleverank.adnan-qasim.me/papers/get-reading-status", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    }
                })
                if (response.ok) {
                    const data = await response.json();
                    console.log(data);
                    setPapers(data.papers);
                    setLoading(false);
                }
            }
            catch (err) {
                console.log(err);
            }
        }

        fetchPapers();
    }, []);

    if (loading)
        return (
            <div>
                <div className="space-y-2">
                    <Skeleton className={"w-1/4 h-8"} />
                    <Skeleton className={"w-1/2 h-6"} />
                </div>
                <div>
                    <Skeleton className={"w-full h-44 my-5"} />
                    <Skeleton className={"w-full h-44 my-5"} />
                    <Skeleton className={"w-full h-44 my-5"} />
                    <Skeleton className={"w-full h-44 my-5"} />
                </div>
            </div>
        );


    return (
        <>
            <div className="text-3xl font-semibold">Reading</div>
            <div className="text-gray-500 text-sm pb-3">Here are the list of papers you have started reading or completed.</div>
            <div className="flex flex-col gap-3">
                {papers.map((paper, index) => (
                    <Card key={paper.paper_details._id} className={`relative shadow-sm hover:shadow transition-shadow duration-200 w-full flex rounded-sm ${index % 2 === 0 ? "bg-[#F9F9F9]" : "bg-white"} items-center justify-between pr-3`}>
                        <div className="flex items-center">

                            <CardHeader className="relative flex-shrink-0">
                                <CardTitle>
                                    <img
                                        src={paper.paper_details.image_url || "/fallback-image.png"}
                                        alt={`Cover for ${paper.paper_details.paper_title}`}
                                        className="w-full h-20 object-cover border"
                                        onError={(e) => {
                                            e.currentTarget.src = "/fallback-image.png";
                                        }}
                                    />
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="py-4 px-1 max-w-4xl">
                                <strong className="font-semibold text-gray-800 line-clamp-2">
                                    {paper.paper_details.paper_title}
                                </strong>
                                <div className="flex items-center gap-4 text-sm pt-1 pb-3">
                                    <div><strong> Year : {" "}</strong>{paper.paper_details.year || "N/A"}</div>
                                    <div>
                                        <strong>Authors :</strong>{" "}
                                        {paper.paper_details.author.length > 3
                                            ? `${paper.paper_details.author
                                                .slice(0, 3)
                                                .map(
                                                    (author) => `${author.first_name} ${author.last_name}`
                                                )
                                                .join(", ")}...`
                                            : paper.paper_details.author
                                                .map(
                                                    (author) => `${author.first_name} ${author.last_name}`
                                                )
                                                .join(", ")}
                                    </div>
                                </div>

                                <div className="line-clamp-2 text-sm text-gray-600">{paper?.creative_summary?.creative_summary ?? "Summary Not Available."}</div>
                            </CardContent>
                        </div>
                        <CardFooter>
                            {paper?.is_complete && <Button className="w-36" onClick={() => router.push(`/recommended/${paper?.paper_id}`)}><CircleCheckBig size={14} /> Completed</Button>}
                            {paper?.is_reading && extractDateInFomat(paper.end_reading_time) !== "Time's up" && (
                                <div className='relative'>
                                    <Button onClick={() => router.push(`/recommended/${paper?.paper_id}`)} variant="outline" className="w-36">Continue Reading</Button>
                                    <div className='absolute left-10 -bottom-5 text-sm tracking-tight font-semibold text-primary'>{extractDateInFomat(paper.end_reading_time)}</div>
                                </div>
                            )}
                            {
                                paper?.is_reading && !paper?.is_complete && extractDateInFomat(paper.end_reading_time) === "Time's up" && (
                                    <Button className="w-36" onClick={() => router.push(`/recommended/${paper?.paper_id}`)} variant="destructive"><RotateCcw /> Time&apos;s Up</Button>
                                )
                            }
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </>
    )
}

export default Page
