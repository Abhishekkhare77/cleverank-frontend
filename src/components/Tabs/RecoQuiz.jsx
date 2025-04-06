import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';

const RecoQuiz = ({ paper, id }) => {
    const [quizQuestions, setQuizQuestions] = useState([]);
    const [userAnswers, setUserAnswers] = useState({});
    const [results, setResults] = useState({});
    const [score, setScore] = useState(0);

    const handleGetQuiz = async () => {
        try {
            const response = await fetch(`https://cleverank.cumulate.live/research-paper/get-quiz/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            if (!response.ok) {
                throw new Error("Failed to fetch quiz");
            }
            const data = await response.json();
            setQuizQuestions(data);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        handleGetQuiz();
    }, []);

    const handleOptionChange = (questionIndex, selectedOption) => {
        setUserAnswers(prev => ({ ...prev, [questionIndex]: selectedOption }));
        setResults(prev => ({
            ...prev,
            [questionIndex]: selectedOption === quizQuestions[questionIndex].answer
        }));
        if (selectedOption === quizQuestions[questionIndex].answer) {
            setScore(prev => prev + 1);
        } else {
            setScore(prev => prev > 0 ? prev - 1 : 0);
        }
    }

    return (
        <>
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
            <div className="flex flex-col items-center justify-center w-full">
                {quizQuestions.length === 0 ? (
                    <p className="text-gray-500">No quiz available for this paper.</p>
                ) : (
                    <form className="w-full">
                        {quizQuestions.map((q, index) => (
                            <div key={index} className="bg-white p-4 rounded-md border mb-3">
                                <p className="font-medium">{index + 1}. {q.question}</p>
                                <div className="mt-2">
                                    {q.options.map((option, optIndex) => (
                                        <label key={optIndex} className="block text-gray-800">
                                            <input
                                                type="radio"
                                                name={`question_${index}`}
                                                value={option}
                                                onChange={() => handleOptionChange(index, option)}
                                                className="mr-2"
                                            />
                                            {option}
                                        </label>
                                    ))}
                                </div>
                                {userAnswers[index] && (
                                    <p className={results[index] ? "text-green-600 mt-2" : "text-red-600 mt-2"}>
                                        {results[index] ? "✅ Correct" : `❌ Incorrect. Correct answer: ${q.answer}`}
                                    </p>
                                )}
                            </div>
                        ))}
                        <div className="mt-4 text-xl font-bold text-center">
                            Your score: {score} / {quizQuestions.length}
                        </div>
                    </form>
                )}
            </div>
        </>
    )
}

export default RecoQuiz;
