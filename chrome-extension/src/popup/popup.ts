import Popup from './Popup.svelte';
import '../app.css';

const app = new Popup({
  target: document.getElementById('app')!
});

export default app;
