import Image from 'next/image'
import Link from 'next/link'
import GalleryLogo from '../../public/images/gallery-logo.svg'
import GithubLogo from '../../public/images/github-logo.svg'
import LinkedinLogo from '../../public/images/linkedin-logo.svg'

const SocialMedia = () => {
  return (
    <div className="inline-flex space-x-4">
      <Link
        href="https://github.com/wintory"
        target="_blank"
        rel="noopener noreferrer"
        className="tooltip tooltip-bottom tooltip-warning"
        data-tip="Github"
      >
        <Image
          src={GithubLogo}
          alt="Github Logo"
          className="cursor-pointer"
          width={36}
          height={36}
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/thanapol-sakullertphasuk-399893134/"
        target="_blank"
        rel="noopener noreferrer"
        className="tooltip tooltip-bottom tooltip-warning"
        data-tip="Linkedin"
      >
        <Image
          src={LinkedinLogo}
          alt="Linkedin Logo"
          className="cursor-pointer"
          width={36}
          height={36}
        />
      </Link>
      <Link
        href="https://500px.com/p/thanapols?view=photos"
        target="_blank"
        rel="noopener noreferrer"
        className="tooltip tooltip-bottom tooltip-warning"
        data-tip="Gallery"
      >
        <Image
          src={GalleryLogo}
          alt="Gallerry Logo"
          className="cursor-pointer"
          width={38}
          height={38}
        />
      </Link>
    </div>
  )
}

export default SocialMedia
