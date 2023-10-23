import { render } from "react-dom";
import React from "react";
import {Counter} from "./Components/counter";

render(
    <div>
         <Counter/>
    </div>,
   
    document.getElementById('root')
)