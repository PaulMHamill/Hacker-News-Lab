import { useEffect, useState } from 'react'
import NewsList from '../components/NewsList';
import Search from '../components/Search';


function NewsBox(){

    const [storyIds, setStoryIds] = useState([]);
    const [topStoryIds, setTopStoryIds] = useState([]);
    const [stories, setStories] = useState([]);
    const [searchedStories, setSearchStories] = useState([]);

    useEffect(() => {
        fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
        .then(res => res.json())
        .then((data) => setStoryIds(data))
    },[])

    useEffect(() => {
        setTopStoryIds(storyIds.splice(0,10))
    },[storyIds])



// UseEffect runs on page load and on state change, this will only run the function getStories if topStoryIds is populated

    useEffect(() => {
    if(topStoryIds.length > 0)
        getStrories(topStoryIds)
    },[topStoryIds])



const getStrories =((topStoryIds) =>{

    const story = topStoryIds.map((id) => {
        return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        .then(res => res.json());
        });
        Promise.all(story)
        .then((data) => setStories(data))
        });


const handleSearch = (userInput) => {
    const userSearch = userInput.toLowerCase();
    const searching = stories.filter((story) => {
    return story.title.toLowerCase().indexOf(userSearch) > -1;
    });
    setSearchStories(searching);
}





if(stories.length !==0 ){
    return(
    <div>
        <Search handleSearch={handleSearch} />
        {stories.length !==0 ? <NewsList news={searchedStories}></NewsList> :null}
    </div>
    )}
}


export default NewsBox





















