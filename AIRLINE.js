//  Flight Ticket Booking System


var passengerName = "KRISHNA";
let age = 27;
let tickets = 75;


const airline = "Indigo Airlines";
const source = "HYDERABAD";
const destination = "SINGAPORE";
const ticketPrice = 150000;


let flightFeatures = [
    "COMPLIMENTARY MEALS AND BEVERAGES",
    "Window Seat",
    "Online Check-in"
];


let flight = {
    airline: airline,
    from: source,
    to: destination
};


let totalAmount = ticketPrice * tickets;


let category = age >= 18 ? "Adult Passenger" : "Minor Passenger";


let bookingStatus = true;

let status = bookingStatus ? "BOOKED" : "CANCELLED";

let discountEligible = age >= 60 || tickets >= 5;

let discount = discountEligible ? totalAmount * 0.25 : 0;

let finalAmount = totalAmount - discount;

console.log(`
=================================
      FLIGHT TICKET DETAILS
=================================

Passenger Name : ${passengerName}
Age : ${age}
Category : ${category}

Airline : ${flight.airline}
From : ${flight.from}
To : ${flight.to}

Ticket Price : ₹${ticketPrice}
Tickets : ${tickets}

Total Amount : ₹${totalAmount}
Discount : ₹${discount}
Final Amount : ₹${finalAmount}

Features:
1. ${flightFeatures[0]}
2. ${flightFeatures[1]}
3. ${flightFeatures[2]}

Booking Status : ${status}

=================================
`);
