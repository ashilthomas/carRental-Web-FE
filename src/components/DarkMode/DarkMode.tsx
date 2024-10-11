
import { useEffect } from 'react';
import { Switch } from '@chakra-ui/react';
import { useState } from 'react';

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Load the dark mode preference from localStorage (if it exists)
    return localStorage.getItem('theme') === 'dark';
  });

  // Add or remove 'dark' class from the document root (html tag)
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark'); // Persist the user's preference in localStorage
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Switch
      size="lg"
      isChecked={isDarkMode}
      onChange={toggleDarkMode}
      colorScheme={isDarkMode ? 'teal' : 'orange'}
    />
  );
};

export default DarkModeToggle;

