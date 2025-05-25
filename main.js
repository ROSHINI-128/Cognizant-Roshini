// main.js

// 1. JavaScript Basics & Setup
console.log("Welcome to the Community Portal");
window.onload = () => alert("Page is fully loaded");

// 2. Syntax, Data Types, and Operators
const eventName = "Tech Meetup";
const eventDate = "2025-06-15";
let availableSeats = 30;

let eventInfo = `Upcoming Event: ${eventName} on ${eventDate} | Seats Available: ${availableSeats}`;
console.log(eventInfo);

function decrementSeats() {
  if (availableSeats > 0) availableSeats--;
  console.log(`Remaining Seats: ${availableSeats}`);
}

// 3. Conditionals, Loops, and Error Handling
const allEvents = [
  { name: "Music Night", date: "2025-08-01", seats: 50, category: "Music" },
  { name: "Art Fair", date: "2024-12-01", seats: 0, category: "Art" },
  { name: "Tech Meetup", date: "2025-06-15", seats: 30, category: "Tech" },
];

function displayValidEvents() {
  const currentDate = new Date();
  allEvents.forEach(event => {
    const eventDate = new Date(event.date);
    if (eventDate >= currentDate && event.seats > 0) {
      console.log(`Valid Event: ${event.name} on ${event.date}`);
    }
  });
}

function tryRegister(eventName) {
  try {
    const event = allEvents.find(e => e.name === eventName);
    if (!event) throw new Error("Event not found");
    if (event.seats <= 0) throw new Error("No seats left");
    event.seats--;
    console.log(`Registered for ${event.name}, Seats Left: ${event.seats}`);
  } catch (err) {
    console.error("Registration Error:", err.message);
  }
}

// 4. Functions, Scope, Closures, Higher-Order Functions
function addEvent(name, date, seats, category) {
  allEvents.push({ name, date, seats, category });
}

function filterEventsByCategory(cat) {
  return allEvents.filter(e => e.category === cat);
}

function registrationCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(`Total Registrations: ${count}`);
  };
}

const countMusicRegs = registrationCounter();

// 5. Objects and Prototypes
function Event(name, date, seats) {
  this.name = name;
  this.date = date;
  this.seats = seats;
}

Event.prototype.checkAvailability = function () {
  return this.seats > 0;
};

const sampleEvent = new Event("Sample Event", "2025-07-10", 20);
console.log(Object.entries(sampleEvent));

// 6. Arrays and Methods
allEvents.push({ name: "Dance Show", date: "2025-09-01", seats: 25, category: "Music" });
const musicEvents = allEvents.filter(e => e.category === "Music");
const eventTitles = allEvents.map(e => `Workshop on ${e.name}`);

// 7. DOM Manipulation
document.addEventListener("DOMContentLoaded", () => {
  const eventSection = document.querySelector("#events");
  const eventList = document.createElement("div");

  allEvents.forEach(e => {
    const card = document.createElement("div");
    card.textContent = `${e.name} - ${e.date}`;
    eventList.appendChild(card);
  });

  eventSection.appendChild(eventList);
});

// 8. Event Handling
document.querySelector("#eventType").addEventListener("change", e => {
  const filtered = filterEventsByCategory(e.target.value);
  console.log("Filtered Events:", filtered);
});

document.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    console.log("Search triggered");
  }
});

// 9. Async JS, Promises, Async/Await
function fetchMockEvents() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { name: "Yoga Retreat", date: "2025-10-01", seats: 20, category: "Health" }
      ]);
    }, 1000);
  });
}

async function loadAsyncEvents() {
  console.log("Loading...");
  const events = await fetchMockEvents();
  console.log("Fetched Events:", events);
}

loadAsyncEvents();

// 10. Modern JS Features
const [firstEvent, ...otherEvents] = allEvents;
const cloneEvents = [...allEvents];

function showEvent({ name, date, seats }) {
  console.log(`${name} on ${date} with ${seats} seats.`);
}

// 11. Working with Forms
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  const form = e.target;
  const name = form.elements["name"].value;
  const email = form.elements[1].value; // Email input
  const selectedEvent = form.elements["eventType"].value;

  if (!name || !email || !selectedEvent) {
    alert("Please fill all fields.");
  } else {
    console.log(`Name: ${name}, Email: ${email}, Event: ${selectedEvent}`);
  }
});

// 12. AJAX & Fetch API
function postRegistrationData(data) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(result => {
      console.log("Success:", result);
      alert("Registration successful");
    })
    .catch(err => console.error("Fetch Error:", err));
}

// 13. Debugging and Testing
function debugSubmission() {
  const data = { name: "John", email: "john@example.com", event: "Tech Meetup" };
  console.log("Submitting data:", data);
  postRegistrationData(data);
}

debugSubmission();

// 14. jQuery and JS Frameworks
$(document).ready(function () {
  $("#eventType").change(function () {
    console.log("Changed to:", $(this).val());
  });

  $("#registerBtn").click(function () {
    $(".event-card").fadeIn();
  });
});

