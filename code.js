document.addEventListener('DOMContentLoaded', function () {
	console.log('code.js loaded');

	// Simple theme toggle handler used by the examples.
	// Buttons with [data-bs-theme-value] will set the document theme.
	var themeButtons = document.querySelectorAll('[data-bs-theme-value]');
	themeButtons.forEach(function (btn) {
		btn.addEventListener('click', function () {
			var v = btn.getAttribute('data-bs-theme-value');
			try {
				document.documentElement.setAttribute('data-bs-theme', v);
				// update aria-pressed states
				themeButtons.forEach(function (b) {
					b.classList.toggle('active', b === btn);
					b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
				});
			} catch (e) {
				console.warn('Could not set theme', e);
			}
		});
	});
});
