import bmwCarImg from 'shared/images/bmw.jpg'
import { Dot } from './dot/Dot'
import s from './home.module.scss'

export const Home = () => {
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
								<button className={s.active}>TOURING</button>
								<button>SEDAN</button>
							</div>
						</div>
					</div>

					<div className={s.car_info_img}>
						<div className={s.car_info_wrapper}>
							<img src={bmwCarImg} alt='car bmw' className={s.car_img} />
						</div>

						<div className={`${s.dots}`}>
							<Dot content='382 HORSEPOWER' pos='left' />
							<Dot content='382 HORSEPOWER' pos='top' />
							<Dot content='382 HORSEPOWER' pos='right' />
							<Dot content='382 HORSEPOWER' pos='bottom' />

							{/* <div className={`${s.dot} ${s.dot_left}`}>
								<div className={s.circle}></div>

								<p className={`${s.dot_content}`}>382 HORSEPOWER</p>
								<p className={s.dot_content_close}>x</p>
							</div>
							<div className={`${s.dot}  ${s.dot_top}`}>
								<div className={s.circle}></div>

								<p className={`${s.dot_content}`}>382 HORSEPOWER</p>
								<p className={s.dot_content_close}>x</p>
							</div>
							<div className={`${s.dot}  ${s.dot_right}`}>
								<div className={s.circle}></div>

								<p className={`${s.dot_content}`}>382 HORSEPOWER</p>
								<p className={s.dot_content_close}>x</p>
							</div>
							<div className={`${s.dot}  ${s.dot_bottom}`}>
								<div className={s.circle}></div>

								<p className={`${s.dot_content}`}>382 HORSEPOWER</p>
								<p className={s.dot_content_close}>x</p>
							</div> */}
						</div>
					</div>
				</article>
			</div>
		</section>
	)
}
