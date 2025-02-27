export const projects: Project[] = [
  {
    title: "Battleships",
    img: [
      "/images/battleship/battleship-start.jpg",
      "/images/battleship/battleship-place.jpg",
      "/images/battleship/battleship-battle.jpg",
      "/images/battleship/battleship-end.jpg",
      "/images/battleship/battleship-mobile.jpg",
    ],
    info: "Browser remake of the Battleships game. Supports single player vs cpu, as well as tag-in multiplayer",
    technologies: ["javascript", "css", "html"],
    links: {
      src: "https://github.com/sang53/TheOdinProject/tree/main/battleship",
      deploy:
        "https://sang53.github.io/TheOdinProject/battleship/dist/index.html",
    },
  },
  {
    title: "Pokemon Memory Game",
    img: [
      "/images/pokemon/pokemon-start.jpg",
      "/images/pokemon/pokemon-game.jpg",
      "/images/pokemon/pokemon-end.jpg",
      "/images/pokemon/pokemon-mobile.jpg",
    ],
    info: "A memory game using Pokemon data from PokeAPI. Select the pokedex and game settings, then try to select as many different pokemon as you can. High score is tracked across games",
    technologies: ["react", "css modules", "REST API"],
    links: {
      src: "https://github.com/sang53/pokemon-memory-game",
      deploy: "https://sang53-pokemon-memory.netlify.app/",
    },
  },
  {
    title: "Fake Shopping Page",
    img: [
      "/images/shopping/shopping-home.jpg",
      "/images/shopping/shopping-category.jpg",
      "/images/shopping/shopping-category-product.jpg",
      "/images/shopping/shopping-products.jpg",
      "/images/shopping/shopping-product-info.jpg",
      "/images/shopping/shopping-cart.jpg",
      "/images/shopping/shopping-mobile.jpg",
    ],
    info: "A demo shopping site made using data from Fake Store API. Search products by category or name, put desired quantity into shopping cart, and checkout after confirming purchase details. Carousel on landing page to display products.",
    technologies: [
      "react",
      "react-router",
      "vitest",
      "react-testing-library",
      "css modules",
      "REST API",
    ],

    links: {
      src: "https://github.com/sang53/FakeShop",
      deploy: "https://fake-shop-site.netlify.app/",
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
    info: "3D background created for my portfolio. 250 spheres are generated at random positions and move towards the camera while changing colours. Spheres move toward the cursor mimicking gravity. A spotlight points in the direction of the cursor for added interactivity.",
    technologies: ["threejs", "react-three-fiber", "Typescript", "react"],
    links: {
      src: "https://github.com/sang53/Learn-threejs",
      deploy: "https://spheres3d.netlify.app/",
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
