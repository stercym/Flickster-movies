const form = document.getElementById('feedbackForm');
const commentsSection = document.getElementById('commentsSection');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = new FormData(form);
  const user = data.get('username');
  const movie = data.get('movie');
  const rating = data.get('rating');
  const comment = data.get('comment');

  if (!user || !movie || !rating || !comment) {
    alert("Please complete all fields!");
    return;
  }

  const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);

  const commentHTML = `
    <div class="comment-box">
      <strong>${user}</strong> on <em>${movie}</em> 
      <div class="stars">${stars}</div>
      <p>${comment}</p>
    </div>
  `;

  commentsSection.innerHTML += commentHTML;
  form.reset();
});

// Highlight Help section
const helpLink = document.getElementById('helpBtn');
const helpSection = document.getElementById('help');

helpLink.addEventListener('click', () => {
  helpSection.classList.add('highlight');
  setTimeout(() => {
    helpSection.classList.remove('highlight');
  }, 2000);
});
