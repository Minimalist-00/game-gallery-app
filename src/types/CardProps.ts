interface CardProps {
  card: {
    title: string;
    game_platforms: string[];
    img: string; // 画像のパスなど
  };
  tags: {
    g_platform: string;
    color: string;
  }[];
}

export default CardProps;