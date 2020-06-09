import react, {useEffect} from 'react';
import useLocalStorage from './useLocalStorage';

export const useDarkMode = () => { 
    const [dark, setDark] = useLocalStorage("darkModeCheck");

    const body = document.querySelector('body');
    
    useEffect(() => {dark ? body.classList.add('dark-mode') : body.classList.remove('dark-mode');
    },[dark])

    return [dark, setDark];
}

export default useDarkMode