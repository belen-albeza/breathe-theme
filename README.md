# Breathe

**Breathe** is a minimalist theme for the Ghost blogging platform. Mostly a derivative of the [Zen Habit's theme `zh2`](http://zenhabits.net/theme/), which is uncopyrighted.

[![Preview](/screenshot-preview.png?raw=true)](/screenshot.png?raw=true)

## Installation

This theme works with **Ghost 0.6** or newer.

If you are using [Ghost.org](http://ghost.org)'s Pro platform, follow the instructions at [http://support.ghost.org/upload-theme-ghostpro/](http://support.ghost.org/upload-theme-ghostpro/).

If you are hosting your own Ghost installation, follow these steps:

1. Go to the [releases page](https://github.com/belen-albeza/breathe-theme/releases) and download the latest release.
2. If you are hosting your own Ghost installation, unzip the tarball file into `content/themes/`.
3. Restart Node. How you do this will depend on your actual server setup.
4. Login into your blog, go to `Settings` and pick up `breathe-theme` from the `Theme` dropdown.

## Configuration

It is recommended that you configure the `posts per page` setting to `1`.

You can create a menu and it will be displayed at the top, near the blog's title.

This theme does _not_ display:

- Links to author pages
- Tags
- Post cover images
- Blog cover images
- Authors' avatars

## Changelog

- **1.0.1**
  - Fix pagination showing up in static pages
- **1.0.0**
  - First version

## Development

If you want to play around, you'll need:

- Node
- Gulp (`npm install -g gulp`)

Install the required packages with:

```
npm install
```

You can build a release with:

```
gulp
```

You can have a daemon watching for changes in the Less files and recompiling them with:

```
gulp watch
```
