import { createTheme } from "@mui/material/styles";

export const dashboardTheme = createTheme({
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					fontSize: "0.875rem",
					fontWeight: 600,
					borderRadius: 8.5,
					textTransform: "none",
					"&.MuiButton-contained": {
						backgroundColor: "#009be5",
						"&:hover": {
							backgroundColor: "#006db3",
						},
					},
					"&.MuiButton-outlined": {
						color: "#fff",
						borderColor: "rgba(255, 255, 255, 0.7)",
						"&:hover": {
							backgroundColor: "rgba(0, 0, 0, 0.04)",
						},
					},
				},
			},
		},
		MuiSvgIcon: {
			styleOverrides: {
				root: {
					fontSize: "1.7rem",
				},
			},
		},
	},
	palette: {
		white: {
			main: "#fff",
		},
	},
	typography: {
		h1: {
			fontSize: "1.6rem",
			fontWeight: 600,
			color: "#fff",
			letterSpacing: "0.5px",
			textTransform: "capitalize",
		},
	},
});

/* 




export const dashboardTheme = createTheme({
	components: {
		// Name of the component
		MuiButton: {
			styleOverrides: {
				// Name of the slot
				root: {
					// Some CSS
					// fontSize: "3rem!important",
				},
			},
		},
	},
	palette: {
		primary: {
			main: "#bada55",
		},
	},
	typography: {
		fontFamily: [
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
	},
});


 */
/* si estoy ocupando sx para cambiarlos en el componente, entonces aca tengo q usar el !important para q se aplique, ya q sx es mas especifico

export const dashboardTheme = createTheme({
	components: {
		// Name of the component
		MuiButton: {
			styleOverrides: {
				// Name of the slot
				root: {
					// Some CSS
					fontSize: "3rem!important",
				},
			},
		},
	},
});

*/

/* 
Default props

You can change the default of every prop of a MUI component. A defaultProps key is exposed in the theme's components key for this use case.


const theme = createTheme({
	components: {
		// Name of the component
		MuiButtonBase: {
			defaultProps: {
				// The props to change the default for.
				disableRipple: true, // No more ripple!
			},
		},
	},
});

<ThemeProvider theme={theme}>
   <Button>Change default props</Button>
</ThemeProvider>


 */

/* 


Global style overrides

You can use the theme's styleOverrides key to potentially change every single style injected by MUI into the DOM.

const theme = createTheme({
	components: {
		// Name of the component
		MuiButton: {
			styleOverrides: {
				// Name of the slot
				root: {
					// Some CSS
					fontSize: "1rem",
				},
			},
		},
	},
});

<ThemeProvider theme={theme}>
   <Button>font-size: 1rem</Button>
</ThemeProvider>
 */
