<template>
  <button
      class="phone-book__button"
      @mousemove="doEffect"
  >
    <span><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: "ContactsButton",
  methods: {
    doEffect(event) {
      const target = event.target.getBoundingClientRect()
      const x = event.pageX - target.left
      const y = event.pageY - (target.top + window.scrollY)
      event.target.style.setProperty('--x', `${ x }px`)
      event.target.style.setProperty('--y', `${ y }px`)
    },
  }
}
</script>

<style lang="scss" scoped>
.phone-book__button {
  border: 1px solid #e56b6f;
  align-self: center;
  margin: 10px;
  font-size: 20px;
  max-width: 200px;
  position: relative;
  appearance: none;
  background: #b56576;
  padding: 10px 15px;
  color: white;
  cursor: pointer;
  overflow: hidden;
  border-radius: 100px;
  span {
    position: relative;
    pointer-events: none;
  }
  &::before {
    --size: 0;
    content: '';
    position: absolute;
    left: var(--x);
    top: var(--y);
    width: var(--size);
    height: var(--size);
    background: radial-gradient(circle closest-side, #6d597a, transparent);
    transform: translate(-50%, -50%);
    transition: width .2s ease, height .2s ease;
  }
  &:hover::before {
    --size: 200px;
  }
}
</style>