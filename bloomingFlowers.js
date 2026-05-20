onload = () => {
  document.body.classList.remove("container");
  
  // Animate the love message after a short delay
  const loveMessage = document.querySelector(".love-message");
  if (loveMessage) {
    setTimeout(() => {
      loveMessage.style.animation = "loveGlow 3s ease-in-out infinite";
    }, 500);
  }
};