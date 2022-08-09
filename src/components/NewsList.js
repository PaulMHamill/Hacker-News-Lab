import NewsItem from "./NewsItem";

const NewsList = ((news) =>{
console.log(news.news[0])

    const newsNode = news.news. map((story, i) => {
        return <NewsItem key={i} item={story}></NewsItem>;
    })

return(
    <ul>
        {newsNode}
    </ul>
)

})

export default NewsList;