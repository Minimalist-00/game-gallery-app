import { cards } from '../db/cards';
import { tags } from '../db/tags';

const Gallery = () => {

  return (
    <div>
      <div className="grid grid-cols-2 gap-5">
        {cards.map((card, index) => (
          <div key={index} className="relative">
            <img src={card.img} alt={card.title} className="pointer-events-none w-full rounded-2xl object-cover shadow-md" />
            <div className="pl-3">
              <div className="absolute bottom-9 rounded-md bg-white bg-opacity-80 px-[6px] py-1">
                <p className="text-xs font-semibold">{card.title}</p>
              </div>
              <div className="absolute bottom-2">
                <ul className="flex gap-1">
                  {card.game_platforms.map((platform, platformIndex) => {
                    const platformTag = tags.find(tag => tag.g_platform === platform);
                    if (platformTag) {
                      return (
                        <li key={platformIndex} className={`rounded-xl px-2 py-[3px] ${platformTag.color} bg-opacity-90`}>
                          <p className="text-xs font-medium">
                            {platform}
                          </p>
                        </li>
                      );
                    } else {
                      return (
                        <li key={platformIndex} className="rounded-xl bg-gray-100 bg-opacity-90 px-2 py-[3px]">
                          <p className="text-xs font-medium">
                            {platform}
                          </p>
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery
