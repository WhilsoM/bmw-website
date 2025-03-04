import { useEffect, useState } from 'react'
const apiKey = 'Ats7XwcFXj9ord7jxU1UtpISF1N_ymFSfPD27klGF_E'
const query = 'bmw m5 f90'

type TCars = {
	urls: {
		regular: string
	}
}

export const Cars = () => {
	const [cars, setCars] = useState<TCars[]>([])
	const [perPage, setPerPage] = useState(6)
	const [isEmpty, setIsEmpty] = useState(false)

	useEffect(() => {
		if (perPage > 27) {
			setIsEmpty(true)
			return
		}
		fetchData(perPage)
	}, [perPage])

	const fetchData = async (perPage: number) => {
		const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
			query
		)}&orientation=landscape&per_page=${perPage}&client_id=${apiKey}`

		try {
			const response = await fetch(url)

			const data = await response.json()
			const images = data.results

			setCars(images)
		} catch (error) {
			console.log(error)
			throw new Error()
		}
	}

	const handleClick = () => {
		setPerPage((prev) => prev + 3)
	}

	return (
		<section className='container'>
			<div className='mb-10'>
				<div className='image-grid mb-5'>
					{cars.map((car: TCars) => (
						<article key={car.urls.regular} className='image-item'>
							<img src={car.urls.regular} alt='car' width={400} height='auto' />
						</article>
					))}
				</div>

				<div className=' flex items-center justify-center'>
					{isEmpty ? (
						<p>К сожалению закончились картинки ))</p>
					) : (
						<button
							className='pl-5 pr-5 pt-3 pb-3 bg-white cursor-pointer shadow-2xl transition-all duration-300 ease-in-out hover:opacity-80 hover:shadow-xl '
							onClick={handleClick}
						>
							Загрузить больше
						</button>
					)}
				</div>
			</div>
		</section>
	)
}
