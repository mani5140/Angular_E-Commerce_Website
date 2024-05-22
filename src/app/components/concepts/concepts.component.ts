import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styleUrls: ['./concepts.component.css']
})
export class ConceptsComponent {
  inputText1: string = "";
  inputText2: string = "";
  displayedText: string = "";
  inputText3 : string = "";
  isDisabled: boolean = false;

  updateInput(event: Event){
    const temp = event.target as HTMLInputElement;
    this.inputText1 = temp.value;
  }

  logInput(){
    console.log(this.inputText1);
  }

  updateValue(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.inputText2 = inputElement.value;
  }

  displayText(): void {
    this.displayedText = this.inputText2;
  }

  setDisabled(value: boolean): void {
    this.isDisabled = value;
  }
}
