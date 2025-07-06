import Image from 'next/image'
import Link from 'next/link'

import twitter_logo from '/public/img/svg/Twitter.svg'

const Footer = () => {
  return (
    <div className="mx-auto pb-6 pt-14 text-center">
      <Link href="https://twitter.com/donotpeak_00">
        <Image src={twitter_logo} alt="twitter logo" className="mx-auto pb-2" />
      </Link>
      <p>&copy; 2023 All rights reserved<br />Developed by <Link href="https://twitter.com/donotpeak_00">@DoNotPeak_00</Link>
      </p>
    </div>
  )
}

export default Footer