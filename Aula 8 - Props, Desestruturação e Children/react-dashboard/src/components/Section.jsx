export default function Section(props) {
    return (
        <div>
            <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">{props.titulo}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {props.children}
                </div>
            </div>
        </div>
    )
}