import { Link } from "react-router-dom";
const HomePage = (props) => {
    return (
        <>
        <section className="py-6 dark:bg-violet-400 dark:text-gray-900">
	<div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
		<h1 className="text-5xl font-bold leading-none text-center font-sans">{props.title}</h1>
		<p className="pt-2 pb-8 text-xl font-medium text-center font-sans">{props.header}</p>
		<button className="px-8 py-3 text-lg bg-blue-700 text-white font-semibold rounded dark:bg-gray-800 dark:text-gray-50"><Link to="/navbar">Account</Link></button>
        </div>
	
</section>
        </>
    )
}
export default HomePage;