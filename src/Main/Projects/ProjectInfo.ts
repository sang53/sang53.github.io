export const projects: Project[] = [
  {
    title: "Shopping Page",
    img: [
      "/images/shopping/shopping-home.webp",
      "/images/shopping/shopping-category.webp",
      "/images/shopping/shopping-category-product.webp",
      "/images/shopping/shopping-products.webp",
      "/images/shopping/shopping-product-info.webp",
      "/images/shopping/shopping-cart.webp",
      "/images/shopping/shopping-error.webp",
      "/images/shopping/shopping-mobile.webp",
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
      "/images/pokemon/pokemon-start.webp",
      "/images/pokemon/pokemon-game.webp",
      "/images/pokemon/pokemon-end.webp",
      "/images/pokemon/pokemon-mobile.webp",
    ],
    info: "A memory game using Pokémon data from PokéAPI. Select the Pokédex and game settings, then try to choose as many different Pokémon as you can. High score is tracked across games, with all-time high score stored in local storage.",
    technologies: ["React", "REST API", "Vite"],
    links: {
      src: "https://github.com/sang53/PokemonGame",
      deploy: "/PokemonGame",
    },
  },

  {
    title: "Battleships",
    img: [
      "/images/battleship/battleship-start.webp",
      "/images/battleship/battleship-place.webp",
      "/images/battleship/battleship-battle.webp",
      "/images/battleship/battleship-end.webp",
      "/images/battleship/battleship-mobile.webp",
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
      "/images/spheres3d/sphere3d-black.webp",
      "/images/spheres3d/sphere3d-white.webp",
      "/images/spheres3d/sphere3d-mobile.webp",
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
