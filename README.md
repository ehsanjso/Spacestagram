# Spacestagram

**Front End Developer Intern Challenge - Summer 2022**

## Run locally

You're going to need a NASA api key that you can get for free at <https://api.nasa.gov/>

1. Create a file at the root of the project named `.env`
2. Add your api key to the file as follows `REACT_APP_NASA_KEY=<YOUR_API_KEY>`
3.

```bash
# If you use yarn
yarn
yarn start
```

```bash
# If you use npm
npm i
npm run start
```

## Technologies and Design choices

This project is mainly built with React and Tailwind.
Tailwind is a utility first framework which is really helpful when you want to develope projects fast and reliable. The best part is you do everything inside yoru jsx files, and yet your code will not be messy. Also, having the option to easily implement dark mode for projects is a most.

Also, for the accessibility I went through [react docs](https://reactjs.org/docs/accessibility.html), and used "eslint-plugin-jsx-a11y." Besides, I used the [WebAIM WAVE](https://wave.webaim.org/extension/)
to test accessibility in the browser.
