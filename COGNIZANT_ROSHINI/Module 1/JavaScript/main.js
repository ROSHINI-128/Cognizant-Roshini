// main.js

// 1. JavaScript Basics & Setup
console.log("Welcome to the Community Portal");
window.onload = function () {
    alert("Page fully loaded!");
};

// 2. Syntax, Data Types, and Operators
const eventName = "Art Workshop";
const eventDate = "2025-06-15";
let seatsAvailable = 30;

let eventInfo = `${eventName} on ${eventDate} has ${seatsAvailable} seats available.`;
console.log(eventInfo);

// 3. Conditionals, Loops, and Error Handling
const events = [
    { name: "Music Fest", date: "2025-07-01", category: "music", seats: 0 },
    { name: "Art Fair", date: "2025-06-20", category: "art", seats: 20 },
    { name: "Food Carnival", date: "2024-12-31", category: "food", seats: 15 }
];

const today = new Date();

function displayUpcomingEvents() {
    events.forEach(event => {
        const eventDate = new Date(event.date);
        if (eventDate > today && event.seats > 0) {
            console.log(`Upcoming: ${event.name} with ${event.seats} seats.`);
        }
    });
}

try {
    displayUpcomingEvents();
} catch (error) {
    console.error("Error displaying events:", error);
}

// 4. Functions, Closures, Higher-Order Functions
function addEvent(event) {
    events.push(event);
}

function registerUser(eventName) {
    const event = events.find(e => e.name === eventName);
    if (event && event.seats > 0) {
        event.seats--;
        console.log(`Registered for ${event.name}. Remaining seats: ${event.seats}`);
    } else {
        console.log("Registration failed.");
    }
}

function filterEventsByCategory(category) {
    return events.filter(event => event.category === category);
}

function createRegistrationTracker() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

const musicRegistrations = createRegistrationTracker();

// 5. Objects and Prototypes
function Event(name, date, category, seats) {
    this.name = name;
    this.date = date;
    this.category = category;
    this.seats = seats;
}

Event.prototype.checkAvailability = function () {
    return this.seats > 0;
};

const sampleEvent = new Event("Tree Plantation", "2025-08-15", "environment", 10);
console.log(Object.entries(sampleEvent));

// 6. Arrays and Methods
const musicEvents = events.filter(e => e.category === "music");
const eventCards = events.map(e => `Event: ${e.name} - ${e.category}`);

// 7. DOM Manipulation
document.addEventListener("DOMContentLoaded", () => {
    const eventsSection = document.querySelector("#events");
    const eventList = document.createElement("div");
    events.forEach(event => {
        const card = document.createElement("div");
        card.className = "eventCard";
        card.innerHTML = `<h3>${event.name}</h3><p>Date: ${event.date}</p><p>Seats: ${event.seats}</p>`;
        eventList.appendChild(card);
    });
    eventsSection.appendChild(eventList);
});

// 8. Event Handling
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for registering!");
});

// 9. Async JS, Promises, Async/Await
async function fetchEvents() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        console.log("Mock event data fetched:", data.slice(0, 5));
    } catch (err) {
        console.error("Failed to fetch events", err);
    }
}
fetchEvents();

// 10. Modern JavaScript Features
function showEvent({ name, date, seats }) {
    console.log(`${name} on ${date} - ${seats} seats`);
}

const allEvents = [...events]; // spread operator

// 11. Working with Forms
const regForm = document.querySelector("form");
regForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = regForm.elements.name.value;
    const email = regForm.elements.email.value;
    const event = regForm.elements.eventType.value;

    if (!name || !email || !event) {
        alert("Please fill in all required fields.");
        return;
    }

    console.log("Form Submitted:", { name, email, event });
});

// 12. AJAX & Fetch API
function simulateSubmission() {
    const data = { name: "John Doe", email: "john@example.com" };
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json" },
    })
        .then(res => res.json())
        .then(json => {
            console.log("Submitted:", json);
        });
    
    setTimeout(() => {
        alert("Response received!");
    }, 2000);
}

// 13. Debugging and Testing
console.log("Debug - Starting form submission...");

// 14. jQuery and JS Frameworks
$(document).ready(function () {
    $("#registerBtn").click(function () {
        alert("jQuery Button Clicked");
    });

    $(".eventCard").fadeIn();
});

// Benefit: Frameworks like React help organize code, manage state efficiently, and scale better.
