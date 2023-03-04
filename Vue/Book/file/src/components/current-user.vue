<template>
  <span>
    <slot>{{ user.lastName }}</slot>
  </span>

  <slot v-bind:user="user"> {{ user.lastName }}</slot>
</template>
