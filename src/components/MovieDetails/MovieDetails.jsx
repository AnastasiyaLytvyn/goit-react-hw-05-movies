import { NavLink, Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  return (
    <div>
      
      <p>Its moviedetails</p>
      <NavLink to={`cast`}>Click here Cast</NavLink>
      <br/>
      <NavLink to={`reviews`}>Click here Reivews</NavLink>
    <Outlet/>
    </div>
  );
};
