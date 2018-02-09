import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import HomeComponent from './homeComponent';
import AboutComponent from './aboutComponent';
import NavigationLinksComponent from './navigationLinksComponent';
import ContentComponent from './contentComponent';
const RouterComponent = () =>{
    return(

        <Router>
           <div className="row">
                <section className="col-sm-4">
                    <NavigationLinksComponent/>
                </section>
                <section className="col-sm-8">
                    <Route exact path="/" component={HomeComponent}/>
                    <Route path="/about" component={AboutComponent}/>
                    <Route path="/content" component={ContentComponent}/>
                </section>
            </div>
        </Router>
    )

}

export default RouterComponent;