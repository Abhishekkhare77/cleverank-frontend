import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react'

const Page = () => {

    const papers = [];

    return (
        <>
            <div className="text-xl font-semibold">Reading</div>
            <div className="text-gray-500 text-sm pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia modi soluta nam.</div>
            <div className="flex flex-col gap-3">
                {papers.map((paper, index) => (
                    <Card key={paper._id} className={`relative shadow-sm hover:shadow transition-shadow duration-200 w-full flex rounded-sm ${index % 2 === 0 ? "bg-[#F9F9F9]" : "bg-white"} items-center justify-between pr-3`}>
                        <div className="flex items-center">

                            <CardHeader className="relative flex-shrink-0">
                                <CardTitle>
                                    <img
                                        src={paper.image_url || "/fallback-image.png"}
                                        alt={`Cover for ${paper.paper_title}`}
                                        className="w-full h-36 object-cover border"
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
                                </div>

                                <div className="line-clamp-3 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ab nisi laboriosam expedita dicta unde porro modi necessitatibus quis. Repellendus atque perspiciatis rerum ea nam odit, fuga minus iste laborum temporibus omnis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis animi ipsum blanditiis.</div>
                            </CardContent>
                        </div>
                    </Card>
                ))}
            </div>
        </>
    )
}

export default Page
