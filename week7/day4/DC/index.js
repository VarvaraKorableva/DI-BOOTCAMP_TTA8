const API_KEY = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const searchForm = document.getElementById('searchForm');
const gifContainer = document.getElementById('gifContainer');

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchInput = document.getElementById('searchInput').value;
    const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${searchInput}`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const gifUrl = data.data.images.original.url;
        
        const gifElement = document.createElement('div');
        const imgElement = document.createElement('img');
        imgElement.src = gifUrl;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            gifElement.remove();
        });

        gifElement.appendChild(imgElement);
        gifElement.appendChild(deleteButton);
        gifContainer.appendChild(gifElement);
    } catch (error) {
        console.error('Error fetching GIF:', error);
    }
});

const deleteAllButton = document.createElement('button');
deleteAllButton.textContent = 'Delete All';
deleteAllButton.addEventListener('click', () => {
    gifContainer.innerHTML = '';
});
document.body.appendChild(deleteAllButton);