function openNav() {
          document.getElementById("sidebar").style.width = "100%";
      }

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "5px";
}

function getLinks() {
  fetch('pages.json')
    .then(response => response.json())
    .then(files => {
      const links = document.getElementById('links');
      files.forEach(file => {
        const link = document.createElement('a');
        link.href = `pages/${file}`;
        link.textContent = file.replace('.html', '');
        links.appendChild(link);
      });
    })
    .catch(error => document.getElementById("Err").innerHTML = error.message);
}

function getLinks_fromPages() {
  fetch('../pages.json')
    .then(response => response.json())
    .then(files => {
      const links = document.getElementById('links');
      files.forEach(file => {
        const link = document.createElement('a');
        link.href = `${file}`;
        link.textContent = file.replace('.html', '');
        links.appendChild(link);
      });
    })
    .catch(error => document.getElementById("Err").innerHTML = error.message);
}
