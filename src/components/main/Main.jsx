import React from "react";
import Header from "../header/Header";
import Nav from "../nav/Nav";
import Row from "../row/Row";
import request from "../../apis/requests";

function Main() {
  return (
    <main>
      <Nav />
      <Header />
      <Row
        title="NETFLIX ORIGINALS"
        request={request.fetchNetflixOriginals}
        isLarge={true}
      />
      <Row title="Trending" request={request.fetchTrending} />
      <Row title="Top Rated" request={request.fetchTopRated} />
      <Row title="Romance" request={request.fetchRomanceMovies} />
      <Row title="Comedy" request={request.fetchComedyMovies} />
      <Row title="Action" request={request.fetchActonMovies} />
      <Row title="Horror" request={request.fetchHorrorMovies} />
      <Row title="Fantasy" request={request.fetchDocumentaries} />
    </main>
  );
}

export default Main;
