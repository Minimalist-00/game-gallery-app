import Footer from '@/components/Footer'
import Gallery from '@/components/Gallery'
import TopContent from '@/components/TopContent'
import AuthStatus from '@/components/auth/AuthStatus'

export default function Home() {
  return (
    <main className="mx-auto max-w-[85%] text-[#333]">
      <div className="flex justify-end p-4">
        <AuthStatus />
      </div>
      <TopContent />
      <Gallery />
      <Footer />
    </main>
  )
} 