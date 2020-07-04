const PortfolioDetail = ({id}) => {

	return (
		<h1>Detail page with ID: { id } </h1>
	)
};

export const getServerSideProps = async ({query}) => {
	return {
		props: query
	}
};


export default PortfolioDetail;