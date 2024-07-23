const startButton = document.getElementById('generate-grid');

startButton.addEventListener('click', function () {
    const gridContainer = document.getElementById('grid-container');
    gridContainer.innerHTML = '';

    for (let i = 1; i <= 100; i++) {
        const newCell = document.createElement('div');
        newCell.innerHTML = i;

        newCell.addEventListener('click', function () {
            this.classList.add('clicked');
            console.log(this.innerHTML);
        });

        gridContainer.append(newCell);
    }
});
