import React from 'react';
import {Link,Outlet} from 'react-router-dom';

export const Error = () => {
return (
    // <div className='text-center error'>
    //     <h1>404</h1>
    //     <p>page not found</p>
    // </div>
    <section class="page_404">
        <div class="container">
            <div class="row"> 
                <div class="col-sm-12 ">
                    <div class="col-sm-10 col-sm-offset-1 a text-center">
                        <div class="four_zero_four_bg">
                            <h1 class="text-center ">404</h1>
                        </div>
                        <div class="contant_box_404">
                            <h3 class="h2">Look like you're lost</h3>
                            <p>the page you are looking for not avaible!</p>
                            <Link to="/" class="link_404">Go to Home</Link>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)};
