import { makeHello } from "shared/module";
import { add } from "./testScript"

game.Workspace.Entity.Head.Transparency = 0.2;
game.Workspace.Entity.Body.Material = Enum.Material.Grass
game.Workspace.Entity.Head.Color = Color3.fromRGB(111, 111, 111)
game.Workspace.Entity.Body.Anchored = true



print("text" + add(1336, 1))

print(game.Workspace.Entity.Head);
print(game.Workspace.TestPart);

