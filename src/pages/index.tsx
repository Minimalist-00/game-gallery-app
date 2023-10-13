import Footer from '@/components/Footer'
import Gallery from '@/components/Gallery'
import TopContent from '@/components/TopContent'

export default function Home() {
  return (
    <>
      <main className="mx-auto max-w-[90%] text-[#333] pointer-events-none">
        <TopContent />
        <Gallery />
        <Footer />
      </main>
    </>
  )
}
