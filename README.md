# MODAL PORTAL Reaxio

<p align="center">
  <img src="https://cldup.com/K3-R0bY2T8.gif"/>
</p>
<p align="center">
  <a title="Build Status" href="https://travis-ci.org/carrot/share-button">
   
  </a>
</p>

# An Introduction

React component, easy, simple, small and improved, this is MODAL PORTAL  

# When To Use

When requiring users to interact with the application, but without jumping to a new page and interrupting the user's workflow, you can use MODAL PORTAL to create a new floating layer over the current page to get user feedback or display information. 

## Why Should You Use This?

Many of the components for Reactjs are in a single installation, not only the component you need and in many cases very heavy, but this is ideal for:

1. Quick and easy loading and small
2. They don't inject extra javascript and DOM elements into your page, making it slower.
3. Easy to customize enough to adapt to the design of your site.
4. Reaxion MODAL PORTAL, takes up very little space, specific and simple for your project.
5. It can be customized in any way.

## 📦 Install

`npm i @reaxio/modal`

## 🔨 Usage

```jsx
import {useState} from 'react';
import ModalPortal from "@reaxio/modal";

const App = () => {

	const [state,setState] = useState(false);

	const haldlenModalPortal=()=>{
		setState(!state)
	}


	return (
		<>
			<button onClick={haldlenModalPortal} >Open to Modal Portal</button>
			<ModalPortal 
					state={state} 
					title={<small>Title with small HTML 😬</small>}
					onBtnClose={haldlenModalPortal} 
					>
					<h4>Hi!! Here  Portal! is Okey! 😀 👍🏼</h4>
			</ModalPortal>
		</>
			)
};
```

## ✨ API

| Property   | Description                                                                                                | Type    | Default |
| :--------- | :--------------------------------------------------------------------------------------------------------- | :------ | :------ |
| state        | Whether the modal dialog is visible or not button                                                                                | Boolean  | false        |
| title  | The modal dialog's title | string or HTMLElement  |
| className   | The class name of the container of the modal dialog                                                                            | string |    |
| classNameTitle | The class name of the title of the modal dialog                                                                          | string  |  |
|classNameBody| The class name of the Body of the modal dialog|string||
|classNameFooter| The class name of the Footer of the modal dialog|string||
|classNameBtnOne| The class name of the Button Close  of the modal dialog, this button is default in case not config in props, set  function onBtnClose for Specify a function that will be called when a user clicks mask|string||
|nameBtn|Set objects for Text of the OK, Cancel ,second and third button, only default Text is Cancel|object| *view Note 1 |
|onBtnOkey|Specify a function that will be called when a user clicks the OK button|function(e)| |
|onBtnClose|Specify a function that will be called when a user clicks the CANCEL or CLOSE button|function(e)||
|onBtnSecond|Specify a function that will be called when a user clicks the second button|function(e)||
|onBtnThird|Specify a function that will be called when a user clicks the third button|function(e)||

---
* Note 1: This props nameBtn value default is ```{ok:'',cancel:'CLOSE',secondBtn:'',thirdBtn:''}```, only the element "cancel" is default text 'CLOSE'. 
* Note 2: 
If you want to activate the ok, second or third buttons, the element of the button that is assigned in the object is placed props ```nameBtn```.
* Note 3: All calls to the props methods close the Modal window, the (e) event is a boolean parameter return false, for state Modal is closed.
---

## 🔺Examples

Look at our [MODAL example](https://codesandbox.io/s/zen-elbakyan-czqcd?file=/src/App.js)
 in CodeSandox, easy, simple and fast !!!

Thanks for using it.
😃 👊🏼
