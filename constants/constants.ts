import type { NavLink, Testimonial } from "@/types/types";

export const navLinks: NavLink[] = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  {
    name: "Study Distenation",
    path: "/study-distenation",
    subLinks: [
      { name: "USA", path: "/study-distenation/usa" },
      { name: "UK", path: "/study-distenation/uk" },
      { name: "Canada", path: "/study-distenation/canada" },
    ],
  },
  {
    name: "Gallery",
    path: "/gallery",
    subLinks: [
      { name: "Photos", path: "/gallery/photos" },
      { name: "Videos", path: "/gallery/videos" },
    ],
  },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact Us", path: "/contact-us" },
];


// Application process

export const applicationProcess = [
  { id:1,icon: "/icons/AppProcess/list.png", content: "Clients profile review" },
  { id:2,icon: "/icons/AppProcess/onboarding.png", content: "Onboarding meeting" },
  { id:3,icon: "/icons/AppProcess/wpf_search.png", content: "University Search" },
  {
    id:4,icon: "/icons/AppProcess/cv.png",
    content: "Purposes,cv review and edit",
  },
  { id:5,icon: "/icons/AppProcess/university_short.png", content: "University Shortlist" },
  { id:6,icon: "/icons/AppProcess/university_app.png", content: "University Application" },
  { id:7,icon: "/icons/AppProcess/arranging.png", content: "Arranging Mock Interview" },
  { id:8,icon: "/icons/AppProcess/list.png", content: "Visa application for submission" },
];

// popular universites Items

export const popularUniversities = [
  {
    id:1,
    logo: "/icons/popular-universites/logo1.png",
    content: "University of Connecticut, Connecticut,(Public Ivy)",
  },
  {
    id:2,
    logo: "/icons/popular-universites/logo2.png",
    content: "Arizona State University, Phoenix, Arizona",
  },
  {
    id:3,
    logo: "/icons/popular-universites/logo3.png",
    content: "University of California, Riverside, California ",
  },
  {
    id:4,
    logo: "/icons/popular-universites/logo2.png",
    content: "Arizona State University, Phoenix, Arizona",
  },
  {
    id:5,
    logo: "/icons/popular-universites/logo1.png",
    content: "University of Connecticut, Connecticut,(Public Ivy)",
  },
  {
    id:6,
    logo: "/icons/popular-universites/logo3.png",
    content: "University of California, Riverside, California",
  },
];

// Usa at a glance cards data

export const usa_at_glance_data = [
  {
    id: 1,
    title: "Course Duration",
    content: ["4 Years (Bachelor's)", "2 Years (Master's)"],
  },
  {
    id: 2,
    title: "Intake",
    content: ["January, May, September"],
  },
  {
    id: 3,
    title: "Application Fee",
    content: ["40 to 200 (USD)"],
  },
  {
    id: 4,
    title: "Requirements",
    content: ["GRE/GMAT + IELTS/TOEFL/PTE", "Academics-Above 55%"],
  },
  {
    id: 5,
    title: "Language Proficiency",
    content: ["IELTS-6+, TOEFL-70+", "Duolingo-90+, PTE-50+"],
  },
  {
    id: 6,
    title: "Tuition Fee (Yearly)",
    content: ["10000 To 55000 (USD)"],
  },
  {
    id: 7,
    title: "Living Cost (Yearly)",
    content: ["10000 To 18000 (USD)"],
  },
  {
    id: 8,
    title: "Visa Application",
    content: ["160(USD)", "SEVIS Fee 350 (USD)"],
  },
  {
    id: 9,
    title: "Air Ticket",
    content: ["100000 To 150000 (BDT)"],
  },
  {
    id: 10,
    title: "Processing Time",
    content: ["9-12 Months"],
  },
  {
    id: 11,
    title: "Part Time Work",
    content: ["20 Hrs (per Week)"],
  },
  {
    id: 12,
    title: "Post Study Work Permit",
    content: [
      "12 Month For All Programs",
      "12 Month+ 24 Months Extension For STEM (Science, Tech, Engg & Maths)",
    ],
  },
];


// Testimonials


// Sample testimonial data (replace with your actual data)
export const testimonials: Testimonial[] = [
  {
    id: 1,
       quote: "This is a great product! It has helped me improve my workflow significantly.",
    author: "Robbert",
    designation: "CTO, Robert Consultency",
    imageUrl: "/assets/testimonials/avatar1.png",
  },
  {
    id: 2,
    quote: "This is a great product! It has helped me improve my workflow significantly.",
    author: "Jane Doe",
    designation: "Marketing Manager, Acme Inc.",
    imageUrl: "/assets/testimonials/avatar2.png",
  },
  {
    id: 3,
    quote: "I highly recommend this service to anyone looking for a reliable solution.",
    author: "John Smith",
    designation: "CEO, Smith Enterprises",
    imageUrl: "/assets/testimonials/avatar3.png",
  },
];

// Carousel Items


export const carouselItems = [
  {
    id: 1,
    name: "John Doe",
    university: "Harvard University",
    image: "/assets/students_speak/card1.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    university: "Stanford University",
    image: "/assets/students_speak/card2.png",
  },
  {
    id: 3,
    name: "Alice Johnson",
    university: "Massachusetts Institute of Technology (MIT)",
    image: "/assets/students_speak/card3.png",
  },
  {
    id: 4,
    name: "Bob Brown",
    university: "University of California, Berkeley",
    image: "/assets/students_speak/card2.png",
  },
  {
    id: 5,
    name: "Charlie Lee",
    university: "University of Oxford",
    image: "/assets/students_speak/card1.png",
  },
  {
    id: 6,
    name: "David Kim",
    university: "University of Cambridge",
    image: "/assets/students_speak/card3.png",
  },
];