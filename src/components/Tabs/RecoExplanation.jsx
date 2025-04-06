import React, { useState } from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from '../ui/button';
import { Skeleton } from '../ui/skeleton';

const RecoExplanation = ({ paper, id }) => {
    const [paperExplanations, setPaperExplanations] = useState(null);
    const [explanationLoading, setExplanationLoading] = useState(false);
    const [academicLevel, setAcademicLevel] = useState("");

    const handleSearchWithLevel = (value) => {
        console.log(value);
        setAcademicLevel(value);
        fetchPaperExplanations();
    }

    const fetchPaperExplanations = async () => {
        setExplanationLoading(true);
        try {
            const response = await fetch(`https://cleverank.cumulate.live/papers/get-detailed-explanation/${id}?academic_level=${academicLevel}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Failed to fetch paper explanations");
            }

            const data = await response.json();
            setExplanationLoading(false);
            console.log(data);

            setPaperExplanations(data);
        } catch (err) {
            console.error("Error fetching paper explanations:", err);
            setExplanationLoading(false);
        }
    };

    return (
        <><div className="flex items-center w-full justify-between">
            <h1 className="font-semibold tracking-tight text-pretty ">Explanations according to your academic level:</h1>
            <Select defaultValue={academicLevel} onValueChange={handleSearchWithLevel}>
                <SelectTrigger className="w-96">
                    <SelectValue placeholder="Select an academic level" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Academic Level</SelectLabel>
                        <SelectItem value="High School">High School</SelectItem>
                        <SelectItem value="Undergraduate">Undergraduate</SelectItem>
                        <SelectItem value="Postgraduate">Postgraduate</SelectItem>
                        <SelectItem value="PhD">PhD</SelectItem>
                        <SelectItem value="Associate Degree">Associate Degree</SelectItem>
                        <SelectItem value="Vocational Training">Vocational Training</SelectItem>
                        <SelectItem value="Diploma">Diploma</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
            <div className="text-center mb-3 my-10">
                <div className="font-bold text-2xl text-gray-800">{paper.paper_title}</div>
                <div className="text-sm text-gray-500">
                    {paper.author.map((author, index) => <span key={index}>
                        {author.first_name} {author.last_name}
                        {index < paper.author.length - 1 && ", "}
                    </span>)}
                </div>
            </div>
            {!paperExplanations && !explanationLoading && <div className="flex items-center justify-center h-96">
                <Button onClick={() => handleSearchWithLevel("Undergraduate")}>
                    Generate Explanations
                </Button>
            </div>}
            <div className="mt-4">
                {explanationLoading && <div className="space-y-4">
                    <Skeleton className={"h-48 w-full"} />
                    <Skeleton className={"h-48 w-full"} />
                    <Skeleton className={"h-48 w-full"} />
                </div>}
                {paperExplanations && paperExplanations.paper_abstract && <div className="p-4 rounded-md shadow-sm mb-6">
                    <h3 className="text-xl font-semibold text-gray-800">Abstract</h3>
                    <p className="text-sm text-gray-600 mt-2">{paperExplanations.paper_abstract}</p>
                </div>}
                {paperExplanations && paperExplanations.detailed_explanation.map((explanation, index) => <div key={index} className="m-4 rounded-md shadow-sm mb-6">
                    <h3 className="text-lg font-semibold text-gray-700">{explanation.topic_title}</h3>
                    <p className="text-sm text-gray-600 mt-2 ml-4 flex">{explanation.topic_content}</p>
                </div>)}
            </div></>
    )
}

export default RecoExplanation
