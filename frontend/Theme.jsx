import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const notify = () => toast('Theme changed!', { theme: isDarkMode ? 'dark' : 'light' });

  return (
    <div>
      <button onClick={() => {
        setIsDarkMode(!isDarkMode);
        notify();
      }}>
        Toggle Dark Mode
      </button>
      <ToastContainer />
    </div>
  );
}
