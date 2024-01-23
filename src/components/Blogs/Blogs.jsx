/* eslint-disable no-unused-vars */
import React from 'react';
import './Blogs.css'
import Queen from '../../assets/icons/download.png'
const Blogs = () => {
    return (
        <div>
            <div className='CQ-ANSContainer'>
                <div>
                    <div className='CQ-ANS'>
                        <h2>What Is Custom Hook ?</h2>
                        <p>Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time you use a custom Hook, all state and effects inside of it are fully isolated.</p>
                    </div>
                    <div className='CQ-ANS'>
                        <h2>When should You Use Context API ?</h2>
                        <p>If you pass props down multiple levels of the component tree, especially when the intermediate components do not directly use the props, it might be a good idea to use React Context API to avoid prop drilling and simplify your component code.</p>
                    </div>
                    <div className='CQ-ANS'>
                        <h2>Difference Between State & Props?</h2>
                        <p>Props are used to pass data from a parent component to a child component, while state is used to manage data within a component. Props are immutable and cannot be changed within a component, while state is mutable and can be updated using the setState function.</p>
                    </div>
                </div>
                <div>
                    <div className='CQ-ANS'>
                        <h2>What Is useRef ?</h2>
                        <p>The useRef is a React hook that allows to directly create a reference to the DOM element in the functional component. <br />
                            The useRef hook is a new addition in React 16.8. To learn useRef the user should be aware about refs in React. Unlike useState if we change a value in useRef it will not re-render the webpage.
                        </p>
                    </div>
                    <div className='CQ-ANS'>
                        <h2>What Is useMemo ?</h2>
                        <p>The useMemo is a React Hook that lets you cache the result of a calculation between re-renders. </p>
                    </div>
                    <div className='CQ-ANS'>
                        <h2>How Virtual DOM Works ?</h2>
                        <p>Virtual DOM is a virtual representation of the real DOM. When state changes occur, the virtual DOM is updated and the previous and current version of virtual DOM is compared. This is called “diffing”. The virtual DOM then sends a batch update to the real DOM to update the UI.</p>
                    </div>
                </div>
            </div>
            <div className='queen'>
                <h3>Queen Of My Heart</h3>
                <img src={Queen} alt="" />
            </div>
            {/* 
            <div className="appliedDescription">
        <h3>What Is A Job Description? </h3>
        <p>
          A job description is a tool that explains the tasks, duties, function
          and responsibilities of a position. It details who performs a specific
          type of work, how that work is to be completed, and the frequency and
          the purpose of the work as it relates to the organization's mission
          and goals.
        </p>
        <h3>PHP: Hypertext Preprocessor?</h3>
        <p>
          A popular general-purpose scripting language that is especially suited
          to web development. Fast, flexible and pragmatic, PHP powers
          everything from your blog to
        </p>
        <h3>Python Basic Structure?</h3>
        <p>
          The basic Python data structures in Python include list, set, tuples,
          and dictionary. Each of the data structures is unique in its own way.
          Data structures are “containers” that organize and group data
          according to type. The data structures differ based on mutability and
          order.
        </p>
        <h3>Python Basic Rules?</h3>
        <p>
          # A variable name must start with a letter or the underscore
          character. <br />
          # A variable name cannot start with a number. <br />
          # A variable name can only contain alpha-numeric characters and
          underscores (A-z, 0-9, and _ ). <br /># Variable names are
          case-sensitive (age, Age and AGE are three different variables).
        </p>
      </div> */}
        </div>
    );
};

export default Blogs;