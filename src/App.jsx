import ProjectCard from './components/ProjectCard';
import './App.css';

function App() {
  return (
    <div>
      <ProjectCard
        image="https://via.placeholder.com/150"
        title="Project Title"
        description="Project description goes here."
        badges={['React', 'JavaScript']}
        websiteUrl="https://example.com"
        githubUrl="https://github.com"
      />
    </div>
  );
}

export default App;
