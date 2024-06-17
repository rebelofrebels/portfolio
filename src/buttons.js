const page2 = document.getElementById('page2btn');

page2.addEventListener('click', await switchPage('page2.html'));

async function switchPage(newUrl){
    window.location.replace(newUrl);
};