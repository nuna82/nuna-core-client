
// components 
import ReadOur from "./components/ReadOur";

// assets 
import Logo from "./icons/logo.svg"

export default function Home() {


  return (


    <div>

      {/* header or read our  */}
      <ReadOur />

      {/* main  */}
      <main className="container ">

        {/* left sidebare  */}
        <aside>

          {/* logo  */}
          <img src={Logo} alt="nuna logo" />

          <ul>
            <li></li>
          </ul>

        </aside>

        {/* center  */}
        <section>

        </section>

        {/* right sidebar  */}
        <aside>

        </aside>

      </main>
    </div>
  );
}
