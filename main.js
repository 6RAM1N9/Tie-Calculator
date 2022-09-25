function processing() {
    var money = document.getElementById('input_money').value;
    var people = document.getElementById('input_people').value;
    var service = document.getElementById('input_service').value;
    var tip = money / 100 * service;
    var total = Number(tip) + Number(money);
    var total_for_people = Number(total) / Number(people);
    alert('Итого чаевые: ' + tip + '₽\nИтого с человека: ' + total_for_people + '₽\nСумма заказа: ' + total + '₽')
}