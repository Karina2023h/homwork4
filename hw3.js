let birthYear = prompt("Введіть ваш рік народження");

if (birthYear === null) {
  alert("Шкода, що Ви не захотіли ввести свій рік народження.");
} else if (isNaN(birthYear) || birthYear <= 0) {
  alert("Будь ласка, введіть коректний рік народження.");
} else {
  let city = prompt("Введіть місто, де ви проживаєте");
  if (city === null) {
    alert("Шкода, що Ви не захотіли ввести своє місто проживання.");
  } else {
    let sport = prompt("Введіть ваш улюблений вид спорту:");
    if (sport === null) {
      alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту.");
    } else {
      let currentYear = new Date().getFullYear();
      let age = currentYear - birthYear;

      let message = `Твій вік: ${age} років.\n`;

      switch (city.toLowerCase()) {
        case "київ":
        case "вашингтон":
        case "лондон":
          message += `Ти живеш у столиці ${city}.\n`;
          break;
        default:
          message += `Ти живеш у місті ${city}.\n`;
      }

      switch (sport.toLowerCase()) {
        case "футбол":
          message += "Круто! Хочеш стати Ліонелем Мессі?";
          break;
        case "теніс":
          message += "Круто! Хочеш стати Сереною Вільямс?";
          break;
        case "баскетбол":
          message += "Круто! Хочеш стати Майклом Джорданом?";
          break;
        default:
          message += `Твій улюблений вид спорту: ${sport}`;
      }

      alert(message);
    }
  }
}

function getCountry(city) {
  switch (city.toLowerCase()) {
    case "київ":
      return "України";
    case "вашингтон":
      return "США";
    case "лондон":
      return "Великої Британії";
    default:
      return "невідомої країни";
  }
}
