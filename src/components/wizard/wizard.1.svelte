<script lang="ts">
  import { CreditCard } from "lucide-svelte";

  import Button from "../../lib/components/ui/button/button.svelte";
  import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
  } from "../../lib/components/ui/dialog";
  import Input from "../../lib/components/ui/input/input.svelte";
  import Label from "../../lib/components/ui/label/label.svelte";

  let selectedPaymentMethod = $state("creditcard");
  let open = $state(true);
</script>

<Dialog bind:open>
  <DialogContent class="p-0">
    <DialogHeader class="border-b p-4">
      <DialogTitle>Payment</DialogTitle>
      <DialogDescription class="text-sm">
        Please enter your credit card credentials below to complete the payment process.
      </DialogDescription>
    </DialogHeader>
    <div class="flex flex-col gap-4 p-4">
      <div class="flex flex-col">
        <Label class="text-muted-foreground mb-1.5 text-xs">Card Holder*</Label>
        <div class="relative">
          <Input placeholder="Card Holder Name" />
        </div>
      </div>
      <div class="flex flex-col">
        <Label class="text-muted-foreground mb-1.5 text-xs">Card Number*</Label>
        <div class="relative">
          <Input placeholder="Card number" class="peer ps-9 [direction:inherit]" />
          <div
            class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
            <CreditCard class="h-4 w-4" />
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-2">
        <div class="flex flex-col">
          <Label class="text-muted-foreground mb-1.5 text-xs">Expiration month and year*</Label>
          <Input placeholder="MM/YY" class="[direction:inherit]" />
        </div>
        <div class="flex flex-col">
          <Label class="text-muted-foreground mb-1.5 text-xs">CVC*</Label>
          <Input placeholder="CVC" class="[direction:inherit]" />
        </div>
      </div>
    </div>

    <DialogFooter
      class="flex flex-col items-center justify-between space-y-2 border-t px-4 py-2 sm:flex-row sm:space-y-0">
      <Button variant="outline" class="w-full sm:w-auto">Payment Method</Button>

      <div class="flex w-full flex-col items-center gap-2 sm:w-auto sm:flex-row">
        <DialogClose>
          <Button variant="outline" class="w-full sm:w-auto">Cancel</Button>
        </DialogClose>
        <Button class="w-full sm:w-auto">Save</Button>
      </div>
    </DialogFooter>
  </DialogContent>
</Dialog>
