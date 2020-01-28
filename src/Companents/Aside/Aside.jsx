import React from 'react';
import './Aside.css';
import {Link, Route} from "react-router-dom";

export default function(){
    return(
        <Route path="/men">
            <aside className='mainAside'>
                <header>
                    <Link className='close' to='/'>X</Link>
                </header>
                <div className='contant'>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Accusamus sequi aperiam, facere voluptate eum repellat minima incidunt beatae,
                        qui hic earum omnis perspiciatis architecto doloribus, corporis facilis reiciendis
                        consequuntur in.
                    </p>
                </div>
            </aside>
        </Route>
        
    )
}