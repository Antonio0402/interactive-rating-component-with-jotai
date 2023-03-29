# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Mobile Design](./screenshots/mobile-design.png)
![Desktop Design](./screenshots/desktop-design.png)
![Thank you Modal](./screenshots/thank-you-modal.png)

### Links

- Solution URL: [Click here](https://github.com/Antonio0402/interactive-rating-component-with-jotai)
- Live Site URL: [Click here](https://interactive-rating-component-jotai.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Typescript
- [React](https://reactjs.org/) - JS library
- [Tailwindcss](https://tailwindcss.com) - Tailwindcss

### What I learned

- Create a component from scratch using React JS and styling seperated components with all CSS using utilities classes first approach;
- Using third-party react's state management to handle the state of interactive button
- Using conditional react's to selective openning a modal component
- Applying typescript for a safety checking and consistent of react's types

To see how you can add code snippets, see below:

```js
import { atom } from "jotai";

export const modalAtom = atom<boolean>(false);
export const rateAtom = atom<string>('');
...

const isShow = useAtomValue(modalAtom);
const [rate] = useAtomValue(rateAtom);
```

### Continued development

- I am going to keep trying to have a good grasp of using Tailwinds class in advanced projects.
- Striving to optimizing the react's state flow throught the re-renders and decrease the javascript bundlesize by using effective external data fetching features in the future projects.

### Useful resources

- [Tailwind CSS](https://tailwindcss.com/)
- [Jotai](https://jotai.org/)
- [React State Management - Jack Herrington](https://youtu.be/-bEzt5ISACA)

## Author

- Frontend Mentor - [@Antonio0402](https://www.frontendmentor.io/profile/Antonio0402)

## Acknowledgments

So much thanks specially to Jack Herrington Youtube Chanel for absolute amazing and thoroughly knowledges about how React TS works as well as best practises for using React like pro so that we can avoid such mistakes throught examples.
