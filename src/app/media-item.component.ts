import { Component, Input } from "@angular/core";

@Component({
  selector: "mw-media-item",
  templateUrl: "./media-item.component.html",
  styleUrls: ["./media-item.component.css"],
})
export class MediaItemComponent {
  // using the Input decorator
  @Input() mediaItem;

  onDelete() {
    console.log("delete clicked!");
  }
}
