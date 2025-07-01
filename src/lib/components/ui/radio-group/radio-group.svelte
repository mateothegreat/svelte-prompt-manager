<!-- src/lib/components/ui/radio-group/radio-group.svelte -->
<script lang="ts">
  import { cn } from "$lib/utils";
  import { RadioGroup as RadioGroupPrimitive } from "bits-ui";
  import type { HTMLAttributes } from "svelte/elements";

  let { class: className, ...props } = $props<HTMLAttributes<HTMLDivElement>>();
</script>

<RadioGroupPrimitive.Root class={cn("grid gap-2", className)} {...props}>
  <slot />
</RadioGroupPrimitive.Root>
