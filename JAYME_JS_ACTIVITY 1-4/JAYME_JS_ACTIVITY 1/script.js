let count = 0;

const countDisplay = document.getElementById('count');
const countButton = document.getElementById('countButton');

countButton.addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;

    
    console.log('clicked:', count);
});