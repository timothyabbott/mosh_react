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



## 31 Adding Icons
## 32 Exercise: Using CSS modules
## 33 Exercise: Creating a reusable like component

# 34 Managing Component State
## 35 Understanding the State Hook
### State is updated asynchronously
if you log something just after changing state the state won't have changed.
 - This is for performance reasons. All updates are applied first, then the state is updated. 
### State is stored outside of the component

 ![[Pasted image 20231107095825.png]]
The above is problematic because the count will always be re-created at the time of execution of the functional Component. The variables associated with useState are stored outside of the Component.
### Use hooks on the top level of components
Because the state variables are stored externally, any if or while loops may affect the order of these variables meaning the wrong state variable could be updated.

## 36 Choosing the State Structure

### Only store what is needed
if a value can be derived from existing variables, don't create a new state variable. i.e. full name can be derived from second name and first name

### Group Related State Variables

```
const[person,setPerson] = useState({
	firstName: '',
	lastName:''
})
```

Variables not related to a person should not be included in the same object
Nested structures should be avoided, prefer a flat structure.

## 37.  Keeping Components Pure
Pure means that you will always get the same result.
Any changes should be out of the render phase i.e. the function that returns the JSX, though if we create a value in the render phase, we can update that.

## 38.  Understanding Strict Mode

 In strict mode ( the default ) each component is rendered twice, once to look for issues, once to render to the DOM

## 39. Updating Objects
State objects are should be considered immutable. In order to update the state of an object a new object must be created for React to detect the change 

![[Pasted image 20231108125202.png]]
won't work as we are passing the same drink object to setDrink
![[Pasted image 20231108125327.png]]
Will work. 

## 40. Updating Nested Objects
This is a concrete example of why we need 

![[Pasted image 20231108162317.png]]We need to spread (...) the customer and the address, and then update the zipcode) this is to make sure that each object is new.

## 41.  Updating Arrays
Here we have an array that is stored in state
![[Pasted image 20231108170546.png]]
In order to trigger a re-render we need a new tags array :

![[Pasted image 20231108170915.png]]
the Remove filters tags any item that is equal to the value 'happy'
The update updates any tag which is equal to 'happy' to 'happiness' otherwise the original value is used.

## 42.  Updating an Array of objects
We only need to replace any update object with a new object, we don'y have to create a new array in this case.
Here we have an array of objects:
![[Pasted image 20231109081411.png]]
In order to update the first item to fixed:true
![[Pasted image 20231109081607.png]]
The above line starts setBugs(....

## 43. Simplifying update logic with Immer
This looks like it will be a useful library. re-watch the video for more information and checkout the site https://immerjs.github.io/immer/

It significantly reduces the amount of boiler plate required to update state objects, and reduces the likelihood of bugs.

Immer needs to be installed to sue it.

## 44. Sharing State Between Components
The example given is one of a shopping cart that is the child component of a header which contains the number of items in the shopping cart. The state needs to be lifted from the shopping cart to the header, and the state that the shopping cart used to use to render will be passed down the shopping cart through props.

There is a clear button on the shopping cart, the on click method is passed in from the header component, and  the method to clear the cart is written on the header component to update the date there.

## 45. Exercise: Updating state







