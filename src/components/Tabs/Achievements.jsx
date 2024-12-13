import Image from "next/image";
import React from "react";

const Achievements = () => {
  return (
    <div className=" mt-8 ml-4">
      <div>
        <h1 className="text-lg font-semibold">Badges</h1>
        <div className="flex gap-2 h-16 w-16">
          <Image
            src="https://minio.catax.me/clever-badges-bucket/papers-completed/20-paper-completed.png"
            alt="Badges"
            height={100}
            width={100}
            quality={100}
            className="object-cover "
          />
          <Image
            src="https://minio.catax.me/clever-badges-bucket/papers-completed/20-paper-completed.png"
            alt="Badges"
            height={100}
            width={100}
            quality={100}
            className="object-cover "
          />
        </div>
      </div>
      <div className="mt-3">
        <h1 className="text-lg font-semibold">Titles</h1>
        <div className="flex gap-4 h-20 mt-2">
          <div className="h-16 w-16 border"></div>
          <div className="h-16 w-16 border"></div>
          <div className="h-16 w-16 border"></div>
        </div>
      </div>
      <div className="mt-3">
        <h1 className="text-lg font-semibold">Tracks</h1>
        <div className="flex gap-4 h-20 mt-2">
          <div className="h-16 w-16 border"></div>
          <div className="h-16 w-16 border"></div>
          <div className="h-16 w-16 border"></div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
