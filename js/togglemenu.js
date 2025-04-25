document.querySelector('.burger').addEventListener('click', function(e) {
    e.preventDefault(); // Важно: предотвращаем стандартное поведение
    
    const burger = this;
    const wrapper = document.querySelector('.wrapper');
    const body = document.body;
    
    // Сохраняем позицию скролла
    const scrollPosition = window.pageYOffset;
    
    burger.classList.toggle('active');
    wrapper.classList.toggle('active');
    body.classList.toggle('menu-open');
    
    // Фиксируем позицию при открытом меню
    if (burger.classList.contains('active')) {
        body.style.top = `-${scrollPosition}px`;
    } else {
        const scrollY = Math.abs(parseInt(body.style.top || '0'));
        body.style.top = '';
        window.scrollTo(0, scrollY);
    }

});