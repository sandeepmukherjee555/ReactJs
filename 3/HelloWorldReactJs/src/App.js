import React, { createElement } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';

const HeadingComponent = () => {
  return createElement('div', { id: 'title' }, [
    createElement('h1', { id: 'heading1' }, 'Hello World 1'),
    createElement('h1', { id: 'heading2' }, 'Hello World 2'),
    createElement('h1', { id: 'heading3' }, 'Hello World 3')
  ]);
};

const JsxHeadingComponent = () => {
  return (
    <div id="title">
      <h1 id="heading1">Hello World 1</h1>
      <h1 id="heading2">Hello World 2</h1>
      <h1 id="heading3">Hello World 3 </h1>
    </div>
  );
};
const MainApp = () => {
  return (
    <>
      <Header />
      {/* <JsxHeadingComponent /> */}
      {/* <HeadingComponent /> */}
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainApp />);
