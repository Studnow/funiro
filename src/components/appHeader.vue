<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="first-screen">
    <Disclosure as="nav" v-slot="{ open }">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0 text-2xl font-bold">Funiro.</div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <template v-for="(item, itemIdx) in navigation" :key="item">
                  <template v-if="itemIdx === 0 || itemIdx === 1">
                    <drop-menu :menuItemName="item" />
                  </template>
                  <a v-else href="#" class="menu-link trans-150-eio">{{
                    item
                  }}</a>
                </template>
              </div>
            </div>
          </div>
          <Popover
            as="form"
            @submit.prevent
            class="relative hidden lg:block lg:w-64 xl:w-sm h-10"
          >
            <PopoverButton class="search-pop-button">
              <SearchIcon class="max-w-6" />
            </PopoverButton>
            <PopoverPanel static>
              <input
                @submit.prevent
                class="
                  search-input
                  py-2
                  pl-10
                  focus:outline-transparent
                  border-transparent border-2
                  focus:border-primary
                  focus:shadow-none
                "
                type="text"
                name="search"
                id="search"
                placeholder="Search for minimalist chair"
              />
            </PopoverPanel>
          </Popover>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <div class="util-buttons ml-auto mr-4">
                <Popover
                  as="form"
                  @submit.prevent
                  class="relative hidden md:inline-block lg:hidden util-button"
                >
                  <PopoverButton class="search-pop-button relative top-0">
                    <SearchIcon class="max-w-6" />
                  </PopoverButton>
                  <PopoverPanel>
                    <input
                      class="
                        search-pop-input
                        focus:outline-transparent
                        border-transparent border-2
                        focus:border-primary
                        focus:shadow-none
                      "
                      type="text"
                      name="search"
                      id="search"
                      placeholder="Search for minimalist chair"
                    />
                  </PopoverPanel>
                </Popover>
                <button class="util-button">
                  <span class="sr-only">View notifications</span>
                  <HeartIcon class="h-6 w-6" aria-hidden="true" />
                </button>
                <button class="util-button">
                  <span class="sr-only">View notifications</span>
                  <ShoppingCartIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <!-- Profile dropdown -->
              <Popover class="relative">
                <PopoverButton class="login-pop-button">
                  <img
                    class="h-10 w-10"
                    src="../assets/img/avatar.jpg"
                    alt=""
                  />
                </PopoverButton>

                <PopoverPanel class="login-panel">
                  <div class="login-panel-wrapper">
                    <a
                      v-for="link in loginLinks"
                      :key="link.name"
                      :href="link.href"
                      class="login-link trans-150-eio"
                      >{{ link.name }}</a
                    >
                  </div>
                </PopoverPanel>
              </Popover>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton class="disclosure-button">
              <span class="sr-only">Open main menu</span>
              <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <template v-for="(item, itemIdx) in navigation" :key="item">
            <template v-if="itemIdx === 0">
              <a href="#" class="menu-sm-link">{{ item }}</a>
            </template>
            <a v-else href="#" class="menu-sm-link">{{ item }}</a>
          </template>
        </div>
        <div class="pt-4 pb-3 border-t border-primary">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <img
                class="h-10 w-10 rounded-full"
                src="../assets/img/avatar.jpg"
                alt=""
              />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium leading-none text-gray-900">
                Elisabeth Tailor
              </div>
              <div class="text-sm font-medium leading-none text-gray-600">
                tailor@example.com
              </div>
            </div>
            <div class="util-buttons ml-auto">
              <button class="util-button">
                <span class="sr-only">View notifications</span>
                <HeartIcon class="h-6 w-6" aria-hidden="true" />
              </button>
              <button class="util-button">
                <span class="sr-only">View notifications</span>
                <ShoppingCartIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div class="mt-3 px-2 space-y-1">
            <a
              v-for="item in profile"
              :key="item"
              href="#"
              class="menu-sm-link"
              >{{ item }}</a
            >
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/vue";
import {
  MenuIcon,
  XIcon,
  ShoppingCartIcon,
  HeartIcon,
  SearchIcon,
} from "@heroicons/vue/outline";
import DropMenu from "./drop-menu.vue";

const navigation = ["Products", "Rooms", "Inspirations"];
const profile = ["Your Profile", "Settings", "Sign out"];

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverPanel,
    MenuIcon,
    XIcon,
    ShoppingCartIcon,
    DropMenu,
    HeartIcon,
    SearchIcon,
  },
  setup() {
    const open = ref(false);

    return {
      navigation,
      profile,
      open,
      loginLinks: [
        {
          name: "Login",
          href: "#!",
        },
        {
          name: "Settings",
          href: "#!",
        },
        {
          name: "Sign up",
          href: "#!",
        },
        {
          name: "Registration",
          href: "#!",
        },
      ],
    };
  },
};
</script>

<style>
.first-screen {
  background: linear-gradient(to right, #f9f1e7 65%, #fcf8f3 65%);
}
.menu-link {
  @apply px-3 py-2 text-base hover:text-primary focus:outline-none focus-within:text-primary text-black rounded-md text-sm font-medium;
}
.util-button {
  @apply flex-shrink-0 p-1 mr-4 rounded-full text-gray-600 hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-light focus:ring-primary focus:text-primary;
}
.login-link {
  @apply flex items-center py-2 px-6  rounded-lg text-gray-900 font-medium hover:text-primary focus:outline-none focus-visible:text-primary;
}
.login-panel {
  @apply absolute z-10 px-4 mt-2 ml-3 transform -translate-x-1/2 min-w-max -left-3/4;
}
.trans-150-eio {
  @apply transition duration-150 ease-in-out;
}
.search-pop-button {
  @apply w-8 h-8 absolute top-1 left-2 flex justify-center items-center rounded-full focus:outline-transparent focus:text-primary;
}
.search-input {
  @apply lg:w-64 xl:w-sm;
}
.search-pop-input {
  @apply p-2 absolute top-12 md:w-54 z-10;
}
.login-pop-button {
  @apply focus:outline-transparent border-3 border-transparent rounded-full focus:border-primary overflow-hidden;
}
.login-panel-wrapper {
  @apply relative grid grid-cols-1 rounded-md shadow-lg bg-primary-light
}
.disclosure-button {
  @apply bg-primary-light inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-1 focus:bg-primary focus:ring-primary;
}
.menu-sm-link {
  @apply text-gray-500 hover:bg-primary-lighter hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium;
}
</style>