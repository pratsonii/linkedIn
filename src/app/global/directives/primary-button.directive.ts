import { Directive, HostBinding } from "@angular/core";

@Directive({
  selector: "[primaryButton]",
})
export class PrimaryButtonDirective {
  constructor() {}
  @HostBinding("style.background") background = "rgb(0, 119, 181)";
  @HostBinding("style.color") borderColor = "white";
  @HostBinding("style.font-size") fontSize = "12px";
  @HostBinding("style.font-weight") fontWeight = "600";
  @HostBinding("style.border-radius") borderRadius = "4px";
  @HostBinding("style.text-transform") textTransform = "uppercase";
  @HostBinding("style.border") border = "none";
  @HostBinding("style.padding") padding = "0.6rem 1.5rem";
  @HostBinding("style.cursor") cursor = "pointer";
}
