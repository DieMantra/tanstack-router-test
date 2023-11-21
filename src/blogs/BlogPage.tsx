export default function BlogPage() {
	const url = new URL(window.location.href);

	const urlNumber = String(Number(url.searchParams.get('number')));
	function handleUpdateNumber() {
		url.searchParams.set('number', String(Number(urlNumber) + 1));
		window.history.pushState({}, '', url.toString());
	}
	console.log('reload');
	return (
		<div>
			Blog dafbjhsdb,fjh Page
			<button
				className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
				onClick={handleUpdateNumber}
			>
				{urlNumber}
			</button>
		</div>
	);
}
