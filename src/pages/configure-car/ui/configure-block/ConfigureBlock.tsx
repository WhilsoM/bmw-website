import { TConfigureBlock } from 'pages/configure-car/model'
import { useState } from 'react'
import s from './configure-block.module.scss'

export const ConfigureBlock = ({
	text,
	button_text_one,
	button_text_two,
	position,
}: TConfigureBlock) => {
	const [isFirst, setIsFirst] = useState(true)

	const changeIsFirst = (first: string) => {
		if (first === 'first') return setIsFirst(true)
		setIsFirst(false)
	}
	const conditionPosition =
		position === 'wheel'
			? s.wheel
			: position === 'number_car'
			? s.number_car
			: s.color_car
	console.log(conditionPosition)

	return (
		<div className={`${s.change_configure_block} ${conditionPosition}`}>
			<div>
				<p>{text}</p>
			</div>

			<div className={s.change_configure_block_wrapper}>
				<button
					onClick={() => changeIsFirst('first')}
					className={isFirst ? s.active : ''}
				>
					{button_text_one}
				</button>
				<button
					onClick={() => changeIsFirst('second')}
					className={!isFirst ? s.active : ''}
				>
					{button_text_two}
				</button>
			</div>
		</div>
	)
}
