import React from "react";

function Blogs() {
  return (
    <div className="flex flex-col items-center w-5/6 mx-auto py-20 font-main">
      <div className="text-center pb-8">
        <h1 className="text-5xl font-bold pb-4">Blogs</h1>
        <p className="text-lg text-mainText/70">
          Let's explore some basic concept that will make us a good developer.
        </p>
      </div>

      {/* Q/A  */}
      <div className="py-7 px-10 my-6 bg-white w-11/12 mx-auto rounded-2xl ">
        <h1 className="text-2xl font-bold pb-5 border-b-2 border-dashed border-gray-200">
          What is useState and how does it work in React?
        </h1>
        <p className="text-lg text-mainText/70 border-b-2 border-dashed border-gray-200 py-5">
          <strong>"useState"</strong> is a React hook that lets you create and
          manage component-level state, causing the component to re-render when
          the state changes.
        </p>
        <p className="text-mainText/40 pt-5">Added at 05/01/2025</p>
      </div>
      {/* Q/A  */}
      <div className="py-7 px-10 my-6 bg-white w-11/12 mx-auto rounded-2xl ">
        <h1 className="text-2xl font-bold pb-5 border-b-2 border-dashed border-gray-200">
          What is the purpose of useEffect in React?
        </h1>
        <p className="text-lg text-mainText/70 border-b-2 border-dashed border-gray-200 py-5">
          <strong>"useEffect"</strong> lets you run side effects (like fetching
          data or setting up subscriptions) after the component renders or when
          its dependencies change.
        </p>
        <p className="text-mainText/40 pt-5">Added at 05/01/2025</p>
      </div>
      {/* Q/A  */}
      <div className="py-7 px-10 my-6 bg-white w-11/12 mx-auto rounded-2xl ">
        <h1 className="text-2xl font-bold pb-5 border-b-2 border-dashed border-gray-200">
          What is a custom hook in React and when should you use one?
        </h1>
        <p className="text-lg text-mainText/70 border-b-2 border-dashed border-gray-200 py-5">
          <strong>"A custom hook"</strong> is a reusable JavaScript function
          that uses React hooks to encapsulate logic and is used to share
          behavior across multiple components.
        </p>
        <p className="text-mainText/40 pt-5">Added at 05/01/2025</p>
      </div>
      {/* Q/A  */}
      <div className="py-7 px-10 my-6 bg-white w-11/12 mx-auto rounded-2xl ">
        <h1 className="text-2xl font-bold pb-5 border-b-2 border-dashed border-gray-200">
          Difference between controlled and uncontrolled components? Which one
          is better?
        </h1>
        <p className="text-lg text-mainText/70 border-b-2 border-dashed border-gray-200 py-5">
          <strong>"Controlled components"</strong> rely on React state to manage
          input values, whereas <strong>"Uncontrolled components"</strong>
          use the DOM directly with refs, and controlled is generally better for
          consistency and validation.
        </p>
        <p className="text-mainText/40 pt-5">Added at 05/01/2025</p>
      </div>
      {/* Q/A  */}
      <div className="py-7 px-10 my-6 bg-white w-11/12 mx-auto rounded-2xl ">
        <h1 className="text-2xl font-bold pb-5 border-b-2 border-dashed border-gray-200">
          Tell us something about useFormStatus()
        </h1>
        <p className="text-lg text-mainText/70 border-b-2 border-dashed border-gray-200 py-5">
          <strong>"useFormStatus()"</strong> is a hook in React (typically in
          frameworks like Next.js with forms) that lets you track the status of
          a form submission, such as whether it's currently pending or has
          succeeded or failed.
        </p>
        <p className="text-mainText/40 pt-5">Added at 05/01/2025</p>
      </div>
    </div>
  );
}

export default Blogs;
