import { Key, manager } from "@mateothegreat/svelte5-modal-manager";
import Wizard from "./wizard.svelte";

export const openWizard = () => {
  const modal = manager.open({
    id: "wizard",
    component: Wizard,
    props: {
      name: "John Doe"
    },
    backdrop: true,
    blurrable: true,
    keybindings: [
      {
        key: Key.Escape,
        fn: (instance) => {
          console.log("Escape key pressed while this modal was open!");
          console.log("inner instance object reference:", instance);
        }
      }
    ]
  });
};
