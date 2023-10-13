import Image from 'next/image';
import React from 'react';
import CardProps from '../types//CardProps';

const Card: React.FC<CardProps> = ({ card, tags }) => (
  <div className="relative">
    <Image src={card.img} alt={card.title} className="object-cover rounded-2xl shadow-md" />
    <div className="pl-3">
      <div className="absolute bottom-9 bg-white bg-opacity-80 rounded-lg py-1 px-[6px]">
        <p className="text-xs font-semibold">{card.title}</p>
      </div>
      <div className="absolute bottom-2">
        <ul className="flex gap-1">
          {card.game_platforms.map((platform, platformIndex) => {
            const platformTag = tags.find(tag => tag.g_platform === platform);
            const tagColor = platformTag ? platformTag.color : 'bg-gray-100 bg-opacity-90';
            return (
              <li key={platformIndex} className={`rounded-xl py-[3px] px-2 ${tagColor}`}>
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
