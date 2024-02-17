function Parking(address, capacity, phone, cost) {
    this.address = address;
    this.capacity = capacity;
    this.phone = phone;
    this.cost = cost;
  }
  
  // Пример использования класса
  let parking1 = new Parking("ул. Пушкина, 123", 100, "+7 123 456 7890", 200);
  let parking2 = new Parking("пр. Ленина, 456", 50, "+7 987 654 3210", 150);
  let parking3 = new Parking("пр. Деда Мороза, 789", 150, "+7 582 678 9574", 170);
  
  console.log(parking1);
  console.log(parking2);
  console.log(parking2);
  