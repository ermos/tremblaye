<script setup>

</script>

<template>
  <button class="button"><slot /></button>
</template>

<style lang="scss">
.button {
  outline: none;
  background-color: rgb(var(--neutral-color));
  color: #fff;
  border: 2px solid rgb(var(--neutral-color));
  padding: 15px 30px;
  margin: var(--spacing-little);
  cursor: pointer;
}
</style>