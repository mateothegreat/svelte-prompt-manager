<script lang="ts">
  import { MoonIcon, SunIcon } from "@lucide/svelte";

  import { toggleMode } from "mode-watcher";
  import Button from "../buttons/button.svelte";
</script>

<Button onclick={toggleMode} variant="outline" size="icon">
  <SunIcon
    class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
  <MoonIcon
    class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
  <span class="sr-only">Toggle theme</span>
</Button>
