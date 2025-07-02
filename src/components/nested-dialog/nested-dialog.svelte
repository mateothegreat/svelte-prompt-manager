<!-- src/lib/components/ui/nested-dialog/nested-dialog.svelte -->
<script lang="ts" module>
  import { Dialog as DialogPrimitive } from "bits-ui";
  import { setContext } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";

  interface DialogContextValue {
    getInnerOpen: () => boolean;
    setInnerOpen: (value: boolean) => void;
  }

  let dialogContext = Symbol();
  export { dialogContext };
</script>

<script lang="ts">
  let { class: className, ...props } = $props<HTMLAttributes<HTMLDivElement>>();

  let outerOpen = $state(false);
  let innerOpen = $state(false);

  setContext<DialogContextValue>(dialogContext, {
    getInnerOpen: () => innerOpen,
    setInnerOpen: (value) => {
      innerOpen = value;
    }
  });
</script>

<DialogPrimitive.Root bind:open={outerOpen} {...props}>
  <slot />
</DialogPrimitive.Root>
