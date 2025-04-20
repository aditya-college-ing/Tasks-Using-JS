document.addEventListener("DOMContentLoaded", function () {
  showData();
});

function showData() {
  const popups = document.querySelectorAll('.popup');

  popups.forEach(popup => {
    popup.addEventListener('click', function () {
      const userId = this.getAttribute('data-id');
      if (!userId) {
        console.error("User ID not found!");
        return;
      }

      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
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

// Close modal when clicking outside of it
window.onclick = function(event) {
  const modal = document.getElementById('userDataModal');
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Prevent closing modal when clicking inside content
document.getElementById('modal-content').addEventListener('click', function (event) {
  event.stopPropagation();
});
