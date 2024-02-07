const startDate = new Date('1950-05-13T17:00:00Z'); // 17 UTC = Noon EST

function roundToDecimalPlaces(num, places) {
    const factor = Math.pow(10, places);
    return Math.round(num * factor) / factor;
  }

function updateTime() {
    var endDate = new Date();
    var differenceInMilliseconds = endDate - startDate;
    var seconds = (differenceInMilliseconds / 1000);
    var minutes = (seconds / 60);
    var hours = (minutes / 60);
    var days = (hours / 24);
    var weeks = (days / 7);
    var months = (weeks / 4.34524);
    var years = (months / 12);

    document.getElementById('seconds').value = roundToDecimalPlaces(seconds, 3);
    document.getElementById('minutes').value = roundToDecimalPlaces(minutes, 3);
    document.getElementById('hours').value = roundToDecimalPlaces(hours, 3);
    document.getElementById('days').value = roundToDecimalPlaces(days, 3);
    document.getElementById('weeks').value = roundToDecimalPlaces(weeks, 3);
    document.getElementById('months').value = roundToDecimalPlaces(months, 3);
    document.getElementById('years').value = roundToDecimalPlaces(years, 3);
}

setInterval(updateTime, 100);