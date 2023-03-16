import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Coins = () => {
  const {
    data,
    // , error, isLoading
  } = useSWR("https://api2.binance.com/api/v3/ticker/24hr", fetcher, {
    suspense: true,
  });

  // if (error) return <div>failed to load</div>;
  // if (isLoading) return <div>loading...</div>;

  return (
    <ul>
      {data?.map((coin, i) => (
        <li className="my-2" key={i}>
          {coin.lastPrice}
        </li>
      ))}
    </ul>
  );
};

export default Coins;
