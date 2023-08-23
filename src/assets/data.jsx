import { nanoid } from "nanoid";
import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

export const pagesLinksData = [
  { id: nanoid(), page: "home", link: "/" },
  { id: nanoid(), page: "pricing", link: "/" },
  { id: nanoid(), page: "product", link: "/" },
  { id: nanoid(), page: "about us", link: "/" },
  { id: nanoid(), page: "careers", link: "/" },
  { id: nanoid(), page: "community", link: "/" },
  { id: nanoid(), page: "privacy policy", link: "/" },
];

export const aboutUsDataLocal = [
  {
    id: nanoid(),
    number: "01",
    title: "Track company-wide progress",
    text: `See how your day-to-day tasks fit into the wider vision. Go from 
  tracking progress at the milestone level all the way done to the 
  smallest of details. Never lose sight of the bigger picture again.`,
  },
  {
    id: nanoid(),
    number: "02",
    title: "Advanced built-in reports",
    text: `Set internal delivery estimates and track progress toward company
    goals. Our customisable dashboard helps you build out the reports
    you need to keep key stakeholders informed.`,
  },
  {
    id: nanoid(),
    number: "03",
    title: "Everything you need in one place",
    text: `Stop jumping from one service to another to communicate, store files,
    track tasks and share documents. Manage offers an all-in-one team
    productivity solution.`,
  },
];

export const reviewsData = [
  {
    id: nanoid(),
    name: "Anisha Li",
    text: "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
    img: "/images/avatar-anisha.png",
  },
  {
    id: nanoid(),
    name: "Ali Bravo",
    text: "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
    img: "/images/avatar-ali.png",
  },
  {
    id: nanoid(),
    name: "Richard Watts",
    text: "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
    img: "/images/avatar-richard.png",
  },
  {
    id: nanoid(),
    name: "Shanai Gough",
    text: "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
    img: "/images/avatar-shanai.png",
  },
];

export const socialLinksData = [
  { id: nanoid(), icon: <FaFacebookF />, link: "/" },
  { id: nanoid(), icon: <FaYoutube />, link: "/" },
  { id: nanoid(), icon: <FaTwitter />, link: "/" },
  { id: nanoid(), icon: <FaPinterest />, link: "/" },
  { id: nanoid(), icon: <FaInstagram />, link: "/" },
];
