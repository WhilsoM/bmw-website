import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeLocation } from 'store/location/location'
import { RootState } from 'store/store'

export const useLocation = (path: string) => {
	const dispatch = useDispatch()
	const { location } = useSelector((state: RootState) => state.location)

	useEffect(() => {
		dispatch(changeLocation(path))

		if (location === '/' || location === '/configure-car') {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
	}, [location])
}
