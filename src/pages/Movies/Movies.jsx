export const Movies = () => {
    const handleSubmit=()=>{}
    
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Search movies"></input>
      <button type="submit">Search</button>
    </form>
  );
};
