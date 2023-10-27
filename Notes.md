# Intro
## prerequisites
JS
Html
CSS

## What is react?
Tree of components that interact with each other

## Setting up the development environemnt
Node 16 +
VS code is recommended. if using, use prettier.

## Creating a React App
CRA - create react app
Vite is an alternative that is getting popular.

There are more recent versions, but lets stay with mosh...
`npm create vite@4.1.0`

## Structure
node modules contains installed libraries - don't touch
public contains assests such as images
### src is source code, i.e. react components
index - a reference to the entry point of our react app
package.json - a list of all our dependencies required for out app
tsconfig - a bunch of settings we shouldn't need to change
vite.confog.js - config for vite, we should need to change this either


## 7. Creating a React component
We created message.tsx. This is like jsx but for typescript. There is just a convention to follow here, no rules.

There are two main ways to create a component; class based and function based. Function based is more popular these days.

## 8. How React Works.
React creates a virtual DOM based upon the component tree. A actual DOM is created by a library called REACTDOM.    When the state or data of a component is updated the virtual DOM is updated. React compares the virtual DOM with the actual DOM and updates any elements requiring updates.

## 9. React Ecosystem
React is a JS library for creating user interfaces. Not like Vue or Angular which are framworks.
React is just for creating UI components, where as Angular and Vue also handle I18N, Routing etc.

We will FOcus on React and then look at other Libararies that work with React.

# 10. Building components
This sections will focus on JSX markup, state, props and debugging

## 11.  Creating a listgroup component

We needed to install bootstrap for this to give a nice look and feel.

`npm i boostrap`

Handy shortcut CMD + D gives you multiple cursors for the same word.

## 12. Fragments

Handy shortcut Select code you want to wrap, CMD + Shift + P to open the command pallet. Then search for "wrap with abbreviation" to wrap code. In this case we used 
```
<>
</>
```


## 13. Rendering lists
## 14. Conditional Rendering
## 15. Handling Events
## 16. Managing State
## 17. Passing data via props
## 18. Passing functions via props
This is how we can communicate to a parent element that the child element has been changed in some way. We don't want to implement this code in the child component, we will always need the same child component to be used by the same parent component. i.e. our component will no linger be reusable.

## 19. State vs Props
State is like the internal state of a component.
Props are the input that are passed in to a components.

Props should be immutable
State is mutable, i.e. can be changed.

A change to either will cause a re-render the component, and update the DOM as necessary.

## 20. Passing children
Handy shortcut: install "ES7+ React/Redux/React-Native snippets" and a bunch of shortcuts will be added to vscode. In this example we use rafce which stands for "react arrow function export component"

## 21. Inspecting Components with React Dev Tools
![[Screenshot 2023-10-27 at 21.07.51.png]]
The hierarchy of the components can be seen. yes the eye icon to see the component in the elements view, use the <> icon to see the source code of the element