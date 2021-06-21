const hamburguer = document.getElementById('hamburger');
const navigation = document.getElementById('navigation');
const navigationList = document.getElementById('navigationList');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('close');
    navigation.classList.toggle('active');
    navigationList.classList.toggle('active');
});