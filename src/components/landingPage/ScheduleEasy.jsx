import TitleSubTitle from "../TitleSubTitle";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

const ScheduleEasy = () => {
  const cardData2 = [
    {
      title: "Easy embeds",
      description: "Embed your booking page anywhere with just a few clicks.",
      imgSrc: "https://www.datocms-assets.com/77432/1729720402-whisper-api.svg",
      imgAlt: "Easy embeds",
    },
    {
      title: "Easy embeds",
      description: "Embed your booking page anywhere with just a few clicks.",
      imgSrc: "https://www.datocms-assets.com/77432/1729720402-whisper-api.svg",
      imgAlt: "Easy embeds",
    },
    {
      title: "Easy embeds",
      description: "Embed your booking page anywhere with just a few clicks.",
      imgSrc: "https://www.datocms-assets.com/77432/1729720402-whisper-api.svg",
      imgAlt: "Easy embeds",
    },
    {
      title: "Easy embeds",
      description: "Embed your booking page anywhere with just a few clicks.",
      imgSrc: "https://www.datocms-assets.com/77432/1729720402-whisper-api.svg",
      imgAlt: "Easy embeds",
    },
    {
      title: "Easy embeds",
      description: "Embed your booking page anywhere with just a few clicks.",
      imgSrc: "https://www.datocms-assets.com/77432/1729720402-whisper-api.svg",
      imgAlt: "Easy embeds",
    },
    {
      title: "Easy embeds",
      description: "Embed your booking page anywhere with just a few clicks.",
      imgSrc: "https://www.datocms-assets.com/77432/1729720402-whisper-api.svg",
      imgAlt: "Easy embeds",
    },
    {
      title: "Easy embeds",
      description: "Embed your booking page anywhere with just a few clicks.",
      imgSrc: "https://www.datocms-assets.com/77432/1729720402-whisper-api.svg",
      imgAlt: "Easy embeds",
    },
    {
      title: "Easy embeds",
      description: "Embed your booking page anywhere with just a few clicks.",
      imgSrc: "https://www.datocms-assets.com/77432/1729720402-whisper-api.svg",
      imgAlt: "Easy embeds",
    },
  ];

  const cardData = [
    {
      id: "01",
      title: "Connect your calendar",
      description:
        "We'll handle all the cross-referencing, so you don't have to worry about double bookings.",
    },
    {
      id: "02",
      title: "Set your availability",
      description:
        "Want to block off weekends? Set up any buffers? We make that easy.",
    },
    {
      id: "03",
      title: "Choose how to meet",
      description:
        "It could be a video chat, phone call, or a walk in the park!",
    },
  ];
  return (
    <div className="py-20 flex flex-col gap-10 items-center">
      <TitleSubTitle
        title="With us, scheduling is easy"
        subtitle="Effortless scheduling for individuals, powerful solutions for fast-growing modern companies."
      />
      <div className="flex w-full gap-10">
        {cardData.map((card) => (
          <Card key={card.id} className="w-full h-[26.5rem]">
            <CardHeader className="flex gap-4">
              <CardDescription className="bg-slate-200 w-6 rounded-md text-center">
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
        title="With us, scheduling is easy"
        subtitle="Effortless scheduling for individuals, powerful solutions for fast-growing modern companies."
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
                  <h1 className="text-center text-base font-semibold leading-tight">
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

                <p className="mb-2 text-center text-sm font-semibold leading-tight md:text-base">
                  {card.title}
                </p>
                <p className="text-center text-sm font-medium text-gray-700">
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
