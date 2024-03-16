/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
theme: {
    defaultTheme: "light",
    themes: {
      light: {
        dark: false,
        variables: {},
        colors: {
          primary: "#1a237e",
          secondary: "#f3f7fc",
          accent: "#1976d2",
          success: "#46c354",
          error: "#b71c1c",
          warning: "#FFC107",
          neutral: "#d8d8d8",
          neutralpurple: "#dee2f8",
          neutralblue: "#09337f",
          infocontent: "#f1f6f8",
          gradientleft: "#19237e",
          gradientright: "#0056b6",
          h1color: "#4da0d0",
          textshadow: "#807575",
          textshadow2: "#8f8989"
        }
      },
      dark: {
        dark: true,
        variables: {},
          colors: {
          primary: "#010a69",
          secondary: "#3e5878",
          accent: "#1976d2",
          success: "#46c354",
          error: "#b71c1c",
          warning: "#FFC107",
          neutral: "#535d78",
          neutralpurple: "#dee2f8",
          neutralblue: "#09337f",
          infocontent: "#f1f6f8",
          gradientleft: "#11174a",
          gradientright: "#002b5c",
          h1color: "#c4daf5",
          textshadow: "#e4eaed",
          textshadow2: "#ffffff"
        }
      }
    }
  }
})
