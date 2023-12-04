import { Component, Input } from "@angular/core";
import { Cv } from "../model/cv";
import { CvService } from "../services/cv.service";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"],
})
export class ItemComponent {

  @Input({
    required: true,
  })
  cv: Cv | null = null;

  constructor(private cvService: CvService) {}
  onSelectCv() {
    if (this.cv) this.cvService.selectCv(this.cv);
  }
}
