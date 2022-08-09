const NewsItem = ((item) =>{
console.log(item.item)
return(
    <li>
        <h4><a href={item.item.url}>{item.item.title}</a></h4>
        <p>{item.item.by}.</p>
    </li>
)


});


export default NewsItem