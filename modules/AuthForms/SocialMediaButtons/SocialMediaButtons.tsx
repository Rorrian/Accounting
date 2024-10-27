import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { Kind, Size } from '@/types/components/button/enums'
import { Button } from '@/components/UI/Button/Button'
import GoogleSvg from "@/public/images/icons/google.svg"
import GithubSvg from "@/public/images/icons/github.svg"

import { socialMediaButtonsStyles } from './SocialMediaButtons.css'

// FIXME: Перенести в папку компоненты ?
export function SocialMediaButtons() {
	const router = useRouter()

	return (
		<div className={socialMediaButtonsStyles.wrapper}>
			<Button
				className={socialMediaButtonsStyles.button}
				kind={Kind.Secondary}
				size={Size.Small}
				onClick={() => router.push('/auth/google')}
			>
				<GoogleSvg className={socialMediaButtonsStyles.icon} />
			</Button>
			
			<Button
				className={socialMediaButtonsStyles.button}
				kind={Kind.Secondary}
				size={Size.Small}
				onClick={() => router.push('/auth/github')}
			>
				<GithubSvg className={socialMediaButtonsStyles.icon} />
			</Button>
		</div>
	)
}
