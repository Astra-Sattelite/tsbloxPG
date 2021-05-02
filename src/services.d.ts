export {};

declare global {
    interface Workspace extends Instance {
        Entity: Model & {
            Body: Part;
            Head: Part;
        }
        TestPart: Part & {
        }  
    }
}