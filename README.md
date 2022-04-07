# Frontend Mentor - Launch countdown timer solution
This is a solution to the launch countdown timer challenge on frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects

## Table of contents
- Overview
  - The challenge
  - Screenshot
  - Links
- My process
  - Built with
  - What I Learnt
  - Continued development
  - Useful resources
- Author


## Overview

### The challenge

Users should be able to:
  - See hover states for all interactive elements on the page
  - See a live countdown timer that ticks down every second (start the count at 14 days)
  - Bonus: When a number changes, make the card flip from the middle

### Screenshot
![Solution screenshot](https://github.com/Rex-xx-glitch/launchTimer/blob/main/solution.png?raw=true)

### Links
- Solution URL: https://github.com/Rex-xx-glitch/launchTimer
- Live Site URL: https://rexer-glitch.github.io/launchTimer

## My process
### Built with
  - HTML5 
  - SCSS
  - CSS Flexbox
  - Mobile-first workflow

### What I learnt

- Scss - this was my first time using scss, this is a very powerful extension of css
  - Mixin
    ```
    @mixin align-center{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    ```
  - Nesting - I really love this feature..
   ```
   .container {
      width: 100%;
      .inner-container{
        background: red;
      }
   }
   ```
- 3D CSS - Knowledge of 3D css was required for me to achieve the Bonus card flip from the middle
  ```
  .digit {
    perspective: 1000px;
  }
  
  .card{
    transform-style: preserve-3d;
    transform-origin: bottom;
    transform: rotateX(-180deg);
    
    transition: transform .25s ease-in-out;
  }
   ```
### Continued development
- I'm still not comfortable with 3D css and transforms
- I have to refine my scss

### Useful resources
- [Sass Tutorial for Beginners - CSS With Superpowers](https://www.youtube.com/watch?v=_a5j7KoflTs) - this video from freecodecamp, really helped me get a grasps of scss, though it was really easy for me since I am already familiar with styled-components which have a similar setup

## Author
  - Raymac Antony Gumbo
  - Frontend Mentor - @Rex-xx-glitch
  - Twitter - @GumAntony
