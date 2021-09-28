import { Link } from 'react-router-dom'

function HomePage() {
    return(
        <div>
            <h1>First Home Helper</h1>
            <i>Select from the below options to get started ...</i>
            <br/><br/>
            <ul>
                <li><Link to='guide'>Guide</Link></li>
                <li><Link to='lingo'>Lingo</Link></li>
                <li><Link to='calculators'>Calculators</Link></li>
            </ul>
        </div>
    )
}

export default HomePage;