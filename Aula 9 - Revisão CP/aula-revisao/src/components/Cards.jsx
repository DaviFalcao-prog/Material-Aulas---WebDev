export default function Cards({name, description, html_url, stargazers_count, topics=[], btnDestaques=""}) {
    return (
        <div className="border-2 border-red-700 rounded-lg gap-3 mg-5">
            <h1>{name}</h1>
            <p className="">{description}</p>
            <p>★{stargazers_count}</p>
            <div className="flex flex-wrap mb-2 gap-3">
            {topics.slice(0,5).map(topic => (
                <span 
                key={topic}
                className=" bg-gray-800 text-sm px-2 py-1 rounded-full mr-1"
                >
                    {topic}
                </span>
            ))}
            </div>
            <div className="flex justify-center">
            <a 
            href={html_url} 
            target="_blank"
            className="text-red-500 bg-white m-1 text-center border-1 border-white rounded-lg w-full">Ver Repositório
            </a>
            </div>
        </div>
    );
}