import Image from "next/image";
import icon1 from "public/img/icon1.jpg";

const TopContent = () => {
  return (
    <div>
      <div>
        <Image src={icon1} alt="icon" />
      </div>
      <h1>けい</h1>
      <div>
        <p>こんにちは！ここにテキストが入ります</p>
        <p></p>
        <p>
          SwitchとPCのゲームをたくさんやっているので、共通のゲームがあれば声かけてください！
        </p>
      </div>
    </div>
  );
};

export default TopContent;
