var mas = ["images/blog2.jpg","images/blog3.jpg","images/blog4.jpg","images/blog5.jpg"] // массив картинок
var to = -1;  // Счетчик, указывающий на текущую картинки

function right_arrow() // Открытие следующей картинки(движение вправо)
{
    var obj = document.getElementById("img");
    if (to < mas.length-1)  to++
    else
        to = 0;
    obj.src = mas[to];
}

function left_arrow() // Открытие предыдущей картинки(движение влево)
{
    var obj = document.getElementById("img");
    if (to > 0) to--;
    else
        to = mas.length-1;
    obj.src = mas[to];
}

function animate({timing, draw, duration}) {

    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        // timeFraction изменяется от 0 до 1
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        // вычисление текущего состояния анимации
        let progress = timing(timeFraction);

        draw(progress); // отрисовать её

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }

    });
}