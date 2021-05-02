export {};

declare global {
    interface Workspace extends Instance {
        Entity: Model & {
            Legs: Part;
            Head: Part;
            Body: Part;
        }
        TestPart: Part & {
        }  
    }
}