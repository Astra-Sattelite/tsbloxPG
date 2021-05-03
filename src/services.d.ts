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
        
        GameParts: Model & {
            Dice: Model & {
                Dice1: Part;
                Dice2: Part;
            }
        }
    }
}