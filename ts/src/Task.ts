
export class Task {
    private name: string;
    private isDone: boolean;
    
    constructor(name: string){
        this.name = name;
        this.isDone = false;
    };

    toDTO () {
        return {
            name: this.name,
            isDone: this.isDone
        }
    }

    changeStatus() {
        this.isDone = !this.isDone
    }
};


/*

array ListTask numero de entrada de array

*/