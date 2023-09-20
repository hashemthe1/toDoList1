import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'toDoList';
  // Array to store the Tasks
  list: any[] = [];
  // filter value keep track
  filterStatus = 'all';

  // method to add  Tasks
  addTask(item: string) {
    const currentTime: Date = new Date();

    this.list.push({
      id: this.list.length,
      name: item,
      completed: false,
      timestamp: currentTime.toISOString(),
    });

    console.warn(this.list);
  }

  // Remove Task Function
  removeTask(selIndex: number) {
    this.list.splice(selIndex, 1);
  }
  // Filter tasks based on the option selected
  get filteredList() {
    if (this.filterStatus === 'completed') {
      return this.list.filter((item) => item.completed);
    } else {
      return this.list;
    }
  }
}
