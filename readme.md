# video-canvas

> Paint video on canvas. Extra light.

[![gzipped size](https://badges.herokuapp.com/size/github/fregante/video-canvas/master/dist/video-canvas.browser.js?gzip=true&label=gzipped%20size)](#readme)
[![Travis build status](https://api.travis-ci.org/fregante/video-canvas.svg?branch=master)](https://travis-ci.org/fregante/video-canvas)
[![gzipped size](https://img.shields.io/npm/v/video-canvas.svg)](https://www.npmjs.com/package/video-canvas)

`video-canvas` will take care of painting a video on canvas for you. In the easiest of setups, you provide a video and you get a correctly-sized self-updating `canvas` ready to be used.

Features:

- It automatically starts and pauses painting with `video.play()` and `video.pause()`.
- If the video is paused or in a background tab, nothing is painted.
- It automatically creates a `canvas` element from your video (optional).
- It automatically resizes the canvas to match your video (optional).

## Install

```sh
npm install --save video-canvas
```

```js
var videoCanvas = require('video-canvas');
```

```js
import videoCanvas from 'video-canvas';
```

## Usage

Simple usage:

```js
const video = document.querySelector('video');
const canvas = videoCanvas(video); // returns the <canvas> element
document.body.appendChild(canvas)
video.play();
video.pause();
```

Provide your own canvas:

```js
videoCanvas(video, {
	canvas: document.querySelector('.your-own-canvas'),
});
```

By default, `video-canvas` will automatically match the canvas size to the video size, whenever that changes. If you want to prevent this behavior, pass `updateSize: false`

```js
const canvas = videoCanvas(video, {
	updateSize: false
});
```

If you want to customize the draw call, pass your drawing function as `drawCall`

```js
const canvas = videoCanvas(video, {
	drawCall: function (ctx, video) {
		ctx.drawImage(video, 0, 0, 100, 100)
	}
});
```

## Dependencies

No dependencies.

## Related

* [`get-media-size`](https://github.com/fregante/get-media-size): get the real size of any media: images, videos, canvas and canvas' contexts
* [`iphone-inline-video`](https://github.com/fregante/iphone-inline-video): You don't need canvas to play video inline on the iPhone

## License

MIT © [Federico Brigante](https://bfred.it)
