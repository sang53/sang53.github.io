**Background:**

- 3D background using threejs, react-three-fiber
- Spheres 3D project previously made while learning libraries
- position sticky with z-index: -1 to keep in background while scrolling

**Header:**

- Typical position: sticky header for navigation
- Will scroll page on link click instead -> might make it harder to implement currently active button
- Have an option to turn off 3D graphics
- Light mode & Dark mode toggle button

**Landing Page:**

- Main page => will contain all relevant information to be scrolled through
- Each section will have min-height 100vh for cleaner look & demarcation
- proximity scroll snap to ease of use
- Maybe add different animations for each section -> fading in & out, translate from out of screen, typing effect, etc

**Sections:**

- Landing Area:
  - Brief welcome to site
  - Keep minimal to show off backgournd
- Introduction:
  - Information about myself
  - Who I am, What I've done, What I want
- Technologies:
  - List of technologies
  - Have Icons for easy to view at a glance
  - Hover over to reveal name & brief explanation of the library/technology
  - Animation on scroll - appear from side & disappear again
- Projects:

  - List of Projects
  - Maybe alternate picture & information sides (but if too hard to follow, just keep on one side)
  - Images/Gif
    - Hover over image to go through slideshow OR start gif
    - images link to deployed versions
  - Information:

    - Title
    - Brief information about functionality
    - Technologies/major libraries used
    - github source and deploy links
