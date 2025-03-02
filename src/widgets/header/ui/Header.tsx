import { NavLink } from 'react-router'
import s from './header.module.scss'

export const Header = () => {
	return (
		<header className={`${s.header}`}>
			<div className={`${s.wrapper} container`}>
				{/* <div className={s.sticks}>
					<span></span>
					<span></span>
					<span></span>
				</div> */}

				<nav>
					<ul className={s.nav_list}>
						<li>
							<NavLink to='/'>Home</NavLink>
						</li>
						<li>
							<NavLink to='/cars'>Cars</NavLink>
						</li>
						<li>
							<NavLink to='/configure-car'>Configure car</NavLink>
						</li>
					</ul>
				</nav>

				{/* <ul className={s.more_links}>
					<li>
						<IoSearch />
					</li>
					<li>
						<GiPositionMarker />
					</li>
					<li>
						<button className='btn-blue'>TEST DRIVE</button>
					</li>
				</ul> */}
			</div>
		</header>
	)
}
