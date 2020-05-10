import { HostBinding } from "@angular/core";
import { Directive } from "@angular/core";

@Directive({
  selector: "[outlinedButton]",
})
export class OutlinedButtonDirective {
  constructor() {}
  @HostBinding("style.background") background = "#FFFFFF";
  @HostBinding("style.color") borderColor = "#0275B1";
  @HostBinding("style.font-size") fontSize = "12px";
  @HostBinding("style.font-weight") fontWeight = "600";
  @HostBinding("style.border-radius") borderRadius = "4px";
  @HostBinding("style.text-transform") textTransform = "uppercase";
  @HostBinding("style.border") border = "1px solid #0275B1";
  @HostBinding("style.padding") padding = "0.6rem 1.5rem";
  @HostBinding("style.cursor") cursor = "pointer";
}
