import UseFetch from "./UseFetch";
import { useState, useEffect } from "react";
import Element from "./Element";
import { FcPrevious, FcNext } from "react-icons/fc";
import { useAutoAnimate } from "@formkit/auto-animate/react";

function App() {
  const { nacitanie, error, ludia } = UseFetch();
  const [strana, setStrana] = useState(0);
  const [osoby, setOsoby] = useState([]);
  const [parent, enableAnimations] = useAutoAnimate();

  const prev = () => {
    if (strana === 0) return setStrana(ludia.length - 1);
    setStrana(strana - 1);
  };

  const next = () => {
    if (strana === ludia.length - 1) return setStrana(0);
    setStrana(strana + 1);
  };

  const ukazanie = () => {
    if (nacitanie) return;

    setOsoby(ludia[strana]);
  };

  useEffect(() => {
    ukazanie();
  }, [osoby]);

  return (
    <>
      <section className="container ">
        <h1 className="text-center mt-5 mb-5">React projekt - Paginácia</h1>
        {error && (
          <div className="alert alert-danger text-center" role="alert">
            <strong>Error!</strong> Problém s prijatím dát!
          </div>
        )}
        <article className="row" ref={parent}>
          {!nacitanie
            ? ludia[strana].map((osoba) => {
                return <Element key={osoba.id} {...osoba} />;
              })
            : null}
        </article>
        <ul className="pagi pagination">
          <button>
            <FcPrevious onClick={prev} />
          </button>
          {!nacitanie
            ? ludia.map((_, index) => {
                return (
                  <li
                    key={index}
                    className={`page-item page-link ${
                      strana === index ? "pag-active" : null
                    }`}
                    onClick={() => setStrana(index)}
                  >
                    {index + 1}
                  </li>
                );
              })
            : null}
          <button>
            <FcNext onClick={next} />
          </button>
        </ul>
      </section>
    </>
  );
}

export default App;
