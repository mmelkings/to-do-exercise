export class Task{

    /**
     * Task:
     * id <= Identifier
     * name <= Name, description
     * status <= 1 = to-do / 2 = done 
     */
    constructor(
        public name: string,
        public  id: number = null,
        public status: number = 1,
        public subTasks: Task[] = []
    ){}

    public setId(id: number){
        this.id = id;
    }
}