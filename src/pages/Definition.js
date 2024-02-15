import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import NotFound from "../components/NotFound";
import DefinitionSearch from "../components/DefinitionSearch";

export default function Definition() {
  const [word, setWord] = useState();
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  let { search } = useParams();
  useEffect(() => {
    //const url = "https://httpstat.us/405";
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + search;
    fetch(url)
      .then((response) => {
        if (response.status === 404) {
          setNotFound(true);
          console.log(response.status);
        } else if (response.status === 401) {
          navigate("/login");
        } else if (response.status === 500) {
          // 500 error handling code;
        }
        if (!response.ok) {
          setError(true);
          throw new Error("something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        try {
          setWord(data[0].meanings);
        } catch (error) {
          console.log(error);
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [search]);

  if (notFound === true) {
    return (
      <>
        <NotFound />
        <Link to="/dictionary">Back to Dictionary</Link>
      </>
    );
  }

  if (error === true) {
    return (
      <>
        <p>Something went wrong, try again?</p>
        <Link to="/dictionary">Back to Dictionary</Link>
      </>
    );
  }

  return (
    <>
      <br />
      {word ? (
        <>
          <h1>Definitions</h1>
          {word.map((meaning) => {
            return (
              <div key={uuidv4()}>
                <h4>
                  <b>
                    {meaning.partOfSpeech.charAt(0).toUpperCase() +
                      meaning.partOfSpeech.slice(1) +
                      "(s)"}
                    :
                  </b>
                </h4>
                {meaning.definitions.map((defintion) => {
                  return <p key={uuidv4()}>{defintion.definition}</p>;
                })}
              </div>
            );
          })}
          <h5>Define another word:</h5>
          <DefinitionSearch />
        </>
      ) : null}
    </>
  );
}
