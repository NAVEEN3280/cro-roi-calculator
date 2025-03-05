function calculateCRO() {
  const currentCR = parseFloat(document.getElementById("currentCR").value);
  const improvedCR = parseFloat(document.getElementById("improvedCR").value);
  const traffic = parseFloat(document.getElementById("traffic").value);
  const avgOrderValue = parseFloat(
    document.getElementById("avgOrderValue").value
  );

  if (
    isNaN(currentCR) ||
    isNaN(improvedCR) ||
    isNaN(traffic) ||
    isNaN(avgOrderValue)
  ) {
    alert("Please enter valid numbers in all fields.");
    return;
  }

  const currentConversions = (currentCR / 100) * traffic;
  const newConversions = (improvedCR / 100) * traffic;
  const additionalConversions = newConversions - currentConversions;
  const revenueIncrease = additionalConversions * avgOrderValue;
  const roi = (revenueIncrease / (currentConversions * avgOrderValue)) * 100;

  document.getElementById("currentConversions").textContent =
    currentConversions.toFixed(0);
  document.getElementById("newConversions").textContent =
    newConversions.toFixed(0);
  document.getElementById("additionalConversions").textContent =
    additionalConversions.toFixed(0);
  document.getElementById("revenueIncrease").textContent =
    revenueIncrease.toFixed(2);
  document.getElementById("roi").textContent = roi.toFixed(2) + "%";

  document.getElementById("result").style.display = "block";
}
