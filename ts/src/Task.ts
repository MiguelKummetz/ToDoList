export class Task {
    private name: string;
    private isDone: boolean;
    id: number;
    private static nextId: number = 1;
    
    constructor(name: string){
        this.name = name;
        this.isDone = false;
        this.id = this.getNextId();
    };

    private getNextId (): number {
        const currentId = Task.nextId;
        Task.nextId++;
        return currentId;
    }

    toDTO () {
        return {
            name: this.name,
            isDone: this.isDone,
            id: this.id
        }
    }

    changeStatus() {
        this.isDone = !this.isDone
    }
};