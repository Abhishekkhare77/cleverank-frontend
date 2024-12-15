import InstitutionsQuestions from "./InstitutionsQuestions";
import StudentQuestions from "./StudentQuestions";

const Questions = () => {
  return (
    <div>
      <div className="w-full text-4xl font-semibold text-center my-16">
        Frequently Asked Questions (FAQ){" "}
      </div>
      <div className="flex gap-7 justify-center">
        <StudentQuestions />
        <InstitutionsQuestions />
      </div>
    </div>
  );
};

export default Questions;
