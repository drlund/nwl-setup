import './styes/global.css';
import {Habit} from './components/Habit';

/**
 * Componente:tudo que se pode reaproveitar ou isolar na aplicação;
 * Propriedade: é uma informação enviada ao componente para modificá-lo de maneira visual ou comportamental;
 */

function App() {
	return (
		<div>
			<Habit completed={3} />
			<Habit completed={10} />
			<Habit completed={20} />
			<Habit completed={30} />
		</div>
	);
}

export default App;

