import App from './App.svelte'
import 'tailwindcss/tailwind.css'

const app = new App({
  target: document.body,
  props: {
    name: 'world'
  }
})

export default app
