# prerequisites
JS
Html
CSS

# What is react?
Tree of components that interact with each other

# Setting up the development environemnt
Node 16 +
VS code is recommended. if using, use prettier.

# Creating a React App
CRA - create react app
Vite is an alternative that is getting popular.

There are more recent versions, but lets stay with mosh...
`npm create vite@4.1.0`

# Structure
node modules contains installed libraries - don't touch
public contains assests such as images
## src is source code, i.e. react components
index - a reference to the entry point of our react app
package.json - a list of all our dependencies required for out app
tsconfig - a bunch of settings we shouldn't need to change
vite.confog.js - config for vite, we should need to change this either


# Creating a React component
We created message.tsx. This is like jsx but for typescript. There is just a convention to follow here, no rules.

There are two main ways to create a componenet; class based and fuction based. Function based is more popular these days.