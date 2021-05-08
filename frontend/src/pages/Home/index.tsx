import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
        <Navbar/>
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-6">DSVendas</h1>
                <p className="lead">Analise o desempenho das suas vendas por diferentes perspectivas</p>
                <hr />
                <p>Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end construído com Spring Boot.</p>
                <Link className = "btn btn-secondary bt-lg" to = "/dashboard">
                    Acesse o dashboard
                </Link>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Home;