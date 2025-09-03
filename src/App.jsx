import ProjectCard from './components/ProjectCard';
import Header from './components/Header';
import './App.css';

function App() {
	return (
		<div className='bg-blue-950 h-full min-h-screen text-white justify-center items-center'>
			<Header />
			<ProjectCard
				image='https://via.placeholder.com/150'
				title='Project Title'
				description='Project description goes here.'
				badges={['React', 'JavaScript']}
				websiteUrl='https://example.com'
				githubUrl='https://github.com'
			/>
		</div>
	);
}

export default App;
