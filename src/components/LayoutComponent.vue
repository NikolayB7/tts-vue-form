<template>
  <div class="mt-12">
    <div class="flex space-x-12">
      <div class="w-full md:w-2/3">
        <div class="bg-white rounded-3xl w-full px-6 py-4 mb-6">
          <div class="flex justify-between items-center">
            <h2 class="text-2xl">Поездка</h2>
            <a href="#" class="text-gray-400">Изменить</a>
          </div>
          <hr class="my-2">
          <div class="text-xl">
            <b>Венеция – Верона</b>
            <p class="mt-2"><span class="text-slate-600">Дата / время:</span> 12.12.2021 22:30</p>
            <p class="mt-2"><span class="text-slate-600">Обратно: </span> 12.12.2021 22:30</p>
            <p class="mt-2"><span class="text-slate-600">Комментарий: </span> Alverà, 70, Cortina dʼAmpezzo</p>
            <p class="mt-2"><span class="text-slate-600">Люди: </span> 2</p>
            <p class="mt-2"><span class="text-slate-600">Детские кресла: </span> Не нужны</p>
          </div>
        </div>

        <div class="bg-white rounded-3xl w-full px-6 py-4 mb-6">
          <div class="flex justify-between items-center">
            <h2 class="text-2xl">Авто</h2>
            <a href="#" class="text-gray-400">Изменить</a>
          </div>
          <hr class="my-2">
          <div class="flex flex-col sm:flex-row space-x-0 sm:space-x-6 pt-4">
            <div class="mb-4 sm:mb-0">
              <img class="w-40 sm:w-60"
                   src="https://ttstaxi.com/wp-content/uploads/2018/02/Opel-Zafira-Family-7-480x223.png.pagespeed.ce.Rsb8Jrk2yM.png"
                   alt="">
              <p class="mt-4 text-gray-500">Mercedes E Class, BMW 5 Series, Cadillac XTS or similar.</p>
            </div>
            <div>
              <div class="flex flex-col-reverse sm:flex-row sm:justify-between">
                <div>
                  <h2 class="text-4xl sm:text-2xl tracking-wide font-bold">Стандарт</h2>
                  <p class="mt-2">Максимум 6 человек</p>
                </div>
                <div>
                  <p class="font-bold text-3xl mb-2 sm:mb-0 sm:text-4xl sm:text-right">150 € <span
                      class="text-cyan-600">*</span></p>
                </div>
              </div>
              <div class="flex flex-nowrap whitespace-nowrap sm:flex-wrap overflow-y-hidden mt-4 pb-2 sm:pb-0">
                <div class="bg-gray-200 mr-2 mb-2 px-2 py-2 sm:py-1 rounded-lg text-sm">30 минут в пути</div>
                <div class="bg-gray-200 mr-2 mb-2 px-2 py-2 sm:py-1 rounded-lg text-sm">Бесплатная отмена</div>
                <div class="bg-gray-200 mr-2 mb-2 px-2 py-2 sm:py-1 rounded-lg text-sm">Консьерж сервис</div>
                <div class="bg-gray-200 mr-2 mb-2 px-2 py-2 sm:py-1 rounded-lg text-sm">Бесплатное ожидание</div>
                <div class="bg-gray-200 mr-2 mb-2 px-2 py-2 sm:py-1 rounded-lg text-sm">Встреча с табличкой</div>
              </div>
              <p class="text-cyan-600 text-lg">* Стоимость включает поездку в оба направления.</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-3xl w-full px-6 py-4 mb-4 sm:mb-6">
          <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-4 sm:mb-6">
            <div class="flex-1">
              <label for="from" class="block text-base font-medium text-black">Откуда</label>
              <div class="flex items-center mt-1 space-x-2">
                <input id="from" type="text" placeholder="Город, аэропорт, ..."
                       class="border-gray-300 rounded-xl h-12 w-full text-black placeholder-gray-500">
              </div>
            </div>
            <div class="flex-1">
              <label for="from" class="block text-base font-medium text-black">Куда</label>
              <div class="flex items-center mt-1 space-x-2">
                <input id="from" type="text" placeholder="Город, аэропорт, ..."
                       class="border-gray-300 rounded-xl h-12 w-full text-black placeholder-gray-500">
              </div>
            </div>
          </div>
          <div class="flex space-x-6 mb-4 sm:mb-6">
            <div class="flex-1">
              <label for="from" class="block text-base font-medium text-black">Дата и время</label>
              <div class="flex items-center mt-1 space-x-2">
                <input id="from" type="text" placeholder="Выберите дату и время поездки"
                       class="border-gray-300 rounded-xl h-12 w-full text-black placeholder-gray-500">
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="flex-1 flex gap-3 items-center ">
              <input checked type="checkbox">
              <label for="from" class="block text-base font-medium text-black">Включить обратный трансфер</label>
            </div>
          </div>
          <!-- для перемикання додаємо клас hidden -->
          <div class="border-l-2 pt-3 pl-3 flex space-x-6">
            <div class="flex-1">
              <label for="from" class="block text-base font-medium text-black">Дата обратного трансфера</label>
              <div class="flex items-center mt-1 space-x-2">
                <input id="from" type="text" placeholder="Выберите дату и время обратной поездки"
                       class="border-gray-300 rounded-xl h-12 w-full text-black placeholder-gray-500">
              </div>
            </div>
          </div>

          <div class="flex-1 mt-4 sm:mt-6 mb-4 sm:mb-6">
            <label for="from" class="block text-base font-medium text-black">Комментарий к заказу</label>
            <div class="flex items-center mt-1 space-x-2">
            <textarea id="from"
                      placeholder="Укажите важные детали вашей поездки: номер рейса / гостиница / особые требования"
                      class="border-gray-300 rounded-xl h-24 w-full text-black placeholder-gray-500"></textarea>
            </div>
          </div>

          <div class="flex space-x-6 mb-4 sm:mb-6">
            <div class="flex-1">
              <label for="from" class="block text-base font-medium text-black">Количество людей</label>
              <div class="flex items-center mt-1 space-x-2">
                <select name="" id="" class="border-gray-300 rounded-xl">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10+">10+</option>
                </select>
              </div>
            </div>
          </div>
          <div class="flex space-x-6 mb-4 sm:mb-6">
            <div class="flex-1">
              <label for="from" class="block text-base font-medium text-black">Количество детских кресел</label>
              <div class="flex items-center mt-1 space-x-2">
                <select name="" id="" class="border-gray-300 rounded-xl">
                  <option value="0">Детские кресла не нужны</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>
          </div>

          <div class="flex justify-end mt-6">
            <button class="w-full sm:w-auto px-4 bg-cyan-700 text-white text-xl py-3 rounded-md">Выбрать автомобиль</button>
          </div>
        </div>

        <div class="bg-white rounded-3xl w-full px-6 py-4 mb-6">
          <div class="flex flex-col sm:flex-row space-x-0 sm:space-x-6 pt-4">
            <div class="w-full sm:w-1/4 mb-4 sm:mb-0">
              <img class="w-40 sm:w-60"
                   src="https://ttstaxi.com/wp-content/uploads/2018/02/Opel-Zafira-Family-7-480x223.png.pagespeed.ce.Rsb8Jrk2yM.png"
                   alt="">
              <p class="mt-4 text-gray-500">Mercedes E Class, BMW 5 Series, Cadillac XTS or similar.</p>
            </div>

            <div class="w-full sm:w-2/4">
              <h2 class="text-4xl sm:text-2xl tracking-wide font-bold">Стандарт</h2>
              <p class="mt-2">Максимум 6 человек</p>
              <div class="flex flex-nowrap whitespace-nowrap sm:flex-wrap overflow-y-hidden mt-4 pb-2 sm:pb-0">
                <div class="bg-gray-200 mr-2 mb-2 px-2 py-2 sm:py-1 rounded-lg text-sm">30 минут в пути</div>
                <div class="bg-gray-200 mr-2 mb-2 px-2 py-2 sm:py-1 rounded-lg text-sm">Бесплатная отмена</div>
                <div class="bg-gray-200 mr-2 mb-2 px-2 py-2 sm:py-1 rounded-lg text-sm">Консьерж сервис</div>
                <div class="bg-gray-200 mr-2 mb-2 px-2 py-2 sm:py-1 rounded-lg text-sm">Бесплатное ожидание</div>
                <div class="bg-gray-200 mr-2 mb-2 px-2 py-2 sm:py-1 rounded-lg text-sm">Встреча с табличкой</div>
              </div>
            </div>
            <div class="w-full sm:w-1/4">
              <p class="font-bold text-4xl text-right mb-4">150 €</p>
              <p class="text-right">Бесплатная отмена</p>
              <p class="text-right">Все налоги включены</p>
              <button class="mt-4 bg-cyan-700 text-white text-xl py-3 rounded-md w-full">Выбрать</button>
            </div>
          </div>
          <hr class="my-4">
          <div class="flex flex-col sm:flex-row space-x-0 sm:space-x-6 pt-4">
            <div class="w-full sm:w-1/4 mb-4 sm:mb-0">
              <img class="w-40 sm:w-60"
                   src="https://ttstaxi.com/wp-content/uploads/2018/02/Opel-Zafira-Family-7-480x223.png.pagespeed.ce.Rsb8Jrk2yM.png"
                   alt="">
              <p class="mt-4 text-gray-500">Mercedes E Class, BMW 5 Series, Cadillac XTS or similar.</p>
            </div>

            <div class="w-full sm:w-2/4">
              <h2 class="text-4xl sm:text-2xl tracking-wide font-bold">Стандарт</h2>
              <p class="mt-2">Максимум 6 человек</p>
              <div class="flex flex-nowrap whitespace-nowrap sm:flex-wrap overflow-y-hidden mt-4 pb-2 sm:pb-0">
                <div class="bg-gray-200 mr-2 mb-2 px-2 py-2 sm:py-1 rounded-lg text-sm">30 минут в пути</div>
                <div class="bg-gray-200 mr-2 mb-2 px-2 py-2 sm:py-1 rounded-lg text-sm">Бесплатная отмена</div>
                <div class="bg-gray-200 mr-2 mb-2 px-2 py-2 sm:py-1 rounded-lg text-sm">Консьерж сервис</div>
                <div class="bg-gray-200 mr-2 mb-2 px-2 py-2 sm:py-1 rounded-lg text-sm">Бесплатное ожидание</div>
                <div class="bg-gray-200 mr-2 mb-2 px-2 py-2 sm:py-1 rounded-lg text-sm">Встреча с табличкой</div>
              </div>
            </div>
            <div class="w-full sm:w-1/4">
              <p class="font-bold text-4xl text-right mb-4">150 €</p>
              <p class="text-right">Бесплатная отмена</p>
              <p class="text-right">Все налоги включены</p>
              <button class="mt-4 bg-cyan-700 text-white text-xl py-3 rounded-md w-full">Выбрать</button>
            </div>
          </div>
          <hr class="my-4">
          <div class="flex flex-col sm:flex-row space-x-0 sm:space-x-6 pt-4">
            <div class="w-full sm:w-1/4 mb-4 sm:mb-0">
              <img class="w-40 sm:w-60"
                   src="https://ttstaxi.com/wp-content/uploads/2018/02/Opel-Zafira-Family-7-480x223.png.pagespeed.ce.Rsb8Jrk2yM.png"
                   alt="">
              <p class="mt-4 text-gray-500">Mercedes E Class, BMW 5 Series, Cadillac XTS or similar.</p>
            </div>

            <div class="w-full sm:w-2/4">
              <h2 class="text-4xl sm:text-2xl tracking-wide font-bold">Стандарт</h2>
              <p class="mt-2">Максимум 6 человек</p>
              <div class="flex flex-nowrap whitespace-nowrap sm:flex-wrap overflow-y-hidden mt-4 pb-2 sm:pb-0">
                <div class="bg-gray-200 mr-2 mb-2 px-2 py-2 sm:py-1 rounded-lg text-sm">30 минут в пути</div>
                <div class="bg-gray-200 mr-2 mb-2 px-2 py-2 sm:py-1 rounded-lg text-sm">Бесплатная отмена</div>
                <div class="bg-gray-200 mr-2 mb-2 px-2 py-2 sm:py-1 rounded-lg text-sm">Консьерж сервис</div>
                <div class="bg-gray-200 mr-2 mb-2 px-2 py-2 sm:py-1 rounded-lg text-sm">Бесплатное ожидание</div>
                <div class="bg-gray-200 mr-2 mb-2 px-2 py-2 sm:py-1 rounded-lg text-sm">Встреча с табличкой</div>
              </div>
            </div>
            <div class="w-full sm:w-1/4">
              <p class="font-bold text-4xl text-right mb-4">150 €</p>
              <p class="text-right">Бесплатная отмена</p>
              <p class="text-right">Все налоги включены</p>
              <button class="mt-4 bg-cyan-700 text-white text-xl py-3 rounded-md w-full">Выбрать</button>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-3xl w-full px-6 py-4 mb-6">
          <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-4 sm:mb-6">
            <div class="flex-1">
              <label for="from" class="block text-base font-medium text-black">Ваше Имя</label>
              <div class="flex items-center mt-1 space-x-2">
                <input id="from" type="text" placeholder="Как Вас зовут?"
                       class="border-gray-300 rounded-xl h-12 w-full text-black placeholder-gray-500">
              </div>
            </div>
            <div class="flex-1">
              <label for="from" class="block text-base font-medium text-black">Ваш email</label>
              <div class="flex items-center mt-1 space-x-2">
                <input id="from" type="text" placeholder="Ваш адрес эл. почты"
                       class="border-gray-300 rounded-xl h-12 w-full text-black placeholder-gray-500">
              </div>
            </div>
          </div>
          <div class="flex space-x-6 mb-4 sm:mb-6">
            <div class="flex-1">
              <label for="from" class="block text-base font-medium text-black">Номер телефона</label>
              <div class="flex items-center mt-1 space-x-2">
                <input id="from" type="text" placeholder="+38 093 288 82 88"
                       class="border-gray-300 rounded-xl h-12 w-full text-black placeholder-gray-500">
              </div>
            </div>
          </div>

          <div class="flex justify-end mt-6">
            <button class="w-full sm:w-auto px-4 bg-cyan-700 text-white text-xl py-3 rounded-md">Заказать поездку</button>
          </div>
        </div>
      </div>
      <div class="hidden w-1/3 md:block">
        <div>
          <p class="text-2xl flex items-center gap-3">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M5.9 8.1L4.5 9.5L9 14L19 4L17.6 2.6L9 11.2L5.9 8.1ZM18 10C18 14.4 14.4 18 10 18C5.6 18 2 14.4 2 10C2 5.6 5.6 2 10 2C10.8 2 11.5 2.1 12.2 2.3L13.8 0.7C12.6 0.3 11.3 0 10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10H18Z"
                    fill="#1E8190"/>
            </svg>
            <span>Детали поездки</span>
          </p>
          <div>
            <p></p>
          </div>
        </div>
        <div>
          <p class="text-2xl flex items-center gap-3">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M5.9 8.1L4.5 9.5L9 14L19 4L17.6 2.6L9 11.2L5.9 8.1ZM18 10C18 14.4 14.4 18 10 18C5.6 18 2 14.4 2 10C2 5.6 5.6 2 10 2C10.8 2 11.5 2.1 12.2 2.3L13.8 0.7C12.6 0.3 11.3 0 10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10H18Z"
                    fill="#1E8190"/>
            </svg>
            <span>Выберите автомобиль</span>
          </p>
        </div>
        <div>
          <p class="text-2xl flex items-center gap-3">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M5.9 8.1L4.5 9.5L9 14L19 4L17.6 2.6L9 11.2L5.9 8.1ZM18 10C18 14.4 14.4 18 10 18C5.6 18 2 14.4 2 10C2 5.6 5.6 2 10 2C10.8 2 11.5 2.1 12.2 2.3L13.8 0.7C12.6 0.3 11.3 0 10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10H18Z"
                    fill="#1E8190"/>
            </svg>
            <span>Детали клиента</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>