//Navar data types
export interface NavLink {
  name: string;
  path: string;
  subLinks?: NavLink[];
}


// Interface for Testimonial data
export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  designation: string;
  imageUrl: string; // Optional for image support
}

