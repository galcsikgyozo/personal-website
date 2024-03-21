<img src="https://gyozo.me/opengraph-image.jpg" alt="Payload headless CMS website" />

This is the repository for my personal website. It was built completely in public, and open source. <br />
You can see the website live at [https://gyozo.me](https://gyozo.me).

Normally I cannot share the source code of my client projects for obvious privacy reasons. However, I have decided to make an exception for my personal website, so that people can see how I write code and how I structure my projects as a web developer.

## Tech stack

- Next.js 14 using the App Router
- TypeScript
- Tailwind CSS
- SCSS for custom styles
- clsx and twMerge for conditional classes
- React Wrap Balancer because the native `text-wrap: balance` is still not supported in Safari
- Prettier & ESLint for code formatting
- PurgeCSS & cssnano for optimizing stylesheet files
- @studio-freight/lenis package for smooth scrolling

## Running the project locally

- Clone the repository
- Run `npm install` to install the dependencies
- Copy the `.env.example` file to `.env` and fill in the necessary environment variables
- Run `npm run dev` to start the development server

### License

This website is available as open source under the terms of the [MIT license](https://github.com/galcsikgyozo/personal-website/blob/main/LICENSE.md).
