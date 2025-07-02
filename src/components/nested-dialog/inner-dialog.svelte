<!-- src/lib/components/ui/nested-dialog/inner-dialog.svelte -->
<script lang="ts" module>
  import { Dialog as DialogPrimitive } from "bits-ui";
  import { getContext, onDestroy, onMount } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { dialogContext } from "./nested-dialog.svelte";
</script>

<script lang="ts">
  let { ...props }: HTMLAttributes<HTMLDivElement> = $props();

  let context = getContext(dialogContext);
  if (!context) throw new Error("InnerDialog must be used within a Dialog");

  let { getInnerOpen, setInnerOpen } = context;

  let handleEscapeKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape" && getInnerOpen()) {
      setInnerOpen(false);
      event.stopPropagation();
    }
  };

  onMount(() => {
    document.addEventListener("keydown", handleEscapeKeyDown);
  });

  onDestroy(() => {
    document.removeEventListener("keydown", handleEscapeKeyDown);
  });
</script>

<DialogPrimitive.Root open={getInnerOpen()} onOpenChange={(open) => setInnerOpen(open)} {...props}>
  <slot />
</DialogPrimitive.Root>
