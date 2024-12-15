import dynamic from 'next/dynamic';
import React from 'react'

const RecoPDF = ({ paper }) => {
    const PdfRender = dynamic(() => import("@/components/pdfView/PdfRender"), {
        ssr: false,
    });
    return (
        <div className="w-full">
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
            <PdfRender file_url={paper.file_url} />
        </div>
    )
}

export default RecoPDF
