import { useEffect, useState } from 'react'
import { useLocation } from 'shared/hooks/useLocation'
import bmwSedanImg from 'shared/images/bmw-sedan.png'
import bmwCarImg from 'shared/images/bmw.png'
import { Dot } from './dot/Dot'
import s from './home.module.scss'

export const Home = () => {
	const [isTouring, setIsTouring] = useState(true)

	const location = useLocation('/')
	useEffect(() => {
		console.log(location)
	}, [])
	return (
		<section role='car_info' className={s.bmw_info}>
			<div className='container'>
				<article className={`container ${s.bmw_info_wrapper}`}>
					<div className={s.bmw_info_wrapper_width}>
						<h1 className={s.title}>
							<span className='text-blue'>Always</span> <span>Forward</span>{' '}
						</h1>

						<div>
							<div className={s.bmw_series_three}>
								<p>An iconic sports touring born to be driven.</p>
								<p>The new BMW series 3.</p>
							</div>

							<div className={s.buttons}>
								<button
									onClick={() => setIsTouring(true)}
									className={isTouring ? s.active : ''}
								>
									TOURING
								</button>
								<button
									onClick={() => setIsTouring(false)}
									className={!isTouring ? s.active : ''}
								>
									SEDAN
								</button>
							</div>
						</div>
					</div>

					<div className={s.car_info_img}>
						<div className={s.car_info_wrapper}>
							<img
								src={isTouring ? bmwCarImg : bmwSedanImg}
								alt='car bmw'
								className={s.car_img}
							/>
						</div>

						<div className={`${s.dots}`}>
							<Dot content='382 HORSEPOWER' pos='left' />
							<Dot content='382 HORSEPOWER' pos='top' />
							<Dot content='382 HORSEPOWER' pos='right' />
							<Dot content='382 HORSEPOWER' pos='bottom' />
						</div>
					</div>
				</article>
			</div>
		</section>
	)
}
