import { Cars } from 'pages/cars/'
import { ConfigureCar } from 'pages/configure-car'
import { Home } from 'pages/home/'
import { Route, Routes } from 'react-router'
import { Layout } from './Layout'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='cars' element={<Cars />} />
				<Route path='configure-car' element={<ConfigureCar />} />
			</Route>
		</Routes>
	)
}

export default App
