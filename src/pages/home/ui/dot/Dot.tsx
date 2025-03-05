import { TDot } from 'pages/home/model'
import { useState } from 'react'
import s from './dot.module.scss'

export const Dot = ({ content, pos }: TDot) => {
	const [isActive, setIsActive] = useState(false)

	const openInfo = () => {
		setIsActive((prev) => !prev)
	}

	return (
		<div
			className={`${s.dot} ${isActive ? s.dot_active : ''} ${s[pos]}`}
			onClick={openInfo}
		>
			<div className={`${s.circle} ${isActive ? s.active : ''}`}></div>

			<p className={`${s.dot_content} ${isActive ? s.active : ''}`}>
				{content}
			</p>
		</div>
	)
}
