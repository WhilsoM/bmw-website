import { Route, Routes } from 'react-router'
import { Home } from '../pages/home/ui/Home'
import { Layout } from './Layout'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
			</Route>
		</Routes>
	)
}

export default App
