import ProjectCard from './components/ProjectCard';
import Header from './components/Header';
import comingSoonImage from './assets/ComingSoon.jpg';
import './App.css';
import Divider from './components/Divider';

function App() {
	return (
		<div className='bg-blue-950 min-h-screen text-white flex flex-col items-center'>
			<Header />
			<br />
			<ProjectCard
				image={comingSoonImage}
				title='Coming Soon'
				description='This project is coming soon. Well so we believe aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa asdasd a'
				badges={['React', 'JavaScript']}
				websiteUrl='https://example.com'
				githubUrl='https://github.com'
			/>
			<Divider />
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
