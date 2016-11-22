import Intervalometer from './lib/intervalometer';

export default (video, opts = {}) => {
	const canvas = opts.canvas || document.createElement('canvas');
	const ctx = canvas.getContext('2d');

	const drawCall = opts.drawCall || function () {
		ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
	};

	if (opts.updateSize !== false) {
		const updateSize = () => {
			canvas.width = video.videoWidth;
			canvas.height = video.videoHeight;
		};
		video.addEventListener('loadedmetadata', updateSize);
		updateSize();
	}

	const updater = new Intervalometer(() => drawCall(ctx, video));
	video.addEventListener('play', updater.start);
	video.addEventListener('pause', updater.stop);
	video.addEventListener('error', updater.stop);
	if (!video.paused) {
		updater.start();
	}
	return canvas;
};
