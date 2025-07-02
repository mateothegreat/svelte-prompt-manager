import { Dialog as DialogPrimitive } from "bits-ui";
import Content from "./dialog-content.svelte";
import Description from "./dialog-description.svelte";
import Footer from "./dialog-footer.svelte";
import Header from "./dialog-header.svelte";
import Title from "./dialog-title.svelte";
import InnerDialogContent, { type Position } from "./inner-dialog-content.svelte";
import InnerDialogDescription from "./inner-dialog-description.svelte";
import InnerDialogFooter from "./inner-dialog-footer.svelte";
import InnerDialogHeader from "./inner-dialog-header.svelte";
import InnerDialogTitle from "./inner-dialog-title.svelte";
import InnerDialogRoot from "./inner-dialog.svelte";
import Root from "./nested-dialog.svelte";

const { Close, Overlay, Portal, Trigger } = DialogPrimitive;

export {
  Content,
  Description,
  //
  Root as Dialog,
  Close as DialogClose,
  Content as DialogContent,
  Description as DialogDescription,
  Footer as DialogFooter,
  Header as DialogHeader,
  Overlay as DialogOverlay,
  //
  Portal as DialogPortal,
  Title as DialogTitle,
  Trigger as DialogTrigger,
  Footer,
  Header,
  InnerDialogRoot as InnerDialog,
  InnerDialogContent,
  InnerDialogDescription,
  InnerDialogFooter,
  InnerDialogHeader,
  InnerDialogRoot,
  InnerDialogTitle,
  Root,
  Title,
  type Position as InnerDialogPosition
};

export type { Position } from "./nested-dialog.svelte";
