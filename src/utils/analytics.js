import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("10280184888"); 
};

export const trackPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};