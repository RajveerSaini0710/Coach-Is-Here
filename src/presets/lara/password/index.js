export default {
	root: ({ props }) => ({
		class: [
			'inline-flex relative',
			{
				'opacity-60 select-none pointer-events-none cursor-default': props.disabled,
			},
		],
	}),
	panel: {
		class: [
			// Spacing
			'p-5',

			// Shape
			'border-0 dark:border-0',
			'shadow-md rounded-md',

			// Colors
			'bg-white dark:bg-white',
			'text-purple-700 dark:text-purple-700',
			'dark:border-purple-700',
		],
	},
	meter: {
		class: [
			// Position and Overflow
			'overflow-hidden',
			'relative',

			// Shape and Size
			'border-0',
			'h-3',

			// Spacing
			'mb-2',

			// Colors
			'bg-purple-100 dark:bg-purple-700',
		],
	},
	meterlabel: ({ instance }) => ({
		class: [
			// Size
			'h-full',

			// Colors
			{
				'bg-purple-500 dark:bg-purple-700': instance?.meter?.strength == 'weak',
				'bg-purple-500 dark:bg-purple-600': instance?.meter?.strength == 'medium',
				'bg-purple-500 dark:bg-purple-500': instance?.meter?.strength == 'strong',
			},

			// Transitions
			'transition-all duration-1000 ease-in-out',
		],
	}),
	showicon: {
		class: ['absolute top-1/2 right-3 -mt-2', 'text-surface-600 dark:text-white/70'],
	},
	hideicon: {
		class: ['absolute top-1/2 right-3 -mt-2', 'text-surface-600 dark:text-white/70'],
	},
	transition: {
		enterFromClass: 'opacity-0 scale-y-[0.8]',
		enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
		leaveActiveClass: 'transition-opacity duration-100 ease-linear',
		leaveToClass: 'opacity-0',
	},
}
