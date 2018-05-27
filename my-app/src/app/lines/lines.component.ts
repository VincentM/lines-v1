import { Component, OnInit } from "@angular/core";
import { Line } from "../line";
import { LineService } from "../line.service";

@Component({
  selector: "app-lines",
  templateUrl: "./lines.component.html",
  styleUrls: ["./lines.component.css"]
})
export class LinesComponent implements OnInit {
  lines: Line[];

  constructor(private lineService: LineService) {}

  ngOnInit() {
    this.getLines();
  }

  getLines(): void {
    this.lines = this.lineService.getLines();
  }
}
