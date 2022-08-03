import { useParams } from "react-router-dom"   

const Portfolio = (props) => {

    let { portfolioType } = useParams();

    return(
    <div className="portfolioPage">
        <h1 className="pageText">Main Portfolio Page</h1>
    </div>
    )

}

export default Portfolio