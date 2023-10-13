import Image from 'next/image'
import Link from 'next/link'
import twitter_logo from '/public/img/svg/Twitter.svg'

const Footer = () => {
  return (
    <div className="pt-14 pb-6 text-center mx-auto">
      <Link href="https://twitter.com/donotpeak_00">
        <Image src={twitter_logo} alt="twitter logo" className="mx-auto pb-2" />
      </Link>
      <p>&copy; 2023 All rights reserved<br />Developed by <Link href="https://twitter.com/donotpeak_00">@DoNotPeak_00</Link>
      </p>
    </div>
  )
}

export default Footer