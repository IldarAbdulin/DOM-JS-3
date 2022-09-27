let articleNode = document.querySelector('article');

let shallowCopy = articleNode.cloneNode(false);
let deepCopy = articleNode.cloneNode(true);

document.body.append(shallowCopy)
document.body.append(deepCopy)