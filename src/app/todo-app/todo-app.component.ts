import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-todo-app',
  standalone: true,
  imports: [CommonModule, FormsModule, DragDropModule],
  templateUrl: './todo-app.component.html',
  styleUrl: './todo-app.component.scss'
})

export class TodoAppComponent {
  newGoal = { text: '', completed: false };
  goals: { text: string; completed: boolean }[] = [];
  filter: 'all' | 'active' | 'completed' = 'all';

  addTodo(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.newGoal.text.trim()) {
      this.goals.push({ text: this.newGoal.text, completed: false });
      this.newGoal.text = '';
    }
  }

  toggleGoalCompletion(goal: { text: string; completed: boolean }) {
    goal.completed = !goal.completed;
  }

  get filteredGoals() {
    return this.goals.filter((goal) => {
      if (this.filter === 'active') return !goal.completed;
      if (this.filter === 'completed') return goal.completed;
      return true; // 'all'
    });
  }

  clearCompleted() {
    this.goals = this.goals.filter(goal => !goal.completed);
  }

  setFilter(filter: 'all' | 'active' | 'completed') {
    this.filter = filter;
  }

  get remainingGoalsCount() {
    return this.goals.filter(goal => !goal.completed).length;
  }

  drop(event: any) {
    const previousIndex = event.previousIndex;
    const currentIndex = event.currentIndex;
    const movedItem = this.goals.splice(previousIndex, 1)[0];
    this.goals.splice(currentIndex, 0, movedItem);
  }
}
