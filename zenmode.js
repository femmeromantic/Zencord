const style = document.createElement('style');

const css = `
[class^="subtitleContainer"], 
[class^="content"] > [class*="container"], 
[class^="wrapper"][class*="guilds"], 
[class^="sidebar"], 
[class^="channelAppLauncher"], 
[class^="buttons"] {
    display: none !important;
}`;

let isHidden = false;

function toggleCSS() {
    if (isHidden) {
        style.remove();
    } else {
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);
    }
    isHidden = !isHidden;
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'F2') {
        toggleCSS();
    }
});
