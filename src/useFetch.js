import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const useFetch = (url) =>{

    const [data, setData] = useState("");
    const[isPending, setIsPending] = useState(true);
    const[error, setError] = useState(null);
    const navigate = useNavigate();

   useEffect(() => {
       const abortCont = new AbortController();
       setTimeout(() => {
           fetch(url, {signal: abortCont.signal})
               .then(res => {
                   if (res.status === 404){
                       navigate("notFound", {replace: true});
                   } else if (!res.ok){
                       throw Error("Could not load data");
                   }
                   return res.json();
               })
               .then(data =>{
                   setIsPending(false);
                   setData(data);
                   setError(null);
               })
               .catch((e) => {
                   setIsPending(false);
                   setError(e.message);
               })
       }, 1000)
       return () => abortCont.abort();

   }, [navigate, url])

    return {data, isPending, error}
}

export default useFetch;
