import { useRouter } from "next/dist/client/router"
import Footer from "../components/Footer"
import Header from "../components/Header"
import format  from 'date-fns/format';
import InforCard from "../components/InforCard";
import Head from 'next/head'

function Search({ searchResults }) {
    const router = useRouter();

    // console.log(searchResults);


    const { location, startDate, endDate, noOfGuests } = router.query;
    const formattedStartDate = format(new Date(startDate), 'dd MMMM yy');
    const formattedEndDate = format(new Date(endDate), 'dd MMMM yy');

    const range = `${formattedStartDate} - ${formattedEndDate}`;
    return (
        <div>
             <Head>
                <title className='font-semibold'>Airbnb&nbsp;{range}</title>
                <meta charSet="utf-8" className=''/>
                <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" className="next-head"/>
             </Head>

             
            <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
            <main className='flex '>
                <section className='flex-grow pt-14 px-6'>
                    <p className='text-xs'>300+ Stays - {range} - for {noOfGuests} Guests </p>
                    <h1 className='text-3xl font-semibold mt-3 mb-6'>Stays in {location}</h1>
                    <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-500 whitespace-nowrap'>
                        <p className='button'>Cancellation Flexibility</p>
                        <p className='button'>Type of Place</p>
                        <p className='button'>Price</p>
                        <p className='button'>Rooms and Beds</p>
                        <p className='button'>More Filters</p>
                    </div>
                    <div className='flex flex-col'>
                        {searchResults.map(({ img, location, title, description, star, price, total }) => (
                        <InforCard  
                            key={img}
                            img={img}
                            location={location}
                            title={title}
                            description={description}
                            star={star}
                            price={price}
                            total={total}
                        />
                    ))}
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    )
}

export default Search;


export async function getServerSideProps() {
    const searchResults = await fetch('https://links.papareact.com/isz')
    .then ((res) => res.json());
    return {
        props: {
            searchResults,
        },
    };
};