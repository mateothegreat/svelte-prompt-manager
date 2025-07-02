<script lang="ts">
  import { openWizard } from "@mateothegreat/prompt-manager";

  let selectedPaymentMethod = $state("creditcard");

  openWizard();
</script>
