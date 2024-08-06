import { Component, Input } from '@angular/core';
import { AboutpageComponent } from "../aboutpage/aboutpage.component";
import { InteractionpageComponent } from "../interactionpage/interactionpage.component";

@Component({
    selector: 'app-heropage',
    standalone: true,
    templateUrl: './heropage.component.html',
    styleUrl: './heropage.component.css',
    imports: [AboutpageComponent, InteractionpageComponent]
})
export class HeropageComponent {
name = "Product Designer";
front = "Frontend Developer...in progress"
@Input() dynamicLoading: string | undefined;
}
