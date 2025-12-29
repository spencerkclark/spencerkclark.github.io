export const profile = {
	fullName: 'Spencer K. Clark',
	title: 'Atmospheric Scientist & Software Engineer',
	institute: 'Allen Institute for Artificial Intelligence',
	author_name: 'Clark, Spencer K.', // Author name to be highlighted in the papers section
	research_areas: [
		// { title: 'Physics', description: 'Brief description of the research interest', field: 'physics' },
	],
	about: 'I am a Senior Research Scientist in the \
	[Climate Modeling group](https://allenai.org/climate-modeling) at \
	the [Allen Institute for Artificial Intelligence](https://allenai.org), \
	and a member of the [FV3 Team](https://www.gfdl.noaa.gov/fv3/) at the \
	[NOAA/Geophysical Fluid Dynamics Laboratory](https://www.gfdl.noaa.gov). \
	My educational background is in physics and atmospheric science, and I \
	have experience in traditional physics-based, hybrid machine-learning, \
	and fully machine-learning-based model development. My current primary \
	focus is helping to advance the capabilities of the \
	[Ai2 Climate Emulator (ACE)](https://github.com/ai2cm/ace).'
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: '',
	linkedin: 'https://www.linkedin.com/in/spencerkclark/',
	x: '',
	bluesky: '',
	github: 'https://github.com/spencerkclark',
	gitlab: '',
	scholar: 'https://scholar.google.com/citations?user=mlht0K0AAAAJ&hl=en',
	inspire: '',
	arxiv: '',
	orcid: '',
}

export const template = {
	website_url: 'https://spencerkclark.github.io', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Astro Academia',
	default_description: 'Astro Academia is a template for academic websites.',
	default_image: '/images/astro-academia.png',
}
