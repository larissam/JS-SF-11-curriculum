'use strict';

// Refactor this code by creating a 'makeRequest' function that abstracts out the similarities in the 2 functions below
// Then have the event listeners call the 'makeRequest' function

// Code for Fetch request to the first URL
document.querySelector("#getFinanceDataButton").addEventListener('click', function() {
    console.log('Making request');
    fetch('http://data.consumerfinance.gov/api/views.json').then(function(response) {
    if (response.ok) {
        return response.json();
    } else {
        console.log(response.statusText);
    }
    }).then(function(data) {
        console.log(data);
    });
}, false);

// Code for Fetch request to the second URL
document.querySelector("#getHealthDataButton").addEventListener('click', function() {
    console.log('Making request');
    fetch('https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD').then(function(response) {
    if (response.ok) {
        return response.json();
    } else {
        console.log(response.statusText);
    }
    }).then(function(data) {
        console.log(data);
    });
}, false);