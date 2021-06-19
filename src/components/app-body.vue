<template>
  <Menu as="div" class="relative inline-block text-left">
    <MenuButton>{{menuItemName}}</MenuButton>
    <MenuItems class="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
      <!-- Use the `active` slot prop to conditionally style the active item. -->
      <MenuItem as='template' v-slot="{ active }">
        <a class="bg-purple-300"
          :class="[
            active
              ? 'bg-gray-500 text-white'
              : 'bg-white text-black',
          ]"
          href="#!"
        >
          Account settings
        </a>
      </MenuItem>
    </MenuItems>
  </Menu>
</template>

<script>
  import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

  export default {
    props: [
      'menuItemName'
    ],
    components: {
      Menu,
      MenuButton,
      MenuItems,
      MenuItem,
    },
  };
</script>