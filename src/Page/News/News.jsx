import React from "react";
import N from "./News.module.css"

let News = () => {
    return (
        <div className={N.container}>
            <h2>News</h2>
            <div className={N.infoBox}>
                <p>При просмотре роликов бывает хочется немного ускорить воспроизведение, для этого есть
                    функция &quot;скорость видео&quot; в настройках ролика. Чтобы её включить не задействуя мышь нужно
                    нажать &quot;Shift + &gt;&quot; или &quot;Shift + &lt;&quot; для ускорения и замедления
                    соответственно. И еще некоторые горячие клавиши youtube:</p>
                <ul>
                    <li>Shift + &gt; — ускорение видео</li>
                    <li>Shift + &lt; — замедление видео</li>
                    <li>«пробел» — пауза, также пауза это «K»</li>
                    <li>«F» — полноэкранноый режим</li>
                    <li>«←» (назад) - перемотать 5 секунд назад</li>
                    <li>«→» (вперед) - перемотать 5 секунд вперед</li>
                    <li>«J» — перемотать 10 секунд назад</li>
                    <li>«L» — перемотать 10 секунд вперед</li>
                    <li>Цифры 1,2,3 до 9 — перемотка на 10%, 20%, 30% до 90%</li>
                </ul>
                <hr/>
                <ul>
                    <li>«M» — выключить звук</li>
                    <li>«↑» (вверх) - увеличить громкость</li>
                    <li>«↓» (вниз) - уменьшить громкость</li>
                </ul>
                <hr/>
                <ul>
                    <li>«N» — следующее видео в плейлисте</li>
                    <li>«P» — предыдущее видео в плейлисте</li>
                    <li>«/» — курсор в поле поиска</li>
                </ul>
            </div>
        </div>
    )
};

export default News;