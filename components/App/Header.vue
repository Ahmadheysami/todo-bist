<script setup >
// create the theme key in localStorage if not exitst
const isDark = ref(localStorage.getItem("theme") === "dark");
onMounted(() => {
  if (!localStorage.getItem("theme")) localStorage.setItem("theme", "light");

  if (isDark.value) document.documentElement.classList.add("dark");
  else document.documentElement.classList.remove("dark");
});

const setThemeProps = (dark, theme) => {
  isDark.value = dark;
  localStorage.setItem("theme", theme);
  if (isDark.value) document.documentElement.classList.add("dark");
  else document.documentElement.classList.remove("dark");
};

const setTheme = (e) => {
  isDark.value = e.target.checked;
  if (isDark.value) setThemeProps(true, "dark");
  else setThemeProps(false, "light");
};
</script>

<template>
  <div class="flex justify-between items-center py-7">
    <p class="font-bold text-5xl text-neutral-800 dark:text-slate-200">
      tO<span class="text-orange-400 dark:text-indigo-500">do.</span>
    </p>
    <div class="space-x-2 flex items-center">
    <button class="hidden max-md:inline-block">
      <Icon name="jam:menu" size="33" :color="isDark ? '#f5f5f5' : '#343'"/>
    </button>
      <div
      class="relative bg-slate-200 shadow-inner border  text-white w-16 h-8 rounded-full"
    >
      <input
        type="checkbox"
        class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer peer"
        @change="setTheme"
        ref="toggleBtn"
        :checked="isDark"
      />
      <div
        class="circle w-8 h-full rounded-full shadow-inner shadow-orange-600 bg-orange-400 dark:shadow-indigo-600 dark:bg-indigo-500 peer-checked:translate-x-full transition-all -z-40 peer-checked:rotate-[360deg] dark:peer-checked:bg-indigo-600 peer-checked:bg-orange-500 grid place-items-center"
      >
        <Icon name="line-md:moon-alt-loop" v-if="isDark === false" />
        <Icon
          name="line-md:moon-alt-to-sunny-outline-loop-transition"
          v-if="isDark === true"
        />
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
.circle {
  clip-path: polygon(
    50% 0%,
    83% 12%,
    100% 43%,
    94% 78%,
    68% 100%,
    32% 100%,
    6% 78%,
    0% 43%,
    17% 12%
  );
}
</style>