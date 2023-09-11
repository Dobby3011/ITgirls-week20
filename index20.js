function inputData() {
    const choice = document.getElementById('select').value;
    const number = document.querySelector('.input').value;
    const result = document.querySelector('.result');
    const error = document.querySelector('.error');
    if (number === '') {
        alert('Заполните поле!');
    }
    try {
        if (number > 10) {
            throw new Error('Ошибка! Объект не найден. Номер не должен быть больше 10.');
        }
        else {
            if (choice === "1") {
                fetch('https://swapi.dev/api/people/' + number)
                    .then((res) => {
                        return res.json();
                    })
                    .then((data) => {
                        console.log(data);
                        result.textContent = "Персонаж: " + JSON.stringify(data.name);
                    })
                    .catch((err) => {
                        alert('Ошибка. Запрос не выполнен: ' + err);
                    });
            }
            if (choice === "2") {
                fetch('https://swapi.dev/api/planets/' + number)
                    .then((res) => {
                        return res.json();
                    })
                    .then((data) => {
                        console.log(data);
                        result.textContent = "Планета: " + JSON.stringify(data.name);

                    })
                    .catch((err) => {
                        alert('Ошибка. Запрос не выполнен: ' + err);
                    });
            }
            if (choice === "3") {
                fetch('https://swapi.dev/api/films/' + number)
                    .then((res) => {
                        return res.json();
                    })

                    .then((data) => {
                        console.log(data);
                        result.textContent = "Фильм: " + JSON.stringify(data.title);
                    })
                    .catch((err) => {
                        alert('Ошибка. Запрос не выполнен: ' + err);
                    });
            }
        }
    }
    catch (e) {
        error.textContent = e.message;
        document.querySelector('.result').style.display = "none";

    }
    finally {
        document.querySelector('.input').value = '';
    }
}

document.querySelector('.btn').addEventListener('click', inputData);




