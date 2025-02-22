export const projects: Project[] = [
  {
    title: "Battleships",
    img: [
      "/images/poke/pokemon-png.png",
      "/images/poke/poke-game-png.png",
      "/images/poke/pokemon-jpeg.jpg",
      "/images/poke/poke-game-jpeg.jpg",
    ],
    info: "Web browser remake of popular Battleships game. Single & 2 player modes",
    technologies: ["javascript", "css", "html"],
    links: {
      src: "#",
      deploy: "#",
    },
  },
  {
    title: "Pokemon Memory Game",
    img: [
      "/images/poke/pokemon-png.png",
      "/images/poke/poke-game-png.png",
      "/images/poke/pokemon-jpeg.jpg",
      "/images/poke/poke-game-jpeg.jpg",
    ],
    info: "Pick pokemon without choosing the same one twice. Set which pokedex to choose from",
    technologies: ["react", "css modules", "REST API"],
    links: {
      src: "#",
      deploy: "#",
    },
  },
  {
    title: "Fake Shopping Page",
    img: [
      "/images/poke/pokemon-png.png",
      "/images/poke/poke-game-png.png",
      "/images/poke/pokemon-jpeg.jpg",
      "/images/poke/poke-game-jpeg.jpg",
    ],
    info: "Find items by category or product id. Add desired quantity to cart. Checkout selected items on the cart page",
    technologies: [
      "react",
      "react-router",
      "vitest",
      "react-testing-library",
      "css modules",
      "REST API",
    ],

    links: {
      src: "#",
      deploy: "#",
    },
  },
  {
    title: "Spheres3D background",
    img: [
      "/images/poke/pokemon-png.png",
      "/images/poke/poke-game-png.png",
      "/images/poke/pokemon-jpeg.jpg",
      "/images/poke/poke-game-jpeg.jpg",
    ],
    info: "Background with 200 colourful 3D spheres that slowly move towards the cursor",
    technologies: ["threejs", "react-three-fiber", "Typescript", "react"],
    links: {
      src: "#",
      deploy: "#",
    },
  },
] as const;

export interface Project {
  title: string;
  img: string[];
  info: string;
  technologies: string[];
  links: { src: string; deploy: string };
}
