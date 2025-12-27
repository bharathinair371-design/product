import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navabar } from "./navabar/navabar";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navabar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project');
}
