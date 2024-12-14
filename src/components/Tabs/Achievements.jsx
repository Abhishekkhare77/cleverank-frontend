import Image from "next/image";
import React from "react";

const Achievements = () => {
  return (
    <div className=" px-4">
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
        <div className="flex gap-2 h-16 w-16">
          <Image
            src="https://minio.catax.me/clever-badges-bucket/titles-completed%2Fai-ethics-guardian%20(1).png"
            alt="Badges"
            height={100}
            width={100}
            quality={100}
            className="object-cover "
          />
          <Image
            src="https://minio.catax.me/clever-badges-bucket/titles-completed%2Fai-security-ninja.png"
            alt="Badges"
            height={100}
            width={100}
            quality={100}
            className="object-cover "
          />
        </div>
      </div>
      <div className="mt-3">
        <h1 className="text-lg font-semibold">Tracks</h1>
        <div className="flex gap-2 h-16 w-16">
          <Image
            src="https://minio.catax.me/clever-badges-bucket/tracks-badges-AI/ai-climate-change-track.png"
            alt="Badges"
            height={100}
            width={100}
            quality={100}
            className="object-cover "
          />
          <Image
            src="https://minio.catax.me/clever-badges-bucket/tracks-badges-AI/ai-data-privacy.png"
            alt="Badges"
            height={100}
            width={100}
            quality={100}
            className="object-cover "
          />
          <Image
            src="https://minio.catax.me/clever-badges-bucket/tracks-badges-AI/ai-education-track.png"
            alt="Badges"
            height={100}
            width={100}
            quality={100}
            className="object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default Achievements;
