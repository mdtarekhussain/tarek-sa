document.addEventListener("DOMContentLoaded", function () {
  const heart = document.querySelector(".heart");
  const textContainer = document.getElementById("loveText");
  const heartContainer = document.querySelector(".heart-container");
  const messageContainer = document.getElementById("initialMessage");

  let toggled = false;

  heart.addEventListener("click", function () {
    if (!toggled) {
      // "Click the heart" মেসেজ লুকানো
      messageContainer.classList.add("hide");

      // লেখা দেখানো
      textContainer.classList.add("show");
      textContainer.style.maxHeight = textContainer.scrollHeight + "px";

      // হার্ট নিচে যাবে এবং কালার ধীরে ধীরে কালো হবে
      heartContainer.style.marginTop = "10px"; // নিচে সরবে
      heart.classList.add("black-heart"); // কালো করার ক্লাস যোগ করা
      toggled = true;
    } else {
      // লেখা লুকানো
      textContainer.style.maxHeight = "0";
      textContainer.classList.remove("show");

      // হার্ট আগের জায়গায় ফেরত যাবে এবং লাল হয়ে যাবে
      heartContainer.style.marginTop = "10px"; // আগের অবস্থা
      heart.classList.remove("black-heart"); // লাল রঙে ফিরে আসবে

      // "Click the heart" মেসেজ আবার দেখানো হবে
      messageContainer.classList.remove("hide");
      toggled = false;
    }
  });
});
