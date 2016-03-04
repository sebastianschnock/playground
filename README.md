# eHealth Africa coding challenge

## Short programming questions
All programming solutions can be found in the file [algorithms.js](algorithms.js).
### Depth-first tree traversal
Tree traversal is the method of visiting the nodes of a tree data structure. Starting from the root node the depth-first algorithm moves to the next child for every node before traversing the other siblings (that is why it's called depth-first, breadth-first would be the opposite: traversing the siblings before child nodes). The algorithm in pseudo code could look like this:
```
function traverse_tree(node):
    visit(node)
    for every child in node.children
        traverse_tree(node)
```
Depth-first tree traversal is typically used in search algorithms to reduce the number of nodes must be visited. The complexity then depends on the structure of the tree and how well it is balanced.

## angular-pouchdb test app
The test app resides in the ```angular-pouchdb-test``` folder.
### Test it
```
npm test
```
### Run it
```
npm start
```
Open your browser and point it to <http://localhost:8888>
### Notes
I did not include a build step but chose to simply drop the few library files in the project itself. Using browserify would have certainly been another (better scaling) solution.