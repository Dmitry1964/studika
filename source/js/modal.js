import { modals } from "./modules/modals/init-modals";

const regions = ["Москва", "Волгоград", "Омск", "Орел", "Воронеж", "Барнаул", "Чита", "Красноярск", "Пермь", "Владивосток", "Ставрополь", "Хабаровск", "Архангельск"]
const arr = [];

const navButton = document.querySelector('.user-nav__button');
const navLocation = document.querySelector('.user-nav__location span');
const navRegions = document.querySelector('.user-nav__regions');
const FragmentModal = document.querySelector('#modal').content;
const modal = FragmentModal.querySelector('.modal');
const modalList = modal.querySelector('.modal__list');
const modalSelected = modal.querySelector('.modal__selected');
const modalButton = modal.querySelector('.modal__button');
const citySearchInput = modal.querySelector('input');
const closeButton = modal.querySelector('.modal__button-clear');





navRegions.appendChild(modal);

const getCityList = () => {
  regions.forEach((elem) => {
    const cityList = modal.querySelector('.modal__list')
    const listItem = document.createElement('li');
    listItem.classList.add('modal__item');
    listItem.setAttribute('data-city', elem);
    const nameCity = document.createElement('span');
    cityList.append(listItem);
    listItem.append(nameCity);
    nameCity.textContent = elem;
  });
};

const showSelectBlock = () => {
  getCityList();
  modal.classList.add('modal--visually');
};

const onCityNameHandle = (city) => {
  const modalCityName = document.createElement('span');
  const modalSelect = document.createElement('div');
  modalSelect.append(modalCityName);
  const modalButtonClose = document.createElement('button');
  modalSelect.classList.add('modal__select');
  modalSelect.setAttribute('data-name-city', city.textContent);
  modalButtonClose.classList.add('modal__select-button');
  modalCityName.textContent = city.textContent;
  modalSelected.append(modalSelect);
  modalSelect.append(modalButtonClose);
};

const onModalBattonHandle = () => {
  const modalSelectList = modalSelected.querySelectorAll('.modal__select');
  modalSelectList.forEach((elem) => {
    arr.push(elem.textContent.trim());
    navLocation.textContent = arr.join();
    modal.classList.remove('modal--visually');
  });
};

const onSelectButtonHendle = (elem) => {
  elem.remove();
};

const onCitySearchInput = (param) => {
  const string = param;
  const modalItem = modal.querySelectorAll('.modal__item');
  modalItem.forEach((element) => {
    const nameCity = element.textContent.toLowerCase();

    if (nameCity.includes(string)) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  })
};

const setCloseButtonVisually = () => {
  closeButton.style.opacity = '1';
};

const Urls = {
  POST:'https://api.tickets.yandex.net/api/agent',
};






export {
  showSelectBlock, onCityNameHandle, onModalBattonHandle, onSelectButtonHendle, onCitySearchInput, navButton, navLocation, navRegions,
  modalList, modalButton, modalSelected, citySearchInput, setCloseButtonVisually, closeButton,
}


