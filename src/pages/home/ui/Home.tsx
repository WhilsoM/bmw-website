import { Link } from 'react-router'
import bmwCarImg from 'shared/images/bmw.jpg'
import s from './home.module.scss'

export const Home = () => {
	return (
		<section role='car_info' className={s.bmw_info}>
			<div className='container'>
				<article>{/* line */}</article>

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
						<img src={bmwCarImg} alt='car bmw' className={s.car_img} />

						<div className={`${s.dots}`}>
							<div className={`${s.dot} ${s.dot_left}`}>
								<p className={`${s.dot_content}`}>382 HORSEPOWER</p>
								<p className={s.dot_content_close}>X</p>
							</div>
							<div className={`${s.dot}  ${s.dot_top}`}>
								<p className={`${s.dot_content}`}>382 HORSEPOWER</p>
								<p className={s.dot_content_close}>X</p>
							</div>
							<div className={`${s.dot}  ${s.dot_right}`}>
								<p className={`${s.dot_content}`}>382 HORSEPOWER</p>
								<p className={s.dot_content_close}>X</p>
							</div>
						</div>
					</div>
				</article>

				<article>
					<button>SCROLL</button>
					<div className='video'>
						<img src='' alt='' />
						<img src='' alt='' />
						<div>
							<Link to={''}>WATCH</Link>
						</div>
					</div>
				</article>
			</div>
		</section>
	)
}
