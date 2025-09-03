import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkAlt } from 'react-icons/fa';

const colorMap = {
	React: 'bg-blue-100 text-blue-800',
	JavaScript: 'bg-yellow-100 text-yellow-800',
	// add more languages as needed
};

const ProjectCard = ({
	image,
	title,
	description,
	badges = [],
	websiteUrl,
	githubUrl,
}) => (
	<div className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl md:min-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
		<img
			src={image}
			alt={title}
			className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg'
		/>
		<div className='flex flex-col justify-between p-4 leading-normal'>
			<h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
				{title}
			</h2>
			<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
				{description}
			</p>
			<div className='flex flex-wrap gap-2 mb-4'>
				{badges.map((badge, idx) => {
					const classes = colorMap[badge] || 'bg-gray-100 text-gray-800';
					return (
						<span
							key={idx}
							className={`${classes} text-xs font-medium px-2 py-1 rounded`}
						>
							{badge}
						</span>
					);
				})}
			</div>
			<div className='flex gap-3 mt-auto'>
				<a
					href={websiteUrl}
					target='_blank'
					rel='noopener noreferrer'
					className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'
				>
					<FaExternalLinkAlt className='inline mr-1' />
					Website
				</a>
				<a
					href={githubUrl}
					target='_blank'
					rel='noopener noreferrer'
					className='bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition'
				>
					<FaGithub className='inline mr-1' />
					GitHub
				</a>
			</div>
		</div>
	</div>
);

export default ProjectCard;
