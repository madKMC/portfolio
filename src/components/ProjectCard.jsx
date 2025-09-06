import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkAlt } from 'react-icons/fa';

const colorMap = {
	React: 'bg-blue-950 text-blue-500',
	JavaScript: 'bg-yellow-950 text-yellow-500',
	'bolt.new': 'bg-purple-950 text-purple-500',
	Tailwind: 'bg-teal-950 text-teal-500',
	Node: 'bg-green-950 text-green-500',
	Express: 'bg-gray-950 text-gray-500',
	Vite: 'bg-pink-950 text-pink-500',
	GoogleAPI: 'bg-cyan-950 text-cyan-500',
	Bootstrap: 'bg-purple-950 text-purple-500',
	'Self-Hosted': 'bg-gray-950 text-gray-500',
};

const ProjectCard = ({
	image,
	title,
	description,
	badges = [],
	websiteUrl,
	githubUrl,
}) => (
	<div className='flex flex-col items-center mt-5 rounded-lg shadow-sm md:flex-row md:min-w-xl md:max-w-xl lg:min-w-6xl lg:max-w-6xl border-gray-700 bg-gray-800 hover:bg-gray-700'>
		<div className='p-2 w-full md:flex-[0_0_33%] md:h-full'>
			<img
				src={image}
				alt={title}
				className='object-contain w-full md:h-full md:rounded-none md:rounded-s-lg rounded-t-lg'
			/>
		</div>

		<div className='flex flex-col justify-between p-4 leading-normal'>
			<h2 className='mb-2 text-2xl font-bold tracking-tight text-white'>
				{title}
			</h2>
			<p className='mb-16 font-normal text-gray-400'>{description}</p>
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
				{websiteUrl && (
					<a
						href={websiteUrl}
						target='_blank'
						rel='noopener noreferrer'
						className='px-4 py-2 rounded transition bg-indigo-800 hover:bg-indigo-900'
					>
						<FaExternalLinkAlt className='inline mr-3' />
						Website
					</a>
				)}
				{githubUrl && (
					<a
						href={githubUrl}
						target='_blank'
						rel='noopener noreferrer'
						className='bg-slate-700 text-white px-4 py-2 rounded hover:bg-slate-800 transition'
					>
						<FaGithub className='inline mr-3' />
						GitHub
					</a>
				)}
			</div>
		</div>
	</div>
);

export default ProjectCard;
