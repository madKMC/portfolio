import ProjectCard from './components/ProjectCard';
import Header from './components/Header';
// import comingSoonImage from './assets/ComingSoon.jpg';
import PomodoroImage from './assets/PomodoroTimer.jpg';
import ZDhlaminiImage from './assets/ZDhlamini.jpg';
import CVImage from './assets/CV.jpg';
import PortfolioImage from './assets/Portfolio.jpg';
import './App.css';

function App() {
	return (
		<div className='bg-blue-950 min-h-screen text-white flex flex-col items-center'>
			<Header />
			<div className='max-w-6xl mx-auto px-6 lg:px-12 flex flex-col gap-6'>
				<ProjectCard
					image={PomodoroImage}
					title='Pomodoro Timer'
					description='This is a pomodoro timer, built during the bolt.new hackathon. It features a sleek design and customizable timer settings to help you stay focused and productive.'
					badges={[
						'React',
						'JavaScript',
						'bolt.new',
						'Tailwind',
						'Self-Hosted',
					]}
					websiteUrl='https://pomodoro.cairnsforge.co.za'
					githubUrl='https://github.com/madKMC/PomodoroTimer'
				/>
				<ProjectCard
					image={ZDhlaminiImage}
					title='ZDhlamini - Online booking system for Psychologist'
					description='This is a project for a psychologist to maintain an online presence and allow clients to book appointments online. The project is currently under development and will be launched soon.'
					badges={[
						'Vite',
						'React',
						'JavaScript',
						'Tailwind',
						'GoogleAPI',
						'Self-Hosted',
					]}
					websiteUrl='https://zdhlamini.cairnsforge.co.za'
				/>
				<ProjectCard
					image={CVImage}
					title='Online CV'
					description='This is my online CV, built with React and Bootstrap. It showcases my experience, and projects in a clean and modern design.'
					badges={['React', 'JavaScript', 'Bootstrap', 'Self-Hosted']}
					websiteUrl='https://kaylen.cairnsforge.co.za'
					githubUrl='https://github.com/madKMC/CV'
				/>
				<ProjectCard
					image={PortfolioImage}
					title='Online Portfolio'
					description='This is my online portfolio, built with React and Tailwindcss. It showcases my projects in a clean and modern design.'
					badges={['Vite', 'React', 'JavaScript', 'Tailwind', 'Self-Hosted']}
					websiteUrl='https://cairnsforge.co.za'
					githubUrl='https://github.com/madKMC/portfolio'
				/>
				{/* <ProjectCard
				image={comingSoonImage}
				title='Coming Soon'
				description='This project is coming soon.'
				//badges={['React', 'JavaScript']}
				websiteUrl='https://example.com'
				githubUrl='https://github.com/madKMC'
			/> */}
			</div>
		</div>
	);
}

export default App;
