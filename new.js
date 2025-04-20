document.addEventListener("DOMContentLoaded", function () {
  setupPopups();
});

function setupPopups() {
  const popups = document.querySelectorAll('.popup');

  popups.forEach(popup => {
    popup.addEventListener('click', function () {
      const userId = this.getAttribute('data-id');
      if (!userId) {
        console.error("User ID not found!");
        return;
      }

      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => {
          if (!response.ok) throw new Error("Network response was not ok.");
          return response.json();
        })
        .then(data => {
          const modal = document.getElementById('userDataModal');
          document.getElementById('modal-name').textContent = "Name: " + data.name;
          document.getElementById('modal-email').textContent = "Email: " + data.email;
          document.getElementById('modal-phone').textContent = "Phone: " + data.phone;
          document.getElementById('modal-address').textContent = "Address: " + data.address.street + ", " + data.address.city;
          document.getElementById('modal-company').textContent = "Company: " + data.company.name;
          document.getElementById('modal-website').textContent = "Website: " + data.website;

          modal.style.display = "flex";
        })
        .catch(error => {
          console.error("Error fetching user data:", error);
        });
    });
  });
}

function closeModal() {
  const modal = document.getElementById('userDataModal');
  modal.style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById('userDataModal');
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

const modalContent = document.getElementById('modal-content');
if (modalContent) {
  modalContent.addEventListener('click', function (event) {
    event.stopPropagation();
  });
}
