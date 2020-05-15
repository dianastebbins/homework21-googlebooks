import React, { useState, useEffect } from 'react'
import "./style.css"
// import {useParams,useHistory} from "react-router-dom"
// import API from "../../utils/API"

import BookInfo from "../../components/BookInfo";
import SearchForm from "../../components/SearchForm";

export default function Books() {
    const [pageModeState, setPageModeState] = useState("Search");
    const [booklistState, setBooklistState] = useState([]);
    const [searchContextState, setSearchContextState] = useState("");
    
    const handlePageModeButtonClick = event => {
        event.preventDefault();
        console.log(event.target.name);
        setPageModeState(event.target.name);
    }

    const handleBookInfoActionButtonClick = event => {
        event.preventDefault();
        if( pageModeState === "Saved"){
            console.log("Delete book " + event.target.name);
            // if delete, delete. remove from database, refresh list
        } else {
            console.log("Save book " + event.target.name);
            // if save, save. add to database
        }
    }

    const handleInputChange = event => {
        event.preventDefault();
        setSearchContextState(event.target.value);
    }

    useEffect(()=>{
        // API.getAllPlayers().then(res=>{
        //     console.log(res.data)
        //     setPlayersState(res.data)
        //     setFilteredPlayersState(res.data)
        // }).catch(err=>{
        //     console.log(err);
        // })
        // 
        console.log("pageModeState is " + pageModeState);
        // console.log("searchContextState is " + searchContextState);    
            if(pageModeState === "Search"){
            // set displaybook list to empty for now
            // set displaybook list to api get results
            setBooklistState([
                {id:3, title:"Green Eggs and Ham", authors: ["Dr.Suess","Someone Else"]}
            ])
        } else {
            // TODO search database for saved books
            // set displaybook list to database results
            setSearchContextState("");
            setBooklistState([
                {id:1, title:"Outlander", authors: ["Diana Gabaldon"]},{id:2, title:"The Stand", authors: ["Stephen King","Someone Else"]}
            ]);
        }
    },[pageModeState]);

    useEffect(() => {
        console.log(booklistState);
    },[booklistState]);

    useEffect(() => {
        console.log(searchContextState);
    },[searchContextState]);

    return (
        <div className="Books" id="Books">
            <SearchForm handleInputChange={handleInputChange} handleButtonClick={handlePageModeButtonClick} />
            <h5 className="list-header">{pageModeState === 'Saved' ? 'Saved Books:' : booklistState.length > 0 ? 'Search results:' : ''}</h5>
            <hr></hr>
            <BookInfo handleButtonClick={handleBookInfoActionButtonClick} booklist={booklistState}
                actionButtonPrompt={pageModeState === 'Saved' ? 'Delete from Favorites' : 'Save to Favorites'}/>
        </div>
    )
}
