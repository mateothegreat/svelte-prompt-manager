<!-- src/lib/components/ui/radio-group/radio-group-item.svelte -->
<script lang="ts">
  import { cn } from "$lib/utils";
  import { RadioGroup as RadioGroupPrimitive } from "bits-ui";
  import { Circle } from "lucide-svelte";
  import type { HTMLAttributes } from "svelte/elements";

  let { class: className, ...props } = $props<HTMLAttributes<HTMLDivElement>>();
</script>

<RadioGroupPrimitive.Item
  class={cn(
    "border-primary text-primary ring-offset-background focus-visible:ring-ring aspect-square h-4 w-4 rounded-full border focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    className
  )}
  {...props}>
  <RadioGroupPrimitive.Indicator class="flex items-center justify-center">
    <Circle class="h-2.5 w-2.5 fill-current text-current" />
  </RadioGroupPrimitive.Indicator>
</RadioGroupPrimitive.Item>
