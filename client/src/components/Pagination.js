import { Link } from "react-router-dom";

const Pagination = ({path,page,perPage,count}) =>
{
    const totalLinks = Math.ceil(count/perPage); 
    let startLoop = page;
    let diff = totalLinks-page;
    if(diff<=2)
    {
        startLoop = totalLinks-2;
    }
    let endLoop = startLoop + 2;
    if(startLoop<=0)
    {
        startLoop=1;
    }
    const links = () => {
        const allLinks = [];
        for(let i = startLoop; i<=endLoop; i++)
        {
            allLinks.push(
                <li key={i}>
                    <Link className={`pagination-link ${page === i && 'bg-gray-400 text-gray-900'}`} to = {`/${path}${i}`}>{i}</Link>
                </li>
            )
        }
        return allLinks;
    }
    const next = () =>{
        if(page<totalLinks)
        {
            return <li><Link className="pagination-link" to ={`/${path}${page+1}`}><i className="fa-solid fa-chevron-right"></i></Link></li>
        }
    }
    const prev = () =>{
        if(page>1)
        {
            return <li><Link className="pagination-link" to ={`/${path}${page-1}`}><i className="fa-solid fa-chevron-left"></i></Link></li>
        }
    }
    return count >3 && (
        <ul className="flex mt-2">
            {prev()}
            {links()}
            {next()}
        </ul>
    );
}

export default Pagination;