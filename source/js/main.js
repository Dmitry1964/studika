import { iosVhFix } from './utils/ios-vh-fix';
import { initModals } from './modules/modals/init-modals';
import { onScrolPage, getPopUpElement } from './page';
import {
  showSelectBlock, navButton, navLocation, navRegions, modalList, onCityNameHandle,
  modalButton, onModalBattonHandle, modalSelected, onSelectButtonHendle, citySearchInput,
  onCitySearchInput, setCloseButtonVisually
} from './modal';
import { showChart } from './chart';


// ---------------------------------


window.addEventListener('DOMContentLoaded', () => {


  // Utils
  // ---------------------------------

  iosVhFix();
  getPopUpElement();
  showChart();



  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
  window.addEventListener('scroll', () => {
    if (window.innerWidth < 768) {
      return;
    } else {
      onScrolPage();
    }
  });

  navRegions.addEventListener('click', (evt) => {
    if (evt.target === navButton || evt.target === navLocation) {
      showSelectBlock();
    }
  });

  modalList.addEventListener('click', (evt) => {
    onCityNameHandle(evt.target);
  });

  modalButton.addEventListener('click', () => {
    onModalBattonHandle();
  });

  modalSelected.addEventListener('click', (evt) => {
    onSelectButtonHendle(evt.target.closest('div'));
  });

  citySearchInput.addEventListener('input', () => {
    onCitySearchInput(citySearchInput.value);
  });

  citySearchInput.addEventListener('focus', () => {
    setCloseButtonVisually();
  });


});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
