import TitleSubTitle from "../TitleSubTitle";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

const ScheduleEasy = () => {
  const cardData2 = [
    {
      title: "Personalized Recommendations",
      description:
        "Discover research tailored to your interests and career goals. Our AI ensures you stay updated with the most relevant and impactful content.",
      imgSrc: "/LandingPageIcon/personalized_recommendation.png",
      imgAlt: "Easy embeds",
    },
    {
      title: "Interactive Learning",
      description:
        "Engage with research using tools like concept breakdowns, quizzes, and AI-powered chats that simplify complex topics for better understanding.",
      imgSrc: "/LandingPageIcon/Interactive_Learning.png",
      imgAlt: "Easy embeds",
    },
    {
      title: "Track Your Progress",
      description:
        "Monitor your learning journey with real-time assessments and progress reports to continuously improve your expertise.",
      imgSrc: "/LandingPageIcon/Progress.png",
      imgAlt: "Easy embeds",
    },
    {
      title: "Earn While You Learn",
      description:
        "Explore research papers with bounties and earn rewards as you complete assignments and build knowledge in your field.",
      imgSrc: "/LandingPageIcon/you_learn.png",
      imgAlt: "Easy embeds",
    },
    {
      title: "Build Your Profile",
      description:
        "Showcase your research achievements and stand out to employers, academic advisors, and institutions for scholarships and job opportunities.",
      imgSrc: "/LandingPageIcon/Profile.png",
      imgAlt: "Easy embeds",
    },
    {
      title: "Global Leaderboard",
      description:
        "Earn Karma points and badges to compete with a global community of learners and establish yourself as a top researcher.",
      imgSrc: "/LandingPageIcon/Leaderboard.png",
      imgAlt: "Easy embeds",
    },
    {
      title: "Explore Career Opportunities",
      description:
        "Unlock scholarships, PhD placements, and career advancements by validating your expertise through your Cleverank profile.",
      imgSrc: "/LandingPageIcon/Career.png",
      imgAlt: "Easy embeds",
    },
    {
      title: "Stay Ahead of Trends",
      description:
        "Access the latest research and emerging trends in your field to stay ahead and continuously grow in your career.",
      imgSrc: "/LandingPageIcon/trends.png",
      imgAlt: "Easy embeds",
    },
  ];

  const cardData = [
    {
      id: "01",
      title: "Personalized Research Recommendations",
      description:
        "Our AI curates research papers tailored to your academic interests and career goals, saving you time on endless searches.",
    },
    {
      id: "02",
      title: "Engage and Learn Efficiently",
      description:
        "Break down complex concepts, interact with papers, and reinforce your learning with quizzes and assessments.",
    },
    {
      id: "03",
      title: "Earn and Unlock Opportunities",
      description:
        "Complete research tasks, earn Karma points, and unlock rewards like bounties, badges, and career advancement opportunities.",
    },
  ];
  return (
    <div className="py-20 flex flex-col gap-10 items-center">
      <TitleSubTitle
        title="With Cleverank, Learning is Seamless
"
        subtitle="Effortless discovery of research, interactive learning, and career-boosting rewards—designed for students, researchers, and professionals alike.
"
      />
      <div className="flex w-full gap-10">
        {cardData.map((card) => (
          <Card key={card.id} className="w-full h-[26.5rem]">
            <CardHeader className="flex gap-4">
              <CardDescription className="bg-slate-200 w-8 rounded-md text-center py-1">
                {card.id}
              </CardDescription>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription className="text-lg ">
                {card.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
      <TitleSubTitle
        title="Cleverank simplifies the research process for you"
        subtitle="Effortlessly explore research papers, learn interactively, and showcase your expertise with advanced AI-powered tools."
      />
      <div className=" grid grid-cols-2  sm:grid-cols-4 md:w-max  lg:grid-cols-4 gap-4">
        {cardData2.map((card, index) => (
          <Card
            key={index}
            className="perspective-1000 h-40 w-full max-w-[180px]  "
          >
            <div
              className="shadow-fade group relative grid h-full w-full overflow-clip rounded-2xl bg-white 
                [&>*]:[grid-area:1/1] "
            >
              {/* Front Side */}
              <div
                className="flex h-full w-full flex-col items-center p-4 transition-opacity duration-300 
                  group-hover:opacity-0 group-focus-visible:opacity-0"
              >
                <div className="flex h-20 items-center justify-center">
                  <div className="shadow-fade relative grid h-[64px] w-[64px] shrink-0 place-items-center rounded-lg bg-neutral-100 text-gray-700">
                    <div className="absolute left-2 top-2 h-1 w-1 rounded-full bg-gray-300"></div>
                    <div className="absolute right-2 top-2 h-1 w-1 rounded-full bg-gray-300"></div>
                    <div className="absolute bottom-2 left-2 h-1 w-1 rounded-full bg-gray-300"></div>
                    <div className="absolute bottom-2 right-2 h-1 w-1 rounded-full bg-gray-300"></div>
                    <img
                      alt={card.imgAlt}
                      loading="lazy"
                      width="24"
                      height="24"
                      decoding="async"
                      data-nimg="1"
                      src={card.imgSrc}
                    />
                  </div>
                </div>
                <div className="flex flex-grow items-center">
                  <h1 className="text-center text-xs font-semibold leading-tight">
                    {card.title}
                  </h1>
                </div>
              </div>

              {/* Back Side */}
              <div
                className="relative flex h-full w-full scale-95 select-none flex-col items-center justify-center rounded-xl p-2 
                  opacity-0 transition-[opacity,transform] duration-300 
                  group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100 
                  group-focus-visible:pointer-events-auto group-focus-visible:scale-100 group-focus-visible:opacity-100"
              >
                <div className="absolute left-3 top-3 h-1.5 w-1.5 rounded-full bg-gray-200"></div>
                <div className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-gray-200"></div>
                <div className="absolute bottom-3 left-3 h-1.5 w-1.5 rounded-full bg-gray-200"></div>
                <div className="absolute bottom-3 right-3 h-1.5 w-1.5 rounded-full bg-gray-200"></div>

                <p className="mb-2 text-center text-xs font-semibold leading-tight ">
                  {card.title}
                </p>
                <p className="text-center text-xs font-medium text-gray-700">
                  {card.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ScheduleEasy;
