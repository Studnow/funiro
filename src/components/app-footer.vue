<template>
  <div class="footer">
    <ul class="address list">
      <li><h3>Funiro</h3></li>
      <li>
        Worldwide furniture store since 2020. We sell over 1000+ branded
        products on our website
      </li>
      <li><a href=""> Sawojajar Malang, Indonesia</a></li>
      <li><a href="tel:+62894563455">+6289 456 3455</a></li>
      <li><a href="/">www.funiro.com</a></li>
    </ul>
    <ul class="menu list">
      <li>
        <h3 class="">Menu</h3>
      </li>
      <li><a href="#!">Products</a></li>
      <li><a href="#!">Rooms</a></li>
      <li><a href="#!">Inspirations</a></li>
      <li><a href="#!">About us</a></li>
      <li><a href="#!">Terms & Policy</a></li>
    </ul>
    <ul class="account list">
      <li><h3>Account</h3></li>
      <li><a href="#!">My account</a></li>
      <li><a href="#!">Checkout</a></li>
      <li><a href="#!">My Cart</a></li>
      <li><a href="#!">My catalog</a></li>
    </ul>
    <ul class="social list">
      <li><h3>Stay connected</h3></li>
      <li><a href="#!">Facebook</a></li>
      <li><a href="#!">Instagram</a></li>
      <li><a href="#!">Twitter</a></li>
    </ul>
    <form action="" class="subscribe list">
      <fieldset class="subscribe-set  ">
        <h3>Stay Updated</h3>
        <label for="subscribe" class="flex">
          <input type="text" name="subscribe" id="subscribe" placeholder="Enter your email" class="bg-description-light border-transparent focus:border-primary focus:shadow-none" /><button
            type="submit"
            class="bg-primary p-2 ml-2 group hover:bg-primary-light"
            aria-label="subscribe"
          >
            <paper-airplane-icon class="w-6 h-6 ml-1 mb-1 text-white group-hover:text-primary transform rotate-45" />
          </button>
        </label>
      </fieldset>
    </form>
  </div>
</template>

<script>
import { PaperAirplaneIcon } from "@heroicons/vue/outline";
export default {
  components: {
    PaperAirplaneIcon,
  },
  setup() {},
};
</script>

<style>
.footer {
  @apply prose-lg flex flex-col items-center md:flex-row md:items-start md:flex-wrap xl:flex-nowrap max-w-screen-2xl px-4 mx-auto;
}
.footer a {
  @apply hover:text-primary;
}
.footer h3 {
  @apply font-bold;
}
.list {
  @apply w-full md:max-w-4/12 lg:max-w-3/12;
}
.footer ul {
  margin-top: 0;
}
.subscribe h3 {
  margin-top: 1.33em;
}
.subscribe {
  @apply lg:min-w-4/4 xl:min-w-0 flex justify-center xl:block;
}
</style>