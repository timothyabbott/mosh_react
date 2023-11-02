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

## 22. Exercise: creating a button component
look here for info about validating props,  making props them optional and default values.

## 23. Exercise: Showing an alert
It is sometimes difficult to tell where the state should belong. State should always reside in the component, props are passed down to children. In this case we altered "visible" between true and false. The state belongs on the parent, we can then conditionally render it.

# 24. Styling components
## 25. Vanilla CSS
There are lots of css Libraries like Bootstrap and Material UI. only use Vanilla CSS if you really need/want to

![[Pasted image 20231101211013.png]]

There are lots of different ways of arranging css and files and js files. It is a preference. The rational behind this approach is that if the list group component was ever wanted somewhere else, you could move the whole folder and the styling would come with it.

What the function index.ts performs is to reduce the clutter around importing files, by one less path item. the difference can be seen in apps.tsx. If a folder is imported then by default the compiler will look for a file called index. This index file in our case just exports the ListGroup.tsx

The styling relevant to our component then goes in our ListGroup.css file.

## 26.  CSS Modules

we can have clashes where two css files reference the elements. This can be solved by using css modules.

## 27. CSS in JS
It is possible to have css in JS files. like the css modules approach but have the css in the same file. This is controversial but does have some benefits.
- Styles are scoped to the JS 
- All related JS/TS and CSS in one place
- Easier to delete a component as all code is in one place
- Easier to style code based on props / state
## 28. Separation of Concerns
The idea of separation of concerns is to make sure that a section of code handles one specific piece of functionality. CSS in JS  doesn't violate this principle because the ListGroup Component does just one thing, regardless of where the CSS is.

```
<ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectedItem}
      />
```

The above shows a clear interface to use out component and the user of the component doesn't need to worry about the implementation details

## 29. Inline Styles
 This is considered a bad practice because it makes it more difficult to see where styles are being applied.
 ```
 {/* double braces because we are using jsx (one set of brackets) stayles takes an obeject(second set of braces) */}

<ul className="list-group" style = {{backgroundColor: 'yellow'}} ></ul>
```  

because we are working in JSX hyphens aren't allowed. hence backgroundColor not background-color

## 30. Popular UI Libraries
- Bootstrap
- Material UI
- Tailwind
are examples.

we will be using chakra which is built on top of tailwind in a later project.



