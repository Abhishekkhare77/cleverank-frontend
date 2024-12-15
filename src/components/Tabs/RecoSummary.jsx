"use client";
import React, { useEffect, useState } from 'react'
import { Drawer } from 'vaul';
import { MoveUpRight } from 'lucide-react'
import { Button } from '../ui/button'
import { Skeleton } from '../ui/skeleton';

const RecoSummary = ({ paper, id }) => {

    const [ktcData, setKtcData] = useState(null);
    const [currentConceptExp, setCurrentConceptExp] = useState("");
    const [explanationLoading, setExplanationLoading] = useState(false);

    const fetchPaperKTC = async () => {
        try {
            const response = await fetch(`https://cleverank.adnan-qasim.me/papers/get-paper-KTC/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Failed to fetch paper KTC");
            }

            const data = await response.json();
            console.log(data);
            setKtcData(data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchPaperKTC();
    }, []);

    const fetchConceptExplanation = async (concept) => {
        setExplanationLoading(true);
        try {
            const response = await fetch(`https://cleverank.adnan-qasim.me/papers/get-concepts-explanation/${concept}?academic_level=undergraduate`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Failed to fetch concept explanation");
            }

            const data = await response.json();
            console.log(data);
            setCurrentConceptExp(data);
            setExplanationLoading(false);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="flex flex-col space-y-3 w-full">
            <div className="text-center mb-3 my-5">
                <div className="font-bold text-2xl text-gray-800">{paper.paper_title}</div>
                <div className="text-sm text-gray-500">
                    {paper.author.map((author, index) => (
                        <span key={index}>
                            {author.first_name} {author.last_name}
                            {index < paper.author.length - 1 && ", "}
                        </span>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-x-4">

                {/* Abstract Section */}
                <div className="bg-gray-100 p-4 rounded-md shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-700">Abstract</h3>
                    <p className="text-sm text-gray-600 mt-2 h-[50vh] overflow-y-auto">{paper.paper_abstract}</p>
                </div>
                {/* Primary Images */}
                <div className="bg-gray-100 p-4 rounded-md shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-700">Concepts</h3>
                    <div className="flex flex-wrap gap-2 mt-2 h-[50vh] overflow-y-auto">
                        {ktcData && ktcData?.concepts?.map((concept, index) => (
                            <Drawer.Root direction="right" key={index}>
                                <Drawer.Trigger className="relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-4 text-sm font-medium shadow-sm transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:hover:bg-[#1A1A19] dark:text-white" onClick={() => fetchConceptExplanation(concept)}>
                                    {concept} <MoveUpRight />
                                </Drawer.Trigger>
                                <Drawer.Portal>
                                    <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                                    <Drawer.Content
                                        className="right-2 top-2 bottom-2 fixed z-10 outline-none w-96 flex"
                                        style={{ '--initial-transform': 'calc(100% + 8px)' }}
                                    >
                                        <div className="bg-zinc-50 h-full w-full grow p-5 flex flex-col rounded-[16px]">
                                            <div className="max-w-md mx-auto">
                                                <Drawer.Title className="font-medium mb-2 text-zinc-900">{concept}</Drawer.Title>
                                                <Drawer.Description className="text-zinc-600 mb-2">
                                                    <div>
                                                        {explanationLoading ? (
                                                            <div className='space-y-1'>
                                                                <Skeleton className="h-6 w-[22rem]" />
                                                                <Skeleton className="h-6 w-[22rem]" />
                                                                <Skeleton className="h-6 w-[22rem]" />
                                                                <Skeleton className="h-6 w-[22rem]" />
                                                                <Skeleton className="h-6 w-[22rem]" />
                                                                <Skeleton className="h-6 w-[22rem]" />
                                                                <Skeleton className="h-6 w-1/2" />
                                                            </div>
                                                        ) : (
                                                            <p className='overflow-y-auto h-[90vh]'>{currentConceptExp.explanation}</p>
                                                        )}
                                                    </div>
                                                </Drawer.Description>
                                            </div>
                                        </div>
                                    </Drawer.Content>
                                </Drawer.Portal>
                            </Drawer.Root>
                        ))}
                    </div>
                </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 pt-4">Glossary</h3>
            <div className="flex flex-wrap gap-2 mt-2">
                {ktcData && ktcData.important_terms.map((concept, index) => (
                    <span key={index} className="bg-green-100 text-green-700 py-1 px-3 rounded-full text-xs">
                        {concept}
                    </span>
                ))}
            </div>
        </div>

    )
}

export default RecoSummary
