
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '@/assets/main.css'
// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme: {
        dark: false, // Altere para true para tema escuro
        colors: {
          primary: '#80297d', 
          secondary: '#424242', 
          accent: '#82B1FF', 
          error: '#FF5252',
          info: '#2196F3', 
          success: '#4CAF50',
          warning: '#FFC107', 
          icon: "#454f5b",
          white:"#fffff"
        },
      },
    }
  },
})
