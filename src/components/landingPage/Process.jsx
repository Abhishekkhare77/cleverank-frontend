import { CardDescription, CardHeader, CardTitle } from "../ui/card";

const Process = () => {
  return (
    <div>
      <div className=" flex justify-between   bg-gray-100 rounded-lg shadow-md">
        <CardHeader className="flex flex-col gap-5 w-1/2 mt-6">
          <CardTitle className="text-6xl">
            Master Research Concepts with Cleverank
          </CardTitle>
          <CardDescription>
            <p>
              {" "}
              Cleverank takes the hard work out of finding the right research.
              With intelligent recommendations and personalized learning paths,
              you can focus on mastering concepts rather than spending
              hours searching.
            </p>
          </CardDescription>
        </CardHeader>
        <div className="w-1/2 flex justify-end mt-6">
          <img
            src="/cleverank-dasboard.png"
            alt="img"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Process;
