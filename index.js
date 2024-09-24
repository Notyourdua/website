"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function Home() {
    return className = "home" >
        Welcome;
    to;
    the;
    Home;
    Page < /h1>
        < p > This;
    is;
    a;
    simple;
    home;
    page;
    of;
    a;
    multi - page;
    react_1.default;
    website. < /p>
        < /div>;
    ;
}
exports.default = Home;
function About() {
    return className = "about" >
        About;
    Us < /h1>
        < p > Learn;
    more;
    about;
    our;
    website;
    on;
    this;
    page. < /p>
        < /div>;
    ;
}
exports.default = About;
function Contact() {
    return className = "contact" >
        Contact;
    Us < /h1>
        < p > Get in touch;
    with (us)
        using;
    this;
    contact;
    form. < /p>
        < /div>;
    ;
}
exports.default = Contact;
var react_router_dom_1 = require("react-router-dom");
function App() {
    return className = "app" >
        to;
    "/" > Home < /Link></li >
        to;
    "/about" > About < /Link></li >
        to;
    "/contact" > Contact < /Link></li >
        /ul>
        < /nav>
        < react_router_dom_1.Routes >
        path;
    "/";
    element = {} < Home /  > ;
}
/>
    < react_router_dom_1.Route;
path = "/about";
element = {} < About /  > ;
/>
    < react_router_dom_1.Route;
path = "/contact";
element = {} < Contact /  > ;
/>
    < /Routes>
    < /div>
    < /Router>;
;
exports.default = App;
