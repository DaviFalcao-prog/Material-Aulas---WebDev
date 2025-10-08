import Cards from "./Cards";

export default function Section({titulo, children}) {
    return (
        <section className="grid gap-3 mb-4">
            <h1>{titulo}</h1>
            <div className="grid grid-cols-3 gap-4">
                {children}
            </div>
        </section>
    );
}