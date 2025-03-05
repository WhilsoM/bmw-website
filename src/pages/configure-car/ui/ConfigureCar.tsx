import { useLocation } from 'shared/hooks/useLocation'
import { ConfigureBlock } from './configure-block/ConfigureBlock'
import s from './configure-car.module.scss'

export const ConfigureCar = () => {
	const location = useLocation('/configure-car')

	return (
		<section className={s.configure_car} role='configure-car page'>
			<div className='container h-full relative'>
				<ConfigureBlock
					text='Номер машины'
					button_text_one='М976ММ'
					button_text_two='А777АА'
					position='number_car'
				/>
				<ConfigureBlock
					text='Цвет машины'
					button_text_one='синий'
					button_text_two='черный'
					position=''
				/>
				<ConfigureBlock
					text='Колеса'
					button_text_one='Uranus'
					button_text_two='Flash'
					position='wheel'
				/>
			</div>
		</section>
	)
}
