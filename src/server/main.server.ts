import { makeHello } from "shared/module";
import { Tests, add } from "./testScript"

let Start = () => { 
    new Tests().launch() 
}

Start()


let Update = () => { 
    print("Wow, I'm print")
    Update()
}

print(makeHello("UwU"))
