import './portfolio.css'
import Card from "./Cards";
function Portfolio(){
    return(
        <div className="portfolio">
        <h1>
            Portfolio
        </h1>
        <div className='cardsGrid'>
            <Card color="white" />
            <Card bgColor="gray"/>
            <Card color="white"/>
            <Card bgColor="gray"/>
            <Card color="white"/>
            <Card bgColor="gray"/>
        </div>
        </div>
    )
}
export default Portfolio;