<template>
  <footer class="footer">
    <span>Design inspired by <a href="https://getgrav.org/" target="_blank" rel="noopener noreferrer">Grav</a></span>
    <div>
      <a href="https://github.com/weserv/images/blob/5.x/Privacy-Policy.md" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
      <a href="https://github.com/weserv/images/blob/5.x/CHANGELOG.md" target="_blank" rel="noopener noreferrer">Changelog</a>
    </div>
    <br>
    <a href="/">Images.weserv.nl</a> was <i class="las la-code"></i> with <i class="las la-heart pulse"></i> by <a href="https://github.com/weserv/images/graphs/contributors" target="_blank" rel="noopener noreferrer">our contributors</a>.
  </footer>
</template>

<style scoped>
.footer {
  margin: 0 auto;
  max-width: 960px;
  text-align: center;
  padding: 2rem 1.5rem 2.25rem;
}

.footer span {
  padding: 0 0.5rem;
}

.footer div {
  display: inline;
}

.footer div a {
  display: inline-block;
  padding: 0 0.5rem;
  border-left: 1px solid #333;
}

.home-hero + .footer,
.home-features + .footer,
.home-content + .footer {
  border-top: 1px solid var(--c-divider);
}

.pulse {
  color: #920;
  animation-name: pulse_animation;
  animation-duration: 2000ms;
  transform-origin: 70% 70%;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes pulse_animation {
  0% {
    transform: scale(1);
  }
  30% {
    transform: scale(1);
  }
  40% {
    transform: scale(1.08);
  }
  50% {
    transform: scale(1);
  }
  60% {
    transform: scale(1);
  }
  70% {
    transform: scale(1.05);
  }
  80% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
