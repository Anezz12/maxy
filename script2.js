function calculateChange(totalBill, amountPaid) {
  // Check if amount paid is enough
  if (amountPaid < totalBill) {
    return false;
  }

  // Calculate change and round down to nearest 100
  let change = Math.floor((amountPaid - totalBill) / 100) * 100;

  // Available denominations
  const denominations = [
    100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100,
  ];

  // Calculate change breakdown
  const changeBreakdown = {};
  denominations.forEach((denomination) => {
    const count = Math.floor(change / denomination);
    if (count > 0) {
      changeBreakdown[denomination] = count;
      change -= count * denomination;
    }
  });

  return changeBreakdown;
}

// Example usage
const totalBill = 657650;
const amountPaid = 600000;

const change = calculateChange(totalBill, amountPaid);

if (change) {
  console.log("Change:");
  for (const [denomination, count] of Object.entries(change)) {
    console.log(`${count} lembar ${denomination}`);
  }
} else {
  console.log("Uang yang dibayarkan kurang.");
}
