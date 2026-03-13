import { Component } from '@angular/core';

@Component({
  selector: 'app-flight-booking',
  standalone: false,
  templateUrl: './flight-booking.component.html',
  styleUrl: './flight-booking.component.scss'
})
export class FlightBookingComponent {
  selectedFlightWay = 'One-way-flight';
  ways = ['One-way-flight', 'Return-flight'];
  departureDate = '';
  arrivalDate = '';
  todaysDate = new Date().toISOString().slice(0, 10);

  bookFlight() {
    if (!this.departureDate) {
      alert('Please select a departure date.');
      return;
    }

    if (this.selectedFlightWay === 'Return-flight') {
      if (!this.arrivalDate) {
        alert('Please select an arrival date.');
        return;
      }

      alert(
        `You have booked a return flight, departing on ${this.departureDate} and returning on ${this.arrivalDate}`
      );
      return;
    }

    alert(`You have booked a one-way flight on ${this.departureDate}`);
  }
}
