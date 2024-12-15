import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button';

const RecoQuiz = ({ paper, id }) => {
    const [quizQuestions, setQuizQuestions] = useState([]);
    const [userAnswers, setUserAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);

    const handleGetQuiz = async () => {
        try {
            const response = await fetch(`https://cleverank.adnan-qasim.me/research-paper/get-quiz/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            if (!response.ok) {
                throw new Error("Failed to fetch quiz");
            }
            const data = await response.json();
            console.log(data);
            setQuizQuestions(data);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        handleGetQuiz();
    }, []);

    // Handler for quiz option changes
    const handleOptionChange = (questionIndex, selectedOption) => {
        setUserAnswers(prev => ({ ...prev, [questionIndex]: selectedOption }));
    }

    // Handler for quiz submission
    const handleSubmitQuiz = (e) => {
        e.preventDefault();
        let calculatedScore = 0;
        quizQuestions.forEach((q, index) => {
            if (userAnswers[index] === q.answer) {
                calculatedScore += 1;
            }
        });
        setScore(calculatedScore);
        setShowResults(true);
    }

    // Determine if all questions have been answered
    const allAnswered = quizQuestions.length > 0 && quizQuestions.every((_, index) => userAnswers[index]);

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
                    <form className="w-full" onSubmit={handleSubmitQuiz}>
                        {quizQuestions.map((q, index) => (
                            <div key={index} className="bg-gray-100 p-4 rounded-md shadow-sm mb-6">
                                <p className="font-medium">{index + 1}. {q.question}</p>
                                <div className="mt-2">
                                    {q.options.map((option, optIndex) => (
                                        <label key={optIndex} className="block text-gray-800">
                                            <input
                                                type="radio"
                                                name={`question_${index}`}
                                                value={option}
                                                onChange={(e) => handleOptionChange(index, e.target.value)}
                                                className="mr-2 size-3"
                                                required
                                            />
                                            {option}
                                        </label>
                                    ))}
                                </div>
                                {showResults && (
                                    <p className={userAnswers[index] === q.answer ? "text-green-600 mt-2" : "text-red-600 mt-2"}>
                                        {userAnswers[index] === q.answer ? "✅ Correct" : `❌ Incorrect. Correct answer: ${q.answer}`}
                                    </p>
                                )}
                            </div>
                        ))}
                        {!showResults ? (
                            <Button type="submit" disabled={!allAnswered} className="mt-1">
                                Submit Quiz
                            </Button>
                        ) : (
                            <div className="mt-4 text-xl font-bold text-center">
                                You scored {score} out of {quizQuestions.length}
                            </div>
                        )}
                    </form>
                )}
            </div>
        </>
    )
}

export default RecoQuiz
