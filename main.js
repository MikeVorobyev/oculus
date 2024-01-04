'use strict'

const tabItem = document.querySelectorAll('.tabs__btn-item');         // Создаем константу, в которую записываются все элементы(в данном случае кнопки)
                                                                      // по выбранному в скобках селектору '.tabs__btn-item' в документе HTML.

const tabContent = document.querySelectorAll('.tabs__content-item');  // Создаем константу, в которую записываются все элементы по 
                                                                      // выбранному в скобках селектору '.tabs__content-item' в документе HTML.
                                                                      // (в данном случае это контент, выводимый на страницу при нажатии ранее созданных кнопок).


tabItem.forEach(function(element) {                                   // С помощью цикла forEach проходимся по всем элементам с селектором '.tabs__btn-item'
    element.addEventListener('click', open);                          // и вешаем на каждый найденный элемент слушатель событий .addEventListener,
})                                                                    // который при срабатывании(при 'click' в данном случае) будет запускать 
                                                                      // функцию, с придуманным нами названием, open.


function open(event) {
    const tabTarget = event.currentTarget;                            // Создаем константу tabTarget, в которую посредством currentTarget записывается элемент
                                                                      // по которому был совершен 'click'.

    const button = tabTarget.dataset.button;                          // Создаем константу button. В неё помещаются данные из tabTarget(элементу по которому 
                                                                      // был совершен 'click'). И у этого элемента мы обращаемся к данным, 
                                                                      // находящимся в data-button="content" в HTML документе. Обращаемся через свойство .dataset
                                                                      // затем через точку к названию нужной DATA(В данном случае это название button записанное
                                                                      // в HTML документе через ТИРЕ data-button="content"). Таким образом мы получаем доступ к тому,
                                                                      // что написано после равно в двойных кавычках в DATA то есть к "content".

    tabItem.forEach(function(item) {                                  // С помощью цикла forEach проходимся по всем элементам кнопки с селектором '.tabs__btn-item'
        item.classList.remove('tabs__btn-item--active');              // и удаляем класс 'tabs__btn-item--active' активирующий контент через нажатую кнопку.
    });

    tabContent.forEach(function(item) {                               // С помощью цикла forEach проходимся по всем элементам контента с селектором '.tabs__content-item'
        item.classList.remove('tabs__content-item--active');          // и удаляем класс 'tabs__content-item--active' активирующий контент.
    });

    tabTarget.classList.add('tabs__btn-item--active');                // Добавляем к лементу по которому был совершен 'click' класс активации кнопки 'tabs__btn-item--active'
    
    document.querySelector(`#${button}`).classList.add('tabs__content-item--active'); // Через document.querySelector создаем id посредством добавления решетки # к шаблонной
}                                                                                     // строке, в которую попадают данные из DATA в документе HTML, записанные после 
                                                                                      // равно в кавычках, то есть "content" из data-button="content". Затем по этому id 
                                                                                      // через .classList.add() добавляется селектор 'tabs__content-item--active',
                                                                                      //  который активирует видимость контента на созданной страничке в браузере.



const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu--active');
})
