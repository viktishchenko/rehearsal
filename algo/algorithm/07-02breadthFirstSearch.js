let graph = {};

graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thox", "jonny"];
graph["anuj"] = [];
graph["thox"] = [];
graph["jonny"] = [];
graph["peggy"] = [];

let count = 0;

function breadthfirstsearch(g, first) {
  let sequence = g[first];
  while (sequence.length) {
    count++;
    let person = sequence.pop();
    if (person[person.length - 1] === "m") return person + " is mango seller";
    else {
      sequence = sequence.concat(g[person]);
    }
  }
  return "There are no mango seller in the sequence";
}

console.log(breadthfirstsearch(graph, "you"));
console.log("count>>", count);
