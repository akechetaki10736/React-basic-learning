import React from "react";
import ReactDoM from "react-dom";
import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyBx2tB2IZB1qvpCoCdaLzTvgmnQVhSqjzE";

// Create a new componenet. The component should produce some HTML
const App = () => {
    return <div>
        <SearchBar />
    </div>;
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDoM.render(<App />, document.querySelector('.container'));
