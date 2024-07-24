document.addEventListener('DOMContentLoaded', function() {
    var numberElement = document.getElementById('number');
    var incrementButton = document.getElementById('incrementButton');

    var count = 0;

    incrementButton.addEventListener('click', function() {
        count++;
        numberElement.textContent = count;
    });
});
