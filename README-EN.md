# gulp-build

<h2>Description</h2>

gulp-build is a build for building static html sites. At the heart of gulp-build is the gulp task-runner and the wepback module builder.<br/>
This documentation was created to clarify points that are not sufficiently highlighted in the comments of the gulpfile.js file.

<h2>How to start</h2>

<h3>Dev mode</h3>
To run a build in development mode:

```
npm start
```

<h3>Production mode</h3>
To run a build in production mode:

```
npm run build
```

<h2>Tasks<h2>
<ul>
  <li>Minifies images and converts them to webp</li>
  <li>Converts sass code to css and minifies it</li>
  <li>Automatically places cross-browser prefixes</li>
  <li>Builds JS modules using webpack</li>
</ul>
  
