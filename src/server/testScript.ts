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
            print("dice")
        }
        dice()
    }
}

print(makeHello("testScript running below!"))