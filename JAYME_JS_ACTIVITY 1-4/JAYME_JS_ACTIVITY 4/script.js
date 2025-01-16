
const startDateInput = document.getElementById('startDate');
const endDateInput = document.getElementById('endDate');
const calculateButton = document.getElementById('calculateButton');
const result = document.getElementById('result');


calculateButton.addEventListener('click', () => {
    const startDate = new Date(startDateInput.value);
    const endDate = new Date(endDateInput.value);

    
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        result.textContent = 'Please select valid dates.';
        result.style.color = 'red';
        return;
    }

    
    const timeDifference = endDate.getTime() - startDate.getTime();
    const dayDifference = timeDifference / (1000 * 60 * 60 * 24);

    if (dayDifference < 0) {
        result.textContent = 'End date must be after the start date.';
        result.style.color = 'red';
    } else {
        result.textContent = `The difference is ${dayDifference} days.`;
        result.style.color = 'black';
    }
});
