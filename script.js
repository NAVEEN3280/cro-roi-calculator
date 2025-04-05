function calculateCRO() {
  const traffic = parseFloat(document.getElementById("traffic").value);
  const cvr = parseFloat(document.getElementById("cvr").value);
  const aov = parseFloat(document.getElementById("aov").value);
  const cri = parseFloat(document.getElementById("cri").value);

  if (isNaN(traffic) || isNaN(cvr) || isNaN(aov) || isNaN(cri)) {
    alert("Please enter valid numbers in all fields.");
    return;
  }

  // Correcting the projected conversion rate calculation
  const projectedCR = cvr * (1 + cri / 100); // Instead of adding directly

  // Calculating conversions
  const currentConversions = (cvr / 100) * traffic;
  const projectedConversions = (projectedCR / 100) * traffic;

  // Calculating revenue
  const currentRevenue = currentConversions * aov;
  const projectedRevenue = projectedConversions * aov;
  const revenueIncrease = projectedRevenue - currentRevenue;

  // Formatting numbers to look clean
  document.getElementById("currentRevenue").textContent =
    "$" + currentRevenue.toLocaleString();
  document.getElementById("projectedCR").textContent =
    projectedCR.toFixed(1) + "%"; // One decimal place
  document.getElementById("projectedRevenue").textContent =
    "$" + projectedRevenue.toLocaleString();
  document.getElementById("revenueIncrease").textContent =
    "$" + revenueIncrease.toLocaleString();

  document.getElementById("result").style.display = "block";
}

// Mobile navigation toggle
document.getElementById("hamburger").addEventListener("click", function () {
  document.querySelector(".nav-items").classList.toggle("active");
});
document.getElementById("hamburger").addEventListener("click", function () {
  document.querySelector(".nav-items").classList.toggle("active");
});
document.getElementById("hamburger").addEventListener("click", function () {
  document.querrySelector(".nav-items").classList.toggle("active");
});
