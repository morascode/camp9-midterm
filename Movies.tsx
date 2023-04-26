import React from 'react';
import NavigationLayout from '../components/NavigationLayout';
import PaginationButtons from '../components/PaginationButtons';
import PaginationMovies from '../components/PaginationMovies';

function Movies() {
  return (
    <>
      {/* <PaginationMovies></PaginationMovies> */}
      <PaginationButtons btnid={1}></PaginationButtons>
      <NavigationLayout></NavigationLayout>
    </>
  );
}

export default Movies;
