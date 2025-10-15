import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		keyframes: {
  			'logo-scale': {
  				'0%': {
  					transform: 'scale(1)',
  					opacity: '0.1'
  				},
  				'50%': {
  					transform: 'scale(1.5)',
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'scale(1)',
  					opacity: '1'
  				}
  			},
  			'logo-scale-loop': {
  				'0%': {
  					transform: 'scale(0.8)',
  					opacity: '0.5'
  				},
  				'50%': {
  					transform: 'scale(1.2)',
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'scale(0.8)',
  					opacity: '0.5'
  				}
  			}
  		},
  		animation: {
  			'logo-scale': 'logo-scale 1.5s ease-out',
  			'logo-scale-loop': 'logo-scale-loop 2s ease-in-out infinite',
  			shimmer: 'shimmer 2s ease-in-out infinite'
  		},
  		fontFamily: {
  			body: [
  				'Typeface/Body',
  			]
			,
			
			
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		backgroundImage: {
  			'linear-gradient': 'linear-gradient(to right, #1045F9, #61FFD0, #F979A0, #FEC388)',
  			'white-green-gradient': 'linear-gradient(90deg, #EFFBF9 0%, #C7F7EF 100%)'
  		},
  		colors: {
  			primary: {
  				"main": '',
  				
  			},
  			neutralLight: {
  				'400': '#F3EEFC',
  				'500': '#6D28D9',
  				'600': '#571FAF'
  			},
  			neutralDark: {
  				'400': '#312647',
  				'500': '#C8ADF4',
  				'600': '#8D66CA'
  			},
  			alertLight: {
  				'400': '#FEEBD7',
  				'500': '#FA9F42',
  				'600': '#773F03'
  			},
  			alertDark: {
  				'400': '#221507',
  				'500': '#A16221',
  				'600': '#EBC399'
  			},
  			errorLight: {
  				'400': '#FBF1EF',
  				'500': '#BB4430',
  				'600': '#612419'
  			},
  			errorDark: {
  				'400': '#0E0706',
  				'500': '#BA6759',
  				'600': '#DBB0A9'
  			},
  			successLight: {
  				'400': '#EFFBF9',
  				'500': '#2A9D8F',
  				'600': '#11403B'
  			},
  			successDark: {
  				'400': '#060E0D',
  				'500': '#73C4BA',
  				'600': '#C6E7E3'
  			},
  			darkBackground: {
  				'50': '#1D1E1F',
  				'100': '#0C0D0E',
  				'200': '#282C33',
  				'300': '#48505D',
  				'400': '#656F80',
  				'500': '#9BA4B0',
  				'600': '#D4D7DD',
  				'700': '#F0F2F4'
  			},
  			lightBackground: {
  				'50': '#FBFBFC',
  				'100': '#F0F2F4',
  				'200': '#D2D7DF',
  				'300': '#9EA9BC',
  				'400': '#7988A0',
  				'500': '#4A5668',
  				'600': '#20252D',
  				'700': '#0C0D0E'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

