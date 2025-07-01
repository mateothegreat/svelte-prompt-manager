<!-- src/lib/components/ui/nested-dialog/demo.svelte -->
<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import { RadioGroup, RadioGroupItem } from "$lib/components/ui/radio-group";
  import { Apple, CreditCard, Wallet } from "lucide-svelte";
  import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    InnerDialog,
    InnerDialogContent,
    InnerDialogDescription,
    InnerDialogFooter,
    InnerDialogHeader,
    InnerDialogTitle,
    InnerDialogTrigger
  } from ".";

  const selectedPaymentMethod = $state("creditcard");
</script>

<Dialog>
  <DialogTrigger asChild>
    <Button>Payment Dialog</Button>
  </DialogTrigger>
  <DialogContent class="p-0">
    <DialogHeader class="border-b p-4">
      <DialogTitle>Payment</DialogTitle>
      <DialogDescription>
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
      <InnerDialog>
        <InnerDialogTrigger asChild>
          <Button variant="outline" class="w-full sm:w-auto">Payment Method</Button>
        </InnerDialogTrigger>
        <InnerDialogContent class="-mt-6 p-0 sm:-mt-1">
          <InnerDialogHeader class="border-b p-4">
            <InnerDialogTitle>Choose a payment method</InnerDialogTitle>
            <InnerDialogDescription>Select your preferred payment option</InnerDialogDescription>
          </InnerDialogHeader>

          <div class="flex flex-col gap-4 p-4">
            <RadioGroup
              value={selectedPaymentMethod}
              onValueChange={(value) => (selectedPaymentMethod = value)}>
              <div
                class={`hover:bg-accent flex cursor-pointer items-center justify-between rounded-lg border p-4 ${
                  selectedPaymentMethod === "creditcard" ? "bg-accent" : ""
                }`}
                on:click={() => (selectedPaymentMethod = "creditcard")}>
                <div class="flex items-center space-x-4">
                  <Wallet class="h-5 w-5" />
                  <div>
                    <h3 class="text-sm font-medium">Credit Card</h3>
                    <p class="text-muted-foreground text-sm">
                      Pay with Visa, Mastercard, or American Express
                    </p>
                  </div>
                </div>
                <RadioGroupItem value="creditcard" id="creditcard" />
              </div>
              <div
                class={`hover:bg-accent flex cursor-pointer items-center justify-between rounded-lg border p-4 ${
                  selectedPaymentMethod === "creditcard2" ? "bg-accent" : ""
                }`}
                on:click={() => (selectedPaymentMethod = "creditcard2")}>
                <div class="flex items-center space-x-4">
                  <CreditCard class="h-5 w-5" />
                  <div>
                    <h3 class="text-sm font-medium">PayPal</h3>
                    <p class="text-muted-foreground text-sm">Pay with your PayPal account</p>
                  </div>
                </div>
                <RadioGroupItem value="creditcard2" id="creditcard2" />
              </div>
              <div
                class={`hover:bg-accent flex cursor-pointer items-center justify-between rounded-lg border p-4 ${
                  selectedPaymentMethod === "applepay" ? "bg-accent" : ""
                }`}
                on:click={() => (selectedPaymentMethod = "applepay")}>
                <div class="flex items-center space-x-4">
                  <Apple class="h-5 w-5" />
                  <div>
                    <h3 class="text-sm font-medium">Apple Pay</h3>
                    <p class="text-muted-foreground text-sm">Pay with Apple Pay</p>
                  </div>
                </div>
                <RadioGroupItem value="applepay" id="applepay" />
              </div>
            </RadioGroup>
          </div>

          <InnerDialogFooter
            class="flex flex-col items-center justify-between space-y-2 border-t px-4 py-2 sm:flex-row sm:space-y-0 sm:space-x-2">
            <DialogClose asChild>
              <Button variant="outline" class="w-full sm:w-auto">Cancel Payment Method</Button>
            </DialogClose>
            <Button class="w-full sm:w-auto">Continue</Button>
          </InnerDialogFooter>
        </InnerDialogContent>
      </InnerDialog>
      <div class="flex w-full flex-col items-center gap-2 sm:w-auto sm:flex-row">
        <DialogClose asChild>
          <Button variant="outline" class="w-full sm:w-auto">Cancel</Button>
        </DialogClose>
        <Button class="w-full sm:w-auto">Save</Button>
      </div>
    </DialogFooter>
  </DialogContent>
</Dialog>
