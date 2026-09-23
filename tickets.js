function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice) {
  let total = quantity * basePrice;
  if (quantity >= 5) {
    total = total * 0.9;
  }
  return Math.round(total);
}
<<<<<<< HEAD
  return Math.round(total);
=======
  return Math.floor(total);
>>>>>>> ca3ab7c197dfea3382e0c60bcb6a15b7bbc04282
}

module.exports = { isValidQuantity, calculateTicketPrice };
