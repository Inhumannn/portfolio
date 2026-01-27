import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const GA_MEASUREMENT_ID = "G-6CKF9CTE01"; 

export function Analytics() {
  const location = useLocation();
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      ReactGA.initialize(GA_MEASUREMENT_ID);
      window.GA_INITIALIZED = true;
    }

    ReactGA.send({ 
      hitType: "pageview", 
      page: location.pathname + location.search 
    });
  }, [location]);

  return null;
}

declare global {
  interface Window {
    GA_INITIALIZED: boolean;
  }
}