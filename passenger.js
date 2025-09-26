// 0) Get the count saved from the seat page
const seatCount = parseInt(sessionStorage.getItem('seatCount') || '0', 10);

// If no seats, send the user back
if (!seatCount) {
  window.location.href = 'index.html';
}

// 1) Show the message (ID must match your HTML)
document.getElementById('seatCountMsg').textContent =
  `You selected ${seatCount} seat${seatCount > 1 ? 's' : ''}. Please enter passenger info below.`;

// 2) Generate fields
const container = document.getElementById('passengerFields');

for (let i = 1; i <= seatCount; i++) {
  const block = document.createElement('div');
  block.className = 'passenger-block';

  block.innerHTML = `
    <h6 class="mb-3">Passenger ${i}</h6>
    <div class="row g-3">
      <div class="col-md-4">
        <label class="form-label">Full Name*</label>
        <input type="text" class="form-control" name="name_${i}" required>
      </div>
      <div class="col-md-4">
        <label class="form-label">Phone*</label>
        <input type="tel" class="form-control" name="phone_${i}" required
               pattern="^[0-9+()\\-\\s]{7,}$" placeholder="+1 (555) 555-5555">
      </div>
      <div class="col-md-4">
        <label class="form-label">Email*</label>
        <input type="email" class="form-control" name="email_${i}" required>
      </div>
    </div>
  `;
  container.appendChild(block);
}
