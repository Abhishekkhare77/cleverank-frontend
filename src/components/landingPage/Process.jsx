import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const Process = () => {
  const cardData = [
    {
      title: "Expenses that submit themselves",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam officiis autem veritatis tempora dolorem quis! ",
      imgSrc:
        "https://www.iconbolt.com/iconsets/remix-icon-line/bank-card-2.svg",
      imgAlt: "logo",
    },
    {
      title: "Expenses that submit themselves",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam officiis autem veritatis tempora dolorem quis! ",
      imgSrc:
        "https://www.iconbolt.com/iconsets/remix-icon-line/bank-card-2.svg",
      imgAlt: "logo",
    },
    {
      title: "Expenses that submit themselves",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam officiis autem veritatis tempora dolorem quis! ",
      imgSrc:
        "https://www.iconbolt.com/iconsets/remix-icon-line/bank-card-2.svg",
      imgAlt: "logo",
    },
    {
      title: "Expenses that submit themselves",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam officiis autem veritatis tempora dolorem quis! ",
      imgSrc:
        "https://www.iconbolt.com/iconsets/remix-icon-line/bank-card-2.svg",
      imgAlt: "logo",
    },
    {
      title: "Expenses that submit themselves",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam officiis autem veritatis tempora dolorem quis! ",
      imgSrc:
        "https://www.iconbolt.com/iconsets/remix-icon-line/bank-card-2.svg",
      imgAlt: "logo",
    },
    {
      title: "Expenses that submit themselves",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam officiis autem veritatis tempora dolorem quis! ",
      imgSrc:
        "https://www.iconbolt.com/iconsets/remix-icon-line/bank-card-2.svg",
      imgAlt: "logo",
    },
  ];
  return (
    <div>
      <Card className="py-5 flex justify-between   bg-gray-100">
        <CardHeader className="flex flex-col gap-5 w-1/2 mt-6">
          <CardTitle className="text-6xl">
            Master Research Effortlessly with Cleverank
          </CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            nam est dolores labore expedita suscipit, tenetur reiciendis
            inventore totam a iusto possimus voluptate quam, facilis numquam
            eius. Cupiditate incidunt debitis iure blanditiis, exercitationem
            reprehenderit quaerat ea, earum distinctio dicta necessitatibus?
          </CardDescription>
        </CardHeader>
        <CardContent className="w-1/2 flex justify-end  mt-6">
          <img
            src="https://i.ibb.co/P1DwZpN/Screenshot-2024-12-10-152128.png"
            alt="img"
            className="object-cover h-96  "
          />
        </CardContent>
      </Card>
      <div className=" grid grid-cols-2  sm:grid-cols-3 md:w-max  lg:grid-cols-3 gap-4 mt-8 ">
        {cardData.map((card, index) => (
          <Card key={index} className="w-[22.66rem] bg-gray-100">
            <CardHeader>
              <CardTitle className="text-lg flex justify-between">
                <span>
                  {card.title.split(" ").slice(0, 3).join(" ")} <br />
                  {card.title.split(" ").slice(3).join(" ")}
                </span>
                <div className="h-10 w-10">
                  <img src={card.imgSrc} alt={card.imgAlt} />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-[#898989] mt-14">
              <p>{card.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="h-64 mt-20">
        <img
          src="https://cal.com/_next/image?url=%2Fsquares-footer.png&w=1080&q=100"
          alt="img"
          className="object-cover h-[15.8rem] w-full"
        />
      </Card>
    </div>
  );
};

export default Process;
