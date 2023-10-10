const Gallery = () => {
  //todo SwitchとPCでのタグを作成する
  //todo 画像のインポート

  const cards = [
    {
      title: 'タイトル',
      game_platforms: ['Switch', 'PC'],
      img: 'img',
    },
  ]

  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="bg-stardew-valley h-64 w-64 bg-cover bg-center"></div>
      </div>
    </div>
  )
}

export default Gallery
