import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-todo-app',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-app.component.html',
  styleUrl: './todo-app.component.scss'
})

export class TodoAppComponent {

  newGoal = { text: '', completed: false };

  goals: { text: string; completed: boolean }[] = [];

  addTodo(event: KeyboardEvent) {
    if (event.key === 'Enter'){
      if (this.newGoal.text.trim()) {
   
      this.goals.push({ text: this.newGoal.text, completed: false });

      console.log(this.newGoal);
      this.newGoal.text = '';
      }
    }
  }

}
