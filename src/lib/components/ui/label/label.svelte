<!-- src/lib/components/ui/label/label.svelte -->
<script lang="ts">
  import { cn } from "$lib/utils";
  import type { HTMLLabelAttributes } from "svelte/elements";

  let { class: className, ...props } = $props<HTMLLabelAttributes>();
</script>

<label
  class={cn(
    "text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
    className
  )}
  {...props}>
  <slot />
</label>
