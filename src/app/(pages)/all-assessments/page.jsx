"use client";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import axios from 'axios'
import { CircleCheckBig, RotateCcw } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const Page = () => {

    const [assessments, setAssessments] = useState([])

    const fetchAssessments = () => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            url: 'https://cleverank.adnan-qasim.me/research-paper/get-all-assessment'
        }

        axios.request(options).then((response) => {
            console.log(response.data)
            setAssessments(response.data)
        }).catch((error) => {
            console.error(error)
        })
    }

    useEffect(() => {
        fetchAssessments()
    }, [])

    return (
        <>
            <div className='py-4'>
                <div className="text-xl font-semibold">Your Assessments</div>
                <div className="text-gray-500 text-sm pb-5">
                    Here is a list of all the assessments you have taken.
                </div>
            </div>
            <div className="flex flex-col gap-3">
                {assessments.map((paper, index) => (
                    <Card key={paper.paper_doc._id} className={`relative shadow-sm hover:shadow transition-shadow duration-200 w-full flex rounded-sm ${index % 2 === 0 ? "bg-[#F9F9F9]" : "bg-white"} items-center justify-between pr-3`}>
                        <div className="flex items-center">

                            <CardHeader className="relative flex-shrink-0">
                                <CardTitle>
                                    <img
                                        src={paper.paper_doc.image_url || "/fallback-image.png"}
                                        alt={`Cover for ${paper.paper_doc.paper_title}`}
                                        className="w-full h-20 object-cover border"
                                        onError={(e) => {
                                            e.currentTarget.src = "/fallback-image.png";
                                        }}
                                    />
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="py-4 px-1 max-w-4xl">
                                <strong className="font-semibold text-gray-800 line-clamp-2">
                                    {paper.paper_doc.paper_title}
                                </strong>
                                <div className="flex items-center gap-4 text-sm pt-1 pb-3">
                                    <div><strong> Year : {" "}</strong>{paper.paper_doc.year || "N/A"}</div>
                                    <div>
                                        <strong>Authors :</strong>{" "}
                                        {paper.paper_doc.author.length > 3
                                            ? `${paper.paper_doc.author
                                                .slice(0, 3)
                                                .map(
                                                    (author) => `${author.first_name} ${author.last_name}`
                                                )
                                                .join(", ")}...`
                                            : paper.paper_doc.author
                                                .map(
                                                    (author) => `${author.first_name} ${author.last_name}`
                                                )
                                                .join(", ")}
                                    </div>
                                </div>

                                <div className="line-clamp-1 text-sm text-gray-600">{paper?.paper_doc?.paper_abstract ?? "Summary Not Available."}</div>
                            </CardContent>
                        </div>
                        <CardFooter>
                            <div></div>
                        </CardFooter>
                    </Card>
                ))}
            </div>

        </>
    )
}

export default Page
