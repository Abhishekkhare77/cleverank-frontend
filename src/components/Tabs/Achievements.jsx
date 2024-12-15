import Image from "next/image";

const Achievements = ({ badges, tracks, titles }) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-lg font-semibold">Titles</h2>
        <div className="flex gap-4 overflow-x-scroll">
          {titles.map((title, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <Image
                src={title.title_image_link || "/default-title.png"}
                alt={title.title_name}
                width={180}
                height={180}
                className="rounded-lg"
              />
              {/* <span className="text-sm">{title.title_name}</span> */}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Tracks</h2>
        <div className="flex gap-4 overflow-x-scroll">
          {tracks.map((track, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <Image
                src={track.track_image_link || "/default-track.png"}
                alt={track.track_title}
                width={180}
                height={180}
                className="rounded-lg"
              />
              {/* <span className="text-sm">{track.track_title}</span> */}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Badges</h2>
        <div className="flex gap-4 overflow-x-scroll">
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <Image
                src={badge.badge_image_link || "/default-badge.png"}
                alt={badge.badge_title}
                width={180}
                height={180}
                className="rounded-lg"
              />
              {/* <span className="text-sm">{badge.badge_title}</span> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
