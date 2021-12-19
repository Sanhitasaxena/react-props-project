import React from "react";
import Card from "./Card";
// import '../images/bg'

const Home = () => {
    return (
        <>
            <div id="cover" className="container">
                <div id="cover-content">
                    <div className="d-flex justify-content-evenly p-5 m-3">
                        <Card 
                        name="Sanhita" 
                        age="21" 
                        gender="female" 
                        email="sanhitasaxena96903@gmail.com"
                        phone="9981333955"/>

                        <Card
                         name="Rimjhim" 
                         age="21" 
                         gender="female" 
                         email="Rimjhimshrivastava@gmail.com"
                         phone="9876543219" />

                        <Card
                         name="Priya" 
                         age="21" 
                         gender="female" 
                         email="PriyaAGrawal@gmail.com"
                         phone="9876123467" />
                    </div>

                    <div className="d-flex justify-content-evenly p-5 m-3">
                        <Card
                         name="Sanhita" 
                         age="21" 
                         gender="female" 
                         email="PriyaAGrawal@gmail.com"
                         phone="9981333955" />

                        <Card
                         name="Sanhita" 
                         age="21" 
                         gender="female" 
                         email="PriyaAGrawal@gmail.com"
                         phone="9981333955" />
                         
                        <Card
                         name="Sanhita" 
                         age="21" 
                         gender="female" 
                         email="PriyaAGrawal@gmail.com"
                         phone="9981333955" />
                    </div>

                    <div className="d-flex justify-content-evenly p-5 m-3">
                        <Card
                         name="Sanhita" 
                         age="21" 
                         gender="female" 
                         email="PriyaAGrawal@gmail.com"
                         phone="9981333955" />

                        <Card
                         name="Sanhita" 
                         age="21" 
                         gender="female" 
                         email="PriyaAGrawal@gmail.com"
                         phone="9981333955" />

                        <Card
                         name="Sanhita" 
                         age="21" 
                         gender="female" 
                         email="PriyaAGrawal@gmail.com"
                         phone="9981333955" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home