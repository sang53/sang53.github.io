export const projects: Project[] = [
  {
    title: "Shopping Page",
    img: [
      "/images/shopping/shopping-home.jpg",
      "/images/shopping/shopping-category.jpg",
      "/images/shopping/shopping-category-product.jpg",
      "/images/shopping/shopping-products.jpg",
      "/images/shopping/shopping-product-info.jpg",
      "/images/shopping/shopping-cart.jpg",
      "/images/shopping/shopping-mobile.jpg",
    ],
    info: "A demo shopping site made using data from Fake Store API. Search products by category or name, put desired quantity into shopping cart, and checkout after confirming purchase details. Uses React Context for persistent cart across multiple routes. Carousel on landing page to display products.",
    technologies: [
      "React",
      "React Router",
      "Vite",
      "Vitest",
      "React Testing Library",
      "CSS Modules",
      "REST API",
    ],

    links: {
      src: "https://github.com/sang53/ShoppingPage",
      deploy: "/ShoppingPage",
    },
  },
  {
    title: "Pokémon Memory Game",
    img: [
      "/images/pokemon/pokemon-start.jpg",
      "/images/pokemon/pokemon-game.jpg",
      "/images/pokemon/pokemon-end.jpg",
      "/images/pokemon/pokemon-mobile.jpg",
    ],
    info: "A memory game using Pokémon data from PokéAPI. Select the pokédex and game settings, then try to choose as many different pokémon as you can. High score is tracked across games, with all-time high score stored in local storage.",
    technologies: ["React", "REST API", "Vite"],
    links: {
      src: "https://github.com/sang53/PokemonGame",
      deploy: "/PokemonGame",
    },
  },

  {
    title: "Battleships",
    img: [
      "/images/battleship/battleship-start.jpg",
      "/images/battleship/battleship-place.jpg",
      "/images/battleship/battleship-battle.jpg",
      "/images/battleship/battleship-end.jpg",
      "/images/battleship/battleship-mobile.jpg",
    ],
    info: "Browser remake of the Battleships game. Supports single player vs cpu, as well as tag-in multiplayer. Custom AI which targets adjacent squares, with correct orientation if multiple hits on same ship.",
    technologies: ["Javascript", "CSS", "HTML", "Webpack"],
    links: {
      src: "https://github.com/sang53/battleships",
      deploy: "/battleships",
    },
  },
  {
    title: "Spheres3D Background",
    img: [
      "/images/spheres3d/sphere3d-black.jpg",
      "/images/spheres3d/sphere3d-white.jpg",
    ],
    info: "3D background created for my portfolio. Hundreds of spheres are generated at random positions and move towards the camera while changing colours. Spheres move toward the cursor mimicking gravity. A spotlight points in the direction of the cursor for added interactivity.",
    technologies: ["Three.js", "React-Three-Fiber", "Typescript", "React"],
    links: {
      src: "https://github.com/sang53/Spheres3D",
      deploy: "/Spheres3D",
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
