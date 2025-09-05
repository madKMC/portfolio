import ProjectCard from './components/ProjectCard';
import Header from './components/Header';
import comingSoonImage from './assets/ComingSoon.jpg';
import PomodoroImage from './assets/PomodoroTimer.jpg';
import ZDhlaminiImage from './assets/ZDhlamini.jpg';
import CVImage from './assets/CV.jpg';
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
				image={ZDhlaminiImage}
				title='ZDhlamini - Online booking system for Psychologist'
				description='This is a project for a psychologist to maintain an online presence and allow clients to book appointments online. The project is currently under development and will be launched soon.'
				badges={['React', 'JavaScript', 'Vite', 'Tailwind', 'GoogleAPI']}
				websiteUrl='https://zdhlamini.cairnsforge.co.za'
				githubUrl='https://github.com/madKMC/BookingSystem'
			/>
			<ProjectCard
				image={CVImage}
				title='Online CV'
				description='This is my online CV, built with React and Bootstrap. It showcases my experience, and projects in a clean and modern design.'
				//badges={['React', 'JavaScript', 'Bootstrap']}
				websiteUrl='https://kaylen.cairnsforge.co.za'
				githubUrl='https://github.com/madKMC/CV'
			/>
			<ProjectCard
				image={comingSoonImage}
				title='Coming Soon'
				description='This project is coming soon.'
				//badges={['React', 'JavaScript']}
				websiteUrl='https://example.com'
				githubUrl='https://github.com/madKMC'
			/>
		</div>
	);
}

export default App;
