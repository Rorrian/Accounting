import { useRouter } from 'next/navigation'

import GithubSvg from '@/public/images/icons/github.svg'
import GoogleSvg from '@/public/images/icons/google.svg'
import { Button } from '@/src/shared/ui'
import { Kind, Size } from '@shared/ui/Button/types/enums'

import { socialMediaButtonsStyles } from './SocialMediaButtons.css'

// FIXME: Перенести в папку компоненты ?
export function SocialMediaButtons() {
  const router = useRouter()

  return (
    <div className={socialMediaButtonsStyles.wrapper}>
      <Button
        className={socialMediaButtonsStyles.button}
        kind={Kind.Tertiary}
        size={Size.Small}
        onClick={() => router.push('/auth/google')}
      >
        <GoogleSvg className={socialMediaButtonsStyles.icon} />
      </Button>

      <Button
        className={socialMediaButtonsStyles.button}
        kind={Kind.Tertiary}
        size={Size.Small}
        onClick={() => router.push('/auth/github')}
      >
        <GithubSvg className={socialMediaButtonsStyles.icon} />
      </Button>
    </div>
  )
}
