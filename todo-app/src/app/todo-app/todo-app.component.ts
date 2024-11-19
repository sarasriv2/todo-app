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
  // The model to bind with input fields
  newGoal = { text: '', completed: false };

  // Array to store the list of goals
  goals: { text: string; completed: boolean }[] = [];

  // Function to add a new goal
  addGoal() {
    // Ensure that the input text is not empty
    if (this.newGoal.text.trim()) {
      // Push the new goal to the goals array
      this.goals.push({ text: this.newGoal.text, completed: false });
      // Clear the input field after adding the goal
      this.newGoal.text = '';
    }
  }
}
