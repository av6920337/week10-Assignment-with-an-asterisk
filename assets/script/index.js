const calculateTotalPrice = (quantity = 2, price = 15000000) => {
    const totalPrice = quantity * price;
    const totalCostValueFormatted=totalPrice.toLocaleString('ru-RU');
    alert(`Стоимость покупки: ${totalCostValueFormatted} рублей.`);
};