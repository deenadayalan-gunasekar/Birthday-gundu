// // When gift box is clicked
// function openGift() {
//   const msg = document.getElementById('secretMessage');
//   msg.classList.remove('hidden');
// }

// // When surprise button is clicked
// function revealPresent() {
//   document.getElementById('gift').classList.remove('hidden');
// // 
// When gift box is clicked
function openGift() {
  const msg = document.getElementById('secretMessage');
  msg.classList.remove('hidden');
  msg.style.display = 'block'; // Make sure it's actually shown
}

// When surprise button is clicked
function revealPresent() {
  const gift = document.getElementById('gift');
  gift.classList.remove('hidden');
  gift.style.display = 'block'; // Same here for visibility
}
