function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

<<<<<<< HEAD
function calculateTicketPrice(quantity, basePrice, isVip = false) {
  let total = quantity * basePrice;
  if (quantity >= 5) {
    total = total * 0.9;
  }
  if (isVip) {
    total = total * 1.15;
  }
  return Math.round(total);
}
<<<<<<< HEAD
  return Math.round(total);
=======
  return Math.floor(total);
>>>>>>> ca3ab7c197dfea3382e0c60bcb6a15b7bbc04282
=======
function calculateTicketPrice(quantity, basePrice, isVip = false) {
  let total = quantity * basePrice;
  if (isVip) {
    total = total * 1.15;
  }
  return Math.floor(total);
>>>>>>> 428b257 (Add 15% VIP surcharge option - llanos.vincemiguel)
}

module.exports = { isValidQuantity, calculateTicketPrice };
