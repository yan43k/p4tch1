document.addEventListener('DOMContentLoaded', () => { // Убеждаемся, что DOM загружен

    const container = document.getElementById('figure-container');
  
    function createFigure() {
      const figure = document.createElement('div');
      figure.classList.add('figure');
  
      // Случайное положение по горизонтали
      figure.style.left = Math.random() * 100 + 'vw';
  
      // Случайный размер
      const size = Math.random() * 20 + 20; // Размер от 20 до 40 пикселей
      figure.style.width = size + 'px';
      figure.style.height = size + 'px';
  
      container.appendChild(figure);
  
      // Анимация
      animateFigure(figure);
    }
  
    function animateFigure(figure) {
      const animationDuration = Math.random() * 5 + 3; // Случайная продолжительность от 3 до 8 секунд
  
      figure.animate([
        { transform: 'translateY(0)', opacity: 1 },
        { transform: `translateY(-${window.innerHeight + 50}px)`, opacity: 0 }
      ], {
        duration: animationDuration * 1000,
        easing: 'ease-in',
        fill: 'forwards' // Фигура остается в последнем состоянии анимации
      }).finished.then(() => {
        figure.remove(); // Удаляем фигуру после анимации
      });
    }
  
  
    // Создаем фигуры через определенный интервал
    setInterval(createFigure, 500); // Создаем фигуру каждые полсекунды
  });