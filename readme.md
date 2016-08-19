# video-canvas

> Paint video on canvas. Extra light.

[![gzipped size](https://badges.herokuapp.com/size/github/bfred-it/video-canvas/master/dist/video-canvas.browser.js?gzip=true&label=gzipped%20size)](#readme)
[![Travis build status](https://api.travis-ci.org/bfred-it/video-canvas.svg?branch=master)](https://travis-ci.org/bfred-it/video-canvas)
[![gzipped size](https://img.shields.io/npm/v/video-canvas.svg)](https://www.npmjs.com/package/video-canvas) 

`video-canvas` will take care of painting a video on canvas for you. In the easiest of setups, you provide a video and you get a correctly-sized self-updating canvas ready to be used.

`video-canvas` starts and pauses painting together with the video. If the video is playing, the canvas will be painted, otherwise nothing will be running.

## Install

```sh
npm install --save video-canvas
```

```js
import videoCanvas from 'video-canvas';
```

## Usage

Simple usage:

```js
const video = document.querySelector('video');
const canvas = videoCanvas(video);
video.play();
video.pause();
```

Provide your own canvas:

```js
const canvas = videoCanvas(video, {
	canvas: document.querySelector('.your-own-canvas'),
});
```

By default, `video-canvas` takes care of matching the canvas size to the video size. If you want to prevent this behavior, pass `updateSize: false`

```js
const canvas = videoCanvas(video, {
	updateSize: false
});
```

If you want to make a custom draw call, pass a function as `drawCall`

```js
const canvas = videoCanvas(video, {
	drawCall: function (ctx, video) {
		ctx.drawImage(video, 0, 0, 100, 100)
	}
});
```

## Dependencies

No dependencies.

## License

MIT © [Federico Brigante](http://twitter.com/bfred_it)
