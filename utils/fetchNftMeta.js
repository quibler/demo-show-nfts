import useSWR from "swr";

export default (uri) => {
  const { data, error } = useSWR(
    // uri || url ? getMetaUrl(details) : null,
    uri,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  return { data, error };
};

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    const info = await res.json();
    error.status = res.status;

    console.warn(url, "\nAn error occured while fetching:\n", info);

    throw error;
  }
  return res.json();
};
