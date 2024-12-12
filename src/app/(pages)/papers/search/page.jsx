"use client";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input'
import { Book, Search } from 'lucide-react'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';

const Page = () => {
    const [search, setSearch] = useState('')
    const [papers, setPapers] = useState([])
    const [loading, setLoading] = useState(false)

    const searchPaper = async () => {
        if (!search.trim()) return; // Prevent search if the query is empty
        setLoading(true);
        try {
            const response = await fetch(
                `https://cleverank.adnan-qasim.me/papers/search-paper-pdf?query=${search}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
            );
            if (!response.ok) {
                throw new Error("Failed to fetch papers");
            }
            const data = await response.json();
            console.log(data);
            setPapers(data);
        } catch (err) {
            toast.error("Failed to fetch papers");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        searchPaper();
    }, [search])

    return (
        <div>
            <div className="text-xl font-semibold">Search</div>
            <div className="text-gray-500 text-sm pb-3">Write the name or anything related to the paper to search.</div>
            <div className='relative'>
                <Input
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            searchPaper(); // Trigger search on Enter
                        }
                    }}
                    className="border border-gray-300 rounded-lg p-2"
                />
                <button
                    onClick={searchPaper}
                    disabled={loading}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                    <Search />
                </button>
            </div>

            {loading && <div className="text-center mt-4">Loading...</div>}

            <div className="mt-6 space-y-2">
                {papers.length === 0 && search.length !== 0 && !loading ? (
                    <div>No papers found. Try a different search.</div>
                ) : (
                    papers.map((paper, index) => (
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
                                    <div>
                                        <div className="flex items-center gap-2 flex-wrap">
                                            {paper.keywords.map((keyword, index) => (
                                                <div key={index} className="bg-green-100 text-green-700 text-xs flex items-center gap-1 px-2 py-1 rounded-full">
                                                    <span>{keyword}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </div>
                            <div className="flex flex-col items-end justify-end">
                                <Link href={`/recommended/${paper._id}`} className="text-base font-semibold bg-[#59C009] text-gray-50 px-5 py-2 flex items-center justify-center gap-1 rounded-full"><Book className="size-5" />Read</Link>
                            </div>
                        </Card>
                    ))
                )}
            </div>
        </div>
    )
}

export default Page;
