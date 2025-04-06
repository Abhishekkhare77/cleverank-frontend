"use client";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import axios from 'axios'
import { ArrowRight, CircleCheckBig, Clock, RotateCcw } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Page = () => {

    const [assessments, setAssessments] = useState([])
    const router = useRouter();

    const fetchAssessments = () => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            url: 'https://cleverank.cumulate.live/research-paper/get-all-assessment'
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
                <div className="text-3xl font-semibold">Your Assessments</div>
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
                                <div className="line-clamp-2 my-2 text-sm text-gray-600">{paper?.paper_doc?.paper_abstract ?? "Summary Not Available."}</div>
                                <div className='text-xs'>
                                    Completion date :{new Date(paper.user_assessment.date).toLocaleDateString('en-GB', {
                                        day: '2-digit',
                                        month: 'long',
                                        year: 'numeric'
                                    })}
                                </div>
                            </CardContent>
                        </div>
                        <CardFooter>
                            {/* pass, review, retest */}
                            <div className='capitalize'>{paper?.user_assessment?.assessment_status === 'review' ?
                                <Button className="w-36" variant={"secondary"}><Clock /> In Review</Button> :
                                paper?.user_assessment?.assessment_status === 'pass' ?
                                    <div className='flex items-center justify-center flex-col mt-10'>
                                        <div className='w-36 flex items-center gap-2'><Button className="w-3/4"> <CircleCheckBig /> Pass </Button><Button variant="outline" className="w-1/4">{paper?.user_assessment?.points_earned}</Button> </div>
                                        <Button className="w-32" variant="link">Go to Feedback <ArrowRight /></Button>
                                    </div>
                                    :
                                    <div className='flex items-center justify-center flex-col mt-10'>
                                        <div className='w-36 flex items-center gap-2'><Button variant="destructive" className="w-3/4"><RotateCcw />Retest</Button><Button variant="outline" className="w-1/4">{paper?.user_assessment?.points_earned}</Button> </div>
                                        <Button className="w-32" variant="link">Go to Feedback <ArrowRight /></Button>
                                    </div>
                            }
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>

        </>
    )
}

export default Page
