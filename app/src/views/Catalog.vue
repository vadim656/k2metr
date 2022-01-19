<template>
  <div class="container w-full mx-auto">
    <div class="grid grid-cols-[3fr,9fr] h-[1000px] gap-6">
      <div class="bord">
        <div>
          <span>Акции</span>
          <ul>
            <li><a href="">Террасная доска</a></li>
            <li><a href="">Ламинат</a></li>
            <li><a href="">Паркет</a></li>
            <li><a href="">Виниловые полы</a></li>
          </ul>
        </div>
        <div>filter</div>
      </div>
      <div class="bord">
        <div class="flex flex-col gap-4">
          <div>1</div>
          <div>
            <span
              >В настоящее время существуют типы ламината – с 21 по 34 класс.
              Сейчас 21, 22 и 23 классы снимаются с производства ввиду низких
              эксплуатационных характеристик и ненадежности. Ламинат 31 класса
              используют в домашних условиях, где нагрузка не интенсивна.
            </span>
          </div>
          <a
            href="/"
            class="h-12  flex justify-center items-center w-full max-w-[300px] border-2 border-[#FC6E6A] hover:bg-[#FC6E6A] cursor-pointer ease-in-out duration-300 hover:text-white"
            >Получить предложение</a
          >
        </div>
        <div class=" grid grid-cols-3 gap-6  my-12">
          <div class="w-1/3 rounded-lg h-[460px] bord bg-white drop-shadow-xl">
            <?php $post_thumbnail_id = $product->get_image_id(); ?>
            <div class="product-welcome__slide">
              <a
                href="<?php echo wp_get_attachment_url( $post_thumbnail_id ); ?>"
                data-fancybox="product-gallery"
              >
                <img
                  class="w-full h-[320px]"
                  src="<?php echo wp_get_attachment_url( $post_thumbnail_id ); ?>"
                  alt=""
                />
              </a>
            </div>
            <div class="p-4">
              <a href="">
                <h2><?php echo the_title(); ?></h2>
              </a>

              <div>
                <span>star</span>
                <div class="flex gap-2 text-[#BDBDBD] uppercase font-semibold">
                  <span>Россия</span>
                  <span>32 Класс</span>
                </div>
                <div class="flex flex-col items-end justify-center">
                  <span>Цена:</span>
                  <span
                    ><?php echo $product->get_price_html(); ?><span>₽/м2</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="grid grid-cols-[4fr,8fr] grid-rows-[2fr,3fr] grid-flow-col gap-6 h-[550px]"
        >
          <div
            class=" col-span-1 rounded-lg gradient text-white p-6 font-bold flex flex-col"
          >
            <span class="text-[48px] ">100+</span>
            <span class="text-[24px]">причин работать c нами</span>
          </div>
          <div class=" col-span-1 row-span-1 rounded-lg">
            <div
              class="flex flex-col justify-center w-full h-full bg-[#E4E4E4] rounded-lg gap-4 drop-shadow-xl"
            >
              <div
                class="w-full flex justify-center font-bold text-[24px] text-center"
              >
                Поможем подобрать покрытие
              </div>
              <div class="flex flex-col items-center justify-center gap-4">
                <input
                  type="text"
                  placeholder="Телефон*"
                  class="w-full py-4 pl-4 max-w-[300px] h-12"
                />
                <a
                  href="/"
                  class="h-12  flex justify-center items-center w-full max-w-[300px] border-2 border-[#FC6E6A] hover:bg-[#FC6E6A] cursor-pointer ease-in-out duration-300 hover:text-white"
                  >Получить предложение</a
                >
              </div>
            </div>
          </div>

          <div class=" col-span-2 row-span-2 rounded-lg overflow-hidden">
            <img
              src="https://www.cleverence.ru/upload/iblock/bdc/bdcecfbf107227d5fd3fad2e90d83d36.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
