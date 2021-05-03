import { makeHello } from "shared/module";

export let add = (x: number, y: number): number => x + y;

export class Tests {

    launch() {
        // Lesson 1: props 
        game.Workspace.Entity.Head.Transparency = 0.2;
        game.Workspace.Entity.Body.Material = Enum.Material.Grass
        game.Workspace.Entity.Head.Color = Color3.fromRGB(111, 111, 111)
        game.Workspace.Entity.Body.Anchored = true
        game.Workspace.Entity.Head.Material = Enum.Material.Ice
        // Lesson 1: prints
        print("text" + add(1336, 1))
        print(game.Workspace.Entity.Head);
        print(game.Workspace.TestPart);
        // Lesson 2: props
        game.Workspace.Entity.Legs.Material = Enum.Material.Marble
        game.Workspace.TestPart.Material = Enum.Material.Neon
        // Lesson 3: dice game
        let dice = () => {

            let dice1 = game.Workspace.GameParts.Dice.Dice1
            let dice2 = game.Workspace.GameParts.Dice.Dice2

            dice1.Anchored = false

            wait(0.5)

            dice2.Anchored = false 
            
        }
        dice()
        // Lesson 5

        let make = () => {
            let myPart = new Instance("Part")
            myPart.Position = new Vector3(5,5,5)

            myPart.Parent = game.Workspace
        }
        make()
    }
}

print(makeHello("testScript running below!"))