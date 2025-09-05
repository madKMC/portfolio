import ProjectCard from './components/ProjectCard';
import Header from './components/Header';
import comingSoonImage from './assets/ComingSoon.jpg';
import PomodoroImage from './assets/PomodoroTimer.jpg';
import './App.css';

function App() {
	return (
		<div className='bg-blue-950 min-h-screen text-white flex flex-col items-center'>
			<Header />
			<ProjectCard
				image={PomodoroImage}
				title='Pomodoro Timer'
				description='This is a pomodoro timer, built during the bolt.new hackathon. It features a sleek design and customizable timer settings to help you stay focused and productive.'
				badges={['React', 'JavaScript', 'bolt.new', 'Tailwind']}
				websiteUrl='https://pomodoro.cairnsforge.co.za'
				githubUrl='https://github.com/madKMC/PomodoroTimer'
			/>
			<ProjectCard
				image={comingSoonImage}
				title='Coming Soon'
				description='This project is coming soon.'
				badges={['React', 'JavaScript']}
				websiteUrl='https://example.com'
				githubUrl='https://github.com'
			/>
		</div>
	);
}

export default App;
