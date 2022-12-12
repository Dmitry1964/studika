import { educationalInst } from "./utilits";

const onScrolPage = () => {
  const contentWrapper = document.querySelector('.content-wrapper');
  const infoList = contentWrapper.querySelector('.info-list');
  const vPoint = contentWrapper.getBoundingClientRect();
  const popup = document.querySelector('.popup');


  if (vPoint.y > 0) {
    infoList.classList.remove('info-list--fixed');
    popup.classList.remove('popup--visually')
  } else if (vPoint < 0 || infoList.classList.contains('info-list--fixed')) {
    return;
  } else {
    infoList.classList.add('info-list--fixed');
    popup.classList.add('popup--visually');
  }
};

const getPopUpElement = () => {
  const FragmentPopup = document.querySelector('#popup').content;
  const popup = FragmentPopup.querySelector('.popup');
  const title = popup.querySelector('.popup__title');
  const address = popup.querySelector('.popup__address');
  const phone = popup.querySelector('.popup__phone');

  title.textContent = educationalInst.title;
  address.textContent = educationalInst.address;
  phone.textContent = educationalInst.phone;
  document.body.appendChild(popup);
};

export { onScrolPage, getPopUpElement };
