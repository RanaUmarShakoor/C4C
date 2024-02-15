import logo from "./../assets/logo.png";

export function Footer(){
    return (
        <footer className="flex flex-col">
            <section className="flex">
                <div className="flex-1 bg-blue-500">
                    <h3>Quick Links</h3>
                </div>
                <div className="flex-1 bg-slate-500"></div>
                <div className="flex-1 bg-purple-500"></div>
                <div className="flex-1 bg-pink-500"></div>
            </section>
            <section></section>
        </footer>
    )
}