const environmentUrls = new Map();

environmentUrls.set('localhost', 'http://localhost:8080');
environmentUrls.set('book-store-client-demo-vk.herokuapp.com', 'https://book-store-demo-vk.herokuapp.com/');

export default environmentUrls.get(window.location.hostname);