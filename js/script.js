//функция для открытия/закрытия модального окна
const modalFunc = () => {
  //задаем переменную для модального окна и иещем её
  const modal = document.querySelector('.cart-modal__overlay');
  // Создаем переменную для кнопки корзины и ищем её
  const cartBtn = document.querySelector('#cart-button');

  //функция для открытия модального окна
  const openModal = () => {
    modal.classList.add('open')
  };

  //функция для закрытия модально окна
  const closeModal = () => {
    modal.classList.remove('open')
  };

  //функция для клика по кнопке корзины 
  cartBtn.addEventListener('click', () => {
    //которая открывает модальное окно
    openModal()
  });

  //событие по клику на 
  modal.addEventListener('click', (event) => {
    //на 
    if (
      //область вокруг модально окна (если она есть) или
      event.target.classList.contains('cart-modal__overlay') ||
      // на кнопку крестик (если она есть)
      event.target.closest('.cart-modal__header--close')
    ) {
      //закрывает модальное окно
      closeModal()
    }
  });
};

const restsFunc = () => {
  const container = document.querySelector('#rests-container');

  const restArray = [
    {
      id: 0,
      title: 'Пицца плюс',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'rests-1.jpg'
    },
    {
      id: 1,
      title: 'Тануки',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'rests-2.jpg'
    },
    {
      id: 2,
      title: 'FoodBand',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'rests-3.jpg'
    },
    {
      id: 3,
      title: 'Жадина-пицца',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'rests-4.jpg'
    },
    {
      id: 4,
      title: 'Точка еды',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'rests-5.jpg'
    },
    {
      id: 5,
      title: 'PizzaBurger',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'rests-6.jpg'
    }
  ]


  const loading = () => {
    container.innerHTML = '<p style="width: 100%; text-align: center;">Загрузка</p>'
  }

  const randerRests = (array) => {
    container.innerHTML = ''

    array.forEach((card) => {
      container.insertAdjacentHTML('beforeend', `
      <a href="goods.html?id=${card.id}" class="products-card">
        <div class="products-card__image">
          <img src="images/rests/${card.image}" alt="${card.image}">
        </div>
        <div class="products-card__descr">
          <div class="products-card__descr-row">
            <h4 class="products-card__descr--title">${card.title}</h4>
            <div class="products-card__descr--bage">${card.time} мин</div>
          </div>
          <div class="products-card__descr-row">
            <div class="products-card__descr-info">
              <div class="products-card__descr-info--rating">
                <img src="images/icons/star.svg" alt="star">
                ${card.rating}
              </div>
              <div class="products-card__descr-info--price">
                От ${card.price} ₽
              </div>
              <div class="products-card__descr-info--group">
                ${card.type}
              </div>
            </div>
          </div>
        </div>
      </a>
      `)
    });
  }

    if (container) {
      loading()

      setTimeout(() => {
        randerRests(restArray)
      }, 1000)
    }
};

const goodsFunc = () => {
  const container = document.querySelector('#goods-container');

  const goodsArray = [
    {
      id: 0,
      title: 'Ролл угорь стандарт',
      descr: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
      price: 250,
      image: 'goods-1.jpg'
    },
    {
      id: 1,
      title: 'Калифорния лосось стандарт',
      descr: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
      price: 395,
      image: 'goods-2.jpg'
    },
    {
      id: 2,
      title: 'Окинава стандарт',
      descr: 'Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
      price: 250,
      image: 'goods-3.jpg'
    },
    {
      id: 3,
      title: 'Цезарь маки хl',
      descr: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
      price: 250,
      image: 'goods-4.jpg'
    },
    {
      id: 4,
      title: 'Ясай маки стандарт 185 г',
      descr: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
      price: 250,
      image: 'goods-5.jpg'
    },
    {
      id: 5,
      title: 'Ролл с креветкой стандарт',
      descr: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
      price: 250,
      image: 'goods-6.jpg'
    }, 
  ]


  const loading = () => {
    container.innerHTML = '<p style="width: 100%; text-align: center;">Загрузка</p>'
  }

  const randerGoods = (array) => {
    container.innerHTML = ''

    array.forEach((card) => {
      container.insertAdjacentHTML('beforeend', `
      <div class="products-card">
        <div class="products-card__image">
          <img src="images/goods/${card.image}" alt="${card.image}">
        </div>
        <div class="products-card__descr">
          <div class="products-card__descr-row">
            <h5 class="products-card__descr--name">${card.title}</h5>
          </div>
          <div class="products-card__descr-row">
            <p class="products-card__descr--text">
              ${card.descr}
            </p>
          </div>
          <div class="products-card__descr-row">
            <div class="products-card__descr-controls">
              <button class="btn btn-primary">
                В корзину
                <img src="images/icons/cart-white.svg" alt="shopping-cart">
              </button>
              <span class="products-card__descr-controls--price">${card.price} ₽</span>
            </div>
          </div>
        </div>
      </div>
      `)
    });
  }

    if (container) {
      loading()

      setTimeout(() => {
        randerGoods(goodsArray)
      }, 1000)
    }
};


//вызываем функцию 1 раз
modalFunc()
restsFunc()
goodsFunc()