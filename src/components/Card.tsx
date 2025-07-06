import Image from 'next/image';
import React from 'react';

import CardProps from '../types//CardProps';

const Card: React.FC<CardProps> = ({ card, tags }) => (
  <div className="relative">
    <Image src={card.img} alt={card.title} className="rounded-2xl object-cover shadow-md" />
    <div className="pl-3">
      <div className="absolute bottom-9 rounded-lg bg-white bg-opacity-80 px-[6px] py-1">
        <p className="text-xs font-semibold">{card.title}</p>
      </div>
      <div className="absolute bottom-2">
        <ul className="flex gap-1">
          {card.game_platforms.map((platform, platformIndex) => {
            const platformTag = tags.find(tag => tag.g_platform === platform);
            const tagColor = platformTag ? platformTag.color : 'bg-gray-100 bg-opacity-90';
            return (
              <li key={platformIndex} className={`rounded-xl px-2 py-[3px] ${tagColor}`}>
                <p className="text-xs font-medium">{platform}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  </div>
);

export default Card;
