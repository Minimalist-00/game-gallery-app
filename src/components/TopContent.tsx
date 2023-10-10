import Image from 'next/image'

import icon from '/public/img/icon/icon3.jpg'

const TopContent = () => {
  return (
    <div className="mb-8 mt-10">
      <Image
        src={icon}
        alt="icon"
        className="mx-auto h-[120px] w-auto rounded-full"
      />
      <div className="text-center">
        <h1 className="pb-4 pt-3 text-2xl font-bold">けい</h1>
        <div className="rounded-xl bg-[#F6F6F6] px-3 py-2 text-sm font-medium drop-shadow">
          <p>
            こんにちは！ここにテキストが入ります
            <br />
            <br />
            SwitchとPCのゲームをたくさんやっているので、共通のゲームがあれば声かけてください！
          </p>
        </div>
      </div>
    </div>
  )
}

export default TopContent
