    const batteryInput = document.getElementById('batteryInput');
    const checkPercentBtn = document.getElementById('checkPercent');
    const percentResult = document.getElementById('checkResult');

    checkPercentBtn.addEventListener('click', () => {
        const percent = Number(batteryInput.value);
         if (isNaN(percent)) {
            percentResult.textContent = 'Please enter your percentage.';
            percentResult.style.color = 'crimson';
            return;
            }
            if (percent <= 20) {
                percentResult.textContent = `Your battery is low at ${percent}%.`;
                percentResult.style.color = 'red';
            } else {
                percentResult.textContent = `Your battery is sufficient at ${percent}%.`;
                percentResult.style.color = 'blue';
            }
        });

    // Example 2: Switch Statement - Choose a Weather Condition
    document.getElementById("showActivity").addEventListener("click", function() {
        let category = document.getElementById("activitySelect").value;
        let result = document.getElementById("activityResult");

    switch (category.toLowerCase()) {
        case 'sunny':
            result.textContent = 'It\'s sunny! A great day for outdoor activities like hiking or a picnic.'; 
            result.style.color = 'orange';
            break;

        case 'rainy':
            result.textContent = 'It\'s rainy! Perfect time to stay indoors and read a book or watch a movie.'; 
            result.style.color = 'blue';
            break;

        case 'cloudy':
            result.textContent = 'It\'s cloudy! A nice day for a walk in the park or visiting a museum.'; 
            result.style.color = 'gray';
            break;

        case 'snowy':
            result.textContent = 'It\'s snowy! Enjoy winter sports like skiing or building a snowman.'; 
            result.style.color = 'lightblue';
            break;

        case 'windy':
            result.textContent = 'It\'s windy! A good day to fly a kite or enjoy a breezy walk.'; 
            result.style.color = 'lightgray';
            break;

        default:
            result.textContent = 'Weather condition not recognized. Please enter sunny, rainy, cloudy, or snowy.'; 
            result.style.color = 'crimson';
            break;
    }
    });

    document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("wordInput");
    const button = document.getElementById("checkWord");
    const result = document.getElementById("wordResult");

    button.addEventListener("click", function () {
        const word = input.value.trim();

        if (word === "") {
            result.textContent = "Please enter a word first!";
            return;
        }

        // Count letters using a loop
        let count = 0;
        for (let i = 0; i < word.length; i++) {
            count++;
        }

        result.textContent = `The word "${word}" has ${count} letters.`;
    });
});
