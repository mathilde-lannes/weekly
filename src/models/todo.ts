
export class Todo {
    id: string;
    completed: number;
    name: string;
    category: string;
    priority: number;
    assignedDate: string;
    completedDate?: string;

    constructor(
        id,
        name,
        category,
        completed = 0,
        priority = 0,
        assignedDate = "", // moment().format('YYYY-MM-DD'),
        completedDate = ""
    ) {
        this.id = id;
        this.completed = completed;
        this.name = name;
        this.category = category;
        this.priority = priority;
        this.assignedDate = assignedDate;
        this.completedDate = completedDate
    }

    isCompleted() {
        return this.completed === 1;
    }

    isPriority() {
        return this.priority === 1;
    }
}
