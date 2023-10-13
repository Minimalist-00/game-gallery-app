import { cards } from '../db/cards';
import { tags } from '../db/tags';

const Gallery = () => {

  return (
    <div>
      <div className="grid grid-cols-2 gap-5">
        {cards.map((card, index) => (
          <div key={index} className="relative">
            <img src={card.img} alt={card.title} className="w-full object-cover rounded-2xl shadow-md" />
            <div className="pl-3">
              <div className="absolute bottom-9 bg-white bg-opacity-80 rounded-md py-1 px-[6px]">
                <p className="text-xs font-semibold">{card.title}</p>
              </div>
              <div className="absolute bottom-2">
                <ul className="flex gap-1">
                  {card.game_platforms.map((platform, platformIndex) => {
                    const platformTag = tags.find(tag => tag.g_platform === platform);
                    if (platformTag) {
                      return (
                        <li key={platformIndex} className={`rounded-xl py-[3px] px-2 ${platformTag.color} bg-opacity-90`}>
                          <p className="text-xs font-medium">
                            {platform}
                          </p>
                        </li>
                      );
                    } else {
                      return (
                        <li key={platformIndex} className="bg-gray-100 bg-opacity-90 rounded-xl py-[3px] px-2">
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
