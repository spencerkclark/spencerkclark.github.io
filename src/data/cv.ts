export const experiences = [
	{
		company: 'Allen Institute for Artificial Intelligence',
		time: 'January 2023 - present',
		title: 'Senior Research Scientist',
		location: 'Princeton, NJ',
		description: [
			'Demonstrated that the Ai2 Climate Emulator can be coupled to a slab ocean model and trained to emulate the equilibrium climate response to changes in the concentration of carbon dioxide.',
			'Helped develop the Ai2 Climate Emulator (ACE) through the design and execution of custom reference simulations with physics-based models, data-processing pipelines, software contributions, and scientific experimentation.',
			'Helped port the cloud-based end-to-end corrective ML workflow to run on HPC systems.',
		],
		logo: '/logos/Ai2.png'
	},
	{
		company: 'Allen Institute for Artificial Intelligence',
		time: 'August 2021 - December 2022',
		title: 'Research Scientist',
		location: 'Princeton, NJ',
		description: [
			'Demonstrated that corrective ML could be used to improve the coarse resolution of land precipitation and surface temperature in multi-year simulations in multiple climates.',
			'Helped advance corrective ML parameterization via coarse-graining by enabling learning and overriding the surface radiative fluxes and accurately applying corrections to the horizontal winds.',
			'Built an environment to run multi-node Python-wrapped FV3GFS simulations on HPC systems.'
		],
		logo: '/logos/Ai2.png'
	},
	{
		company: 'Vulcan Inc.',
		time: 'August 2019 - August 2021',
		title: 'Software Engineer for Climate Model Development',
		location: 'Princeton, NJ',
		description: [
			'Implemented the ability to compute and save online coarse-grained diagnostics and restart files in GFDL’s SHiELD model, facilitating global storm resolving model research, including Vulcan\'s.',
			'Ran multiple global 3-km resolution simulations with online-coarsened outputs for machine learning model training and testing.',
			'Helped develop the infrastructure to run a Python-wrapped version of NOAA’s FV3GFS model for machine learning experiments, in which output from the 3-km runs was used to train ML models to improve coarse-resolution simulations.'

		],
		logo: '/logos/Vulcan.png'
	},
	{
		company: 'Princeton University',
		time: 'September 2014 - August 2019',
		title: 'Research Assistant',
		location: 'Princeton, NJ',
		description: [
			'Characterized the role of water vapor in the ITCZ response to hemispherically asymmetric perturbations.',
			'Demonstrated that South Asian monsoon low pressure systems can be simulated in an idealized moist GCM, and that the storms exhibit some properties consistent with moisture vortex instability theory, as well as some properties that deviate from it.',
			'Studied the sensitivity of equatorial wave variability in an idealized moist GCM to various forms of heating perturbations.'
		],
		logo: '/logos/Princeton.png'
	},
	{
		company: 'Cornell University',
		time: 'January 2011 - March 2017',
		title: 'Research Assistant',
		location: 'Ithaca, NY',
		description: [
			'Characterized the episodicity of forest and grass fires and developed 7 new prescribed emissions cases to test the impact of fire episodicity on fire’s aerosol direct and indirect radiative forcings.',
			'Implemented 8 GCM lightning parameterizations in CAM5, compared their results to LIS/OTD observations, and studied their future projections.'
		],
		logo: '/logos/Cornell.png'
	},
	// {
	// 	company: 'Radium Institute (Institut du Radium)',
	// 	time: '1914 - 1934',
	// 	title: 'Director',
	// 	location: 'Paris, France',
	// 	description: 'Led groundbreaking studies on radioactivity and mentored future Nobel Prize laureates.',
	// },
];

export const education = [
	{
		school: 'Princeton University',
		time: 'September 2019',
		degree: 'Ph.D., Atmospheric and Oceanic Sciences',
		location: 'Princeton, NJ',
		description: 'Advisor: Yi Ming',
		logo: '/logos/Princeton.png'
	},
	{
		school: 'Cornell University',
		time: 'May 2014',
		degree: 'B.S., Engineering Physics',
		location: 'Ithaca, NY',
		description: 'Thesis Advisor: Natalie Mahowald',
		logo: '/logos/Cornell.png',
		honors: 'Honors in Research; magna cum laude'
	},
];

export const skills = [
	{
		title: '',
		description: '',
	},
	// {
	// 	title: 'Experimental Techniques',
	// 	description: 'Spectroscopy, Isolation of Radioactive Elements, Radiation Measurement',
	// },
];

export const publications = [
	// {
	// 	title: 'The Radiation of Uranium Compounds',
	// 	authors: 'Marie Curie',
	// 	journal: 'Comptes Rendus de l’Académie des Sciences',
	// 	time: '1898',
	// 	link: '#',
	// 	abstract: 'Early research leading to the identification of uranium’s radioactive properties.',
	// },
];

export const softwareContributions = [
  {
    title: "xarray",
    repoUrl: "https://github.com/pydata/xarray",
    role: "Core developer",
    description: "A widely-used Python library providing N-dimensional labeled array data structures.",
    highlights: [
      "Led an effort to fully support of non-standard calendar types frequently used in climate science, i.e. serialization, standard and partial-datetime-string indexing, constructing date ranges, groupby operations, resampling, interpolation, plotting, and more.",
	  "Continue to take part in reviewing new contributions, fixing bugs, adding requested features, and answering user/developer questions.",
    ]
  },
  {
    title: "cftime",
    repoUrl: "https://github.com/Unidata/cftime",
    role: "Contributor",
    description: "A Python library providing datetime instances for non-standard calendars.",
    highlights: [
	  "Enabled exact numerical decoding and encoding of datetimes.",
      "Proposed strategy that led to speeding up fundamental operations, e.g. datetime construction and timedelta arithmetic, by 200 to 400x.",
	  "Implemented an approach to speed up decoding arrays of datetimes by 200x in particularly problematic circumstances.",
    ]
  },
  {
    title: "nc-time-axis",
    repoUrl: "https://github.com/SciTools/nc-time-axis",
    role: "Contributor",
    description: "A Python library providing the ability to plot cftime datetimes in matplotlib.",
    highlights: [
	  "Enabled plotting `cftime.datetime` objects directly in matplotlib, instead of requiring a wrapped version of a `cftime.datetime` object.",
	  "Added infrastructure for documentation and basic documentation content.",
    ]
  },
  {
    title: "xpartition",
    repoUrl: "https://github.com/spencerkclark/xpartition",
    role: "Primary author",
    description: "A Python package for writing large xarray datasets to zarr stores with independent processes on HPC or in the cloud.",
    highlights: [
		"Used regularly when processing the hundreds of terabytes of output from physics-based climate model simulations we use as ML reference data at Ai2.",
		"Supports writing both traditional and sharded zarr stores.",
	]
  },
  {
    title: "faceted",
    repoUrl: "https://github.com/spencerkclark/faceted",
    role: "Primary author",
    description: "A Python package that makes it easier to create matplotlib figures with precise control over the overall width, plot aspect ratio, between-plot spacing, and colorbar dimensions.",
    highlights: [
		"Reduces boilerplate and automates algebra required to make clean publication-ready plots."
	]
  },
];

export const presentations = [
  {
    authors: "Clark, S. K., Ward, D. S., and Mahowald, N. M.",
    title: "Climate Model Responses to Increased Episodicity in Prescribed Fire Aerosol Emissions",
    conference: "CESM Workshop",
    location: "Breckenridge, CO",
    date: "June 2012",
    year: 2012,
    type: "Poster"
  },
  {
    authors: "Clark, S. K., Ming, Y., and Held, I. M.",
    title: "Climate Impacts of Inter-hemispherically Asymmetric Radiativen Forcing",
    conference: "Gordon Research Conference",
    location: "Lewiston, ME",
    date: "July 2015",
    year: 2015,
    type: "Poster"
  },
  {
    authors: "Clark, S. K., Ming, Y., and Held, I. M.",
    title: "Climate Impacts of Inter-hemispherically Asymmetric Radiativen Forcing",
    conference: "AGU Fall Meeting",
    location: "San Francisco, CA",
    date: "December 2015",
    year: 2015,
    type: "Poster"
  },
  {
    authors: "Clark, S. K., Ming, Y., and Held, I. M.",
    title: "The role of water vapor in the ITCZ response to hemispherically asymmetric forcings",
    conference: "Dynamical Core Model Intercomparison Project",
    location: "Boulder, CO",
    date: "June 2016",
    year: 2016,
    type: "Poster"
  },
  {
    authors: "Clark, S. K., Ming, Y., and Held, I. M.",
    title: "The role of water vapor in the ITCZ response to hemispherically asymmetric forcings",
    conference: "WCRP Model Hierarchies Workshop",
    location: "Princeton, NJ",
    date: "November 2016",
    year: 2016,
    type: "Poster"
  },
  {
    authors: "Hill, S. A., Clark, S. K.",
    title: "The other ’aospy’: automated climate data analysis and management",
    conference: "AOSPy Workshop at Columbia University",
    location: "New York, NY",
    date: "November 2016",
    year: 2016,
    type: "Talk"
  },
  {
    authors: "Clark, S. K., Ming, Y., and Held, I. M.",
    title: "The role of water vapor in the ITCZ response to hemispherically asymmetric forcings",
    conference: "AGU Fall Meeting",
    location: "San Francisco, CA",
    date: "December 2016",
    year: 2016,
    type: "Poster"
  },
  {
    authors: "Clark, S. K., Ming, Y., Held, I. M., and Phillipps, P. J.",
    title: "The role of water vapor in the ITCZ response to hemispherically asymmetric forcings",
    conference: "Dynamics seminar series",
    location: "Princeton, NJ",
    date: "November 2017",
    year: 2017,
    type: "Talk"
  },
  {
    authors: "Clark, S. K., Ming, Y.",
    title: "Investigating synoptic-scale monsoonal disturbances in an idealized moist model",
    conference: "AGU Fall Meeting",
    location: "New Orleans, LA",
    date: "December 2017",
    year: 2017,
    type: "Poster"
  },
  {
    authors: "Clark, S. K., Ming, Y., Adames, Á. F.",
    title: "An idealized framework for simulating monsoon low pressure systems and their potential sensitivity to the mean state",
    conference: "AGU Fall Meeting",
    location: "Washington D.C.",
    date: "December 2018",
    year: 2018,
    type: "Poster"
  },
  {
    authors: "Clark, S. K., Brenowitz, N., Henn, B. M., Kwa, A., McGibbon, J., Perkins, W. A., Watt-Meyer, O., Harris, L., Bretherton, C.S.",
    title: "Challenges associated with training a machine-learning based moist physics parameterization by coarse-graining in a model with topography",
    conference: "NOAA Artificial Intelligence Workshop",
    location: "Virtual",
    date: "December 2020",
    year: 2020,
    type: "Talk"
  },
  {
    authors: "Clark, S. K., Brenowitz, N., Bretherton, C. S., Henn, B. M., Kwa, A., McGibbon, J., Perkins, W. A., Watt-Meyer, O., Chen, X., Harris, L., Zhou, L.",
    title: "Using nudging to investigate biases in a global 3 km resolution simulation with GFDL’s X-SHiELD model",
    conference: "AGU Fall Meeting",
    location: "Virtual",
    date: "December 2020",
    year: 2020,
    type: "Poster"
  },
  {
    authors: "Clark, S. K., Brenowitz, N., Henn, B. M., Kwa, A., McGibbon, J., Perkins, W. A., Watt-Meyer, O., and Bretherton, C.S.",
    title: "Applying machine learning parameterization through coarse graining to improve the skill in simulating multiple climates in a full complexity GCM",
    conference: "NOAA Artificial Intelligence Workshop",
    location: "Virtual",
    date: "September 2021",
    year: 2021,
    type: "Talk"
  },
  {
    authors: "Clark, S. K., Brenowitz, N., Henn, B. M., Kwa, A., McGibbon, J., Perkins, W. A., Watt-Meyer, O., and Bretherton, C.S.",
    title: "Applying machine learning parameterization through coarse graining to improve the skill in simulating multiple climates in a full complexity GCM",
    conference: "AGU Fall Meeting",
    location: "Virtual",
    date: "December 2021",
    year: 2021,
    type: "Poster"
  },
  {
    authors: "Clark, S. K., Brenowitz, N., Henn, B. M., Kwa, A., McGibbon, J., Perkins, W. A., Watt-Meyer, O., Bretherton, C.S., and Harris, Lucas M.",
    title: "Correcting Coarse-Grid Weather and Climate Models by Machine Learning From Global Storm-Resolving Simulations",
    conference: "Physics Dynamics Coupling Workshop",
    location: "Princeton, NJ",
    date: "June 2022",
    year: 2022,
    type: "Talk"
  },
  {
    authors: "Clark, S. K., Brenowitz, N., Henn, B. M., Kwa, A., McGibbon, J., Perkins, W. A., Watt-Meyer, O., Bretherton, C.S., and Harris, Lucas M.",
    title: "Correcting a 200 km Resolution Climate Model in Multiple Climates by Machine Learning From 25 km Resolution Simulations",
    conference: "AMS Annual Meeting",
    location: "Denver, CO",
    date: "January 2023",
    year: 2023,
    type: "Talk"
  },
  {
    authors: "Clark, S. K., Watt-Meyer, O., Kwa, A., McGibbon, J., Henn, B., Dresdner G., Perkins, W. A., Harris, L. M., Bretherton, C. S.",
    title: "Coupling the Ai2 Climate Emulator to a slab ocean and learning the climate sensitivity to changes in CO2",
    conference: "Workshop on Large-Scale Deep Learning for the Earth System",
    location: "Bonn, Germany",
    date: "August 2024",
    year: 2024,
    type: "Talk"
  },
  {
    authors: "Bretherton, C. S., Watt-Meyer, O., Clark, S. K., Henn, B., Kwa, A., McGibbon, J., Perkins, W. A., Dresdner, G., Duncan, J. P. C., Rebassoo, F., Bonev, B., Harris, L. M., Caldwell, P. M.",
    title: "The AI2 Climate Emulator (ACE): Capabilities, Challenges, and Opportunities",
    conference: "AGU Annual Meeting",
    location: "Washington D.C.",
    date: "December 2024",
    year: 2024,
    type: "Talk"
  },
  {
    authors: "Clark, S. K., Watt-Meyer, O., Kwa, A., McGibbon, J., Henn, B., Perkins, W. A., Wu, E., Bretherton, C. S., Harris, L. M.",
    title: "ACE2-SOM: Coupling to a slab ocean and learning the sensitivity of climate to changes in CO2",
    conference: "AGU Annual Meeting",
    location: "Washington D.C.",
    date: "December 2024",
    year: 2024,
    type: "eLightning"
  },
  {
    authors: "Clark, S. K., Arcomano, T., Duncan, James P. C., Henn, B., Kwa, A., McGibbon, J., Perkins, W. A., Wu, E., Watt-Meyer, O., Bretherton, C. S.",
    title: "Learning the Response to Abrupt CO2 Changes in the Ai2 Climate Emulator",
    conference: "Gordon Research Conference on Actionable Machine Learning for Climate Science",
    location: "Smithfield, RI",
    date: "June 2025",
    year: 2025,
    type: "Talk"
  },
  {
    authors: "Clark, S. K., Arcomano, T., Duncan, James P. C., Henn, B., Kwa, A., McGibbon, J., Perkins, W. A., Wu, E., Watt-Meyer, O., Bretherton, C. S., Harris, L. M.",
    title: "The Ai2 Climate Emulator: a flexible platform for climate simulation, weather forecasting, and downscaling",
    conference: "NOAA Artificial Intelligence Workshop",
    location: "Virtual",
    date: "September 2025",
    year: 2025,
    type: "Talk"
  },
];

export const reviewService = [
  {name: "Journal of Advances in Modeling Earth Systems", url: "https://agupubs.onlinelibrary.wiley.com/journal/19422466"},
  {name: "Journal of Climate", url: "https://www.ametsoc.org/ams/publications/journals/journal-of-climate/"},
  {name: "Journal of Geophysical Research - Atmospheres", url: "https://agupubs.onlinelibrary.wiley.com/journal/21698996"},
  {name: "Journal of Open Source Software", url: "https://joss.theoj.org"},
  {name: "Geoscientific Model Development", url: "https://www.geoscientific-model-development.net"},
  {name: "Nature", url: "https://www.nature.com"},
  {name: "Nature Climate Change", url: "https://www.nature.com/nclimate/"},
  {name: "Nature Communications", url: "https://www.nature.com/ncomms/"},
  {name: "Quarterly Journal of the Royal Meteorological Society", url: "https://rmets.onlinelibrary.wiley.com/journal/1477870X"},
];

export const awards = [
  { year: "2018", title: "Arnold Guyot Teaching Award", organization: "Princeton University Department of Geosciences" },
  { year: "2016-2019", title: "National Defense Science and Engineering Graduate Fellowship", organization: "American Society for Engineering Education" },
  { year: "2014", title: "Dorothy and Fred Chau Award", organization: "Cornell University Department of Applied and Engineering Physics" },
  { year: "2010-2014", title: "Rawlings Cornell Presidential Research Scholar", organization: "Cornell University" },
];

export const teaching = [
  {
    title: "Assistant in Instruction",
    course: "ENV 367: Modeling the Earth System",
    date: "Fall 2017",
    institution: "Princeton University",
    description: [
		"Assisted Professor Laure Resplandy in adapting [an existing compact Earth System Model](https://gmd.copernicus.org/articles/10/271/2017/gmd-10-271-2017.html) for use as a teaching tool. Wrote comprehensive web-based documentation for the model.",
		"Authored lab exercises to help students learn about the features and limitations of the model, and illustrate Earth system modeling concepts."
	],
	logo: '/logos/Princeton.png',
  },
  {
    title: "Grader",
    course: "AEP 4220: Mathematical Physics II",
    date: "Spring 2014",
    institution: "Cornell University",
    description: [
		"Held weekly office hours, wrote official solutions, and graded homework and exam problems for a course led by Professor Bruce Kusse."
	],
	logo: '/logos/Cornell.png',
  }
];
