// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'Temporary',
		slug: 'temp',
		html: `
			<p>Man I need to start something from scratch</p>
		`
	},
	{
		title: 'Rather than',
		slug: 'rather-than',
		html: `
			<p>Rather than just another website. A personal tool. User experience and a back office for me?</p>
			<p>Or just write</p>
		`
	},
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
